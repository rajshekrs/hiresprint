"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    hires: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return "Please enter a valid email address"

    // Check for personal email domains
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
      "protonmail.com",
      "mail.com",
      "zoho.com",
      "yandex.com",
    ]
    const domain = email.split("@")[1].toLowerCase()

    if (personalDomains.includes(domain)) {
      return "Please use your company email address"
    }

    return ""
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (!formData.name.trim()) newErrors.name = "Your name is required"

    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.hires) newErrors.hires = "Please select expected hires"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, hires: value }))
    if (errors.hires) {
      setErrors((prev) => ({ ...prev, hires: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after submission
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          hires: "",
        })

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
        }, 3000)
      }, 1000)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      // Reset form state when closing
      setErrors({})
      setIsSubmitted(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Join the HireSprint Waitlist</DialogTitle>
          <DialogDescription className="text-center">
            Be among the first to experience the future of recruiting.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-6">
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Thanks for showing early interest. We will contact you soon.
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.company}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Official Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.name@company.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="hires">How many hires are you planning to make this year?</Label>
              <Select value={formData.hires} onValueChange={handleSelectChange}>
                <SelectTrigger className={errors.hires ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select number of hires" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.hires && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.hires}
                </p>
              )}
            </div>

            <DialogFooter className="pt-4">
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

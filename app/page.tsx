"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Menu, Users, Zap } from "lucide-react"
import { Logo } from "@/components/logo"
import { ComparisonMockups } from "@/components/comparison-mockups"
import { BenefitsVisual } from "@/components/benefits-visual"
import { useState } from "react"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("why-hiresprint")}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Why HireSprint
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Testimonials
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={openWaitlistModal}>
              Join the Waitlist
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 px-4 absolute w-full shadow-lg">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("why-hiresprint")}
                className="text-sm font-medium py-2 hover:bg-purple-50 rounded-md px-3 text-left"
              >
                Why HireSprint
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-sm font-medium py-2 hover:bg-purple-50 rounded-md px-3 text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm font-medium py-2 hover:bg-purple-50 rounded-md px-3 text-left"
              >
                Testimonials
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-900">
                  <span>Built for modern hiring teams</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-purple-500">Grow your team</span> — without growing your hiring costs.
                </h1>
                <p className="text-2xl font-bold bg-purple-100 text-purple-800 px-4 py-2 rounded-md inline-block">
                  3 Hires, 12 Months, 1 Flat Fee!
                </p>
                <p className="text-xl">
                  Smarter hiring strategies, AI precision, and flat-rate simplicity — built for scaling teams.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600" onClick={openWaitlistModal}>
                    Join the Waitlist
                    <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto w-full overflow-hidden rounded-xl bg-gradient-to-b from-purple-100 to-purple-50 p-8">
                <ComparisonMockups />
              </div>
            </div>
          </div>
        </section>

        <section id="why-hiresprint" className="bg-gray-50 py-12 md:py-24 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[58rem] space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-900">
                <span>Why HireSprint</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recruitment Reimagined</h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've eliminated the pain points of traditional recruiting to make hiring simple, predictable, and
                effective.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-purple-100 p-4">
                  <DollarSign size={24} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Flat Monthly Fee</h3>
                <p className="text-gray-500">No hidden charges or commissions.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-purple-100 p-4">
                  <Users size={24} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">On-Demand Recruiters</h3>
                <p className="text-gray-500">Talent experts ready when you are.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-purple-100 p-4">
                  <Zap size={24} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Faster Hiring</h3>
                <p className="text-gray-500">Skip negotiations, start interviews quicker.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="container mx-auto px-4 py-12 md:py-24 md:px-6 scroll-mt-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-900">
                <span>Benefits</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Hire faster, with better results</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stop spending hours scrolling through resumes. Let HireSprint do the heavy lifting so you can focus on
                what matters—connecting with the right candidates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Reduce time-to-hire by up to 60%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Reach candidates beyond your network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Improve quality of hire with our best AI-driven hiring strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Save recruiting costs with flat fee, no surprises</span>
                </li>
              </ul>
              <Button className="bg-orange-500 hover:bg-orange-600 mt-4" onClick={openWaitlistModal}>
                Join the Waitlist
              </Button>
            </div>
            <div className="mx-auto w-full h-[400px]">
              <BenefitsVisual />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-50 py-12 md:py-24 scroll-mt-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[58rem] space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by hiring teams</h2>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our early access users are saying about HireSprint.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500">HR Director, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "HireSprint cut our hiring time in half. We found a senior developer within days instead of weeks."
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <h3 className="font-medium">Michael Chen</h3>
                      <p className="text-sm text-gray-500">Founder, StartupX</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "As a startup founder, I don't have time to constantly check job boards. HireSprint does it for me."
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <h3 className="font-medium">Jessica Miller</h3>
                      <p className="text-sm text-gray-500">Talent Acquisition, EnterpriseY</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "The quality of candidates HireSprint finds is impressive. It's like having an expert recruiter on
                    call 24/7."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-24 md:px-6 text-center">
          <div className="mx-auto max-w-[58rem] space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to transform your hiring process?</h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the waitlist today and be among the first to experience the future of recruiting.
            </p>
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-6 h-auto text-lg"
                onClick={openWaitlistModal}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-6 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Logo size="small" />
              <p className="text-center text-sm text-gray-500 md:text-left">
                © {new Date().getFullYear()} HireSprint. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

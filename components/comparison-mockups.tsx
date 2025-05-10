import { Button } from "@/components/ui/button"
import { CheckCircle, Users } from "lucide-react"

export function ComparisonMockups() {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      {/* Traditional Recruiting Mockup */}
      <div className="relative w-full max-w-[240px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
          Traditional Recruiting
        </div>
        <div className="rounded-[24px] border-[8px] border-black bg-white shadow-lg">
          <div className="overflow-hidden rounded-[12px]">
            <div className="bg-gray-500 p-2 text-white text-center text-sm">New Position Opened</div>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users size={20} className="text-gray-500" />
                </div>
                <div>
                  <h3 className="font-medium">Senior Developer</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">5+ years React experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">TypeScript expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">Remote friendly</span>
                </div>
              </div>
              <div className="relative">
                <Button className="w-full bg-gray-500 hover:bg-gray-600 opacity-80">15% Commission</Button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-0.5 w-full bg-red-500 transform rotate-12"></div>
                  <div className="h-0.5 w-full bg-red-500 transform -rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VS Divider */}
      <div className="flex flex-col items-center justify-center py-2 md:py-0">
        <div className="bg-purple-100 text-purple-800 font-bold text-sm px-3 py-1 rounded-full">VS</div>
        <div className="hidden md:block h-16 w-0.5 bg-purple-200 my-2"></div>
      </div>

      {/* HireSprint Mockup */}
      <div className="relative w-full max-w-[240px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold py-1 px-3 rounded-full">
          HireSprint
        </div>
        <div className="rounded-[24px] border-[8px] border-black bg-white shadow-lg">
          <div className="overflow-hidden rounded-[12px]">
            <div className="bg-purple-500 p-2 text-white text-center text-sm">New Candidate Alert</div>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users size={20} className="text-gray-500" />
                </div>
                <div>
                  <h3 className="font-medium">Senior Developer</h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">5+ years React experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">TypeScript expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm">Remote friendly</span>
                </div>
              </div>
              <Button className="w-full bg-purple-500 hover:bg-purple-600">Flat Fee</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

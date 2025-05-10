import { CheckCircle, Clock, Brain, Globe, DollarSign } from "lucide-react"

export function BenefitsVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-xl bg-gradient-to-br from-purple-50 to-white p-6 shadow-lg border border-purple-100 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50 opacity-70"></div>

      {/* Central circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-16 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute -inset-8 bg-purple-200 rounded-full opacity-30"></div>
          <div className="relative rounded-full bg-white p-5 shadow-lg border border-purple-100">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Benefit icons */}
      <div className="absolute top-8 left-1/4 transform -translate-x-1/2">
        <div className="bg-white rounded-full p-4 shadow-md border border-purple-100">
          <Clock className="h-8 w-8 text-purple-600" />
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm font-medium">60% Faster</span>
        </div>
      </div>

      <div className="absolute top-8 right-1/4 transform translate-x-1/2">
        <div className="bg-white rounded-full p-4 shadow-md border border-purple-100">
          <Globe className="h-8 w-8 text-blue-600" />
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm font-medium">Wider Reach</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2">
        <div className="bg-white rounded-full p-4 shadow-md border border-purple-100">
          <Brain className="h-8 w-8 text-indigo-600" />
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm font-medium">AI-Driven</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-1/4 transform translate-x-1/2">
        <div className="bg-white rounded-full p-4 shadow-md border border-purple-100">
          <DollarSign className="h-8 w-8 text-orange-600" />
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm font-medium">Flat Fee</span>
        </div>
      </div>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#d8b4fe" strokeWidth="1" strokeDasharray="4" />
        <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#d8b4fe" strokeWidth="1" strokeDasharray="4" />
        <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#d8b4fe" strokeWidth="1" strokeDasharray="4" />
        <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#d8b4fe" strokeWidth="1" strokeDasharray="4" />
      </svg>
    </div>
  )
}

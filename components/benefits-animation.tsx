import { ArrowUpRight, Brain, Clock, DollarSign, Search, Users, CheckCircle } from "lucide-react"

export function BenefitsAnimation() {
  return (
    <div className="relative w-full h-full min-h-[450px] rounded-xl bg-gradient-to-br from-purple-50 to-white p-6 shadow-lg border border-purple-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-10 transform rotate-3"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-purple-300 opacity-10 transform -rotate-3"></div>
      </div>

      {/* Time savings animation */}
      <div className="absolute top-6 left-6 flex flex-col items-center">
        <div className="relative animate-pulse">
          <div className="rounded-full bg-purple-100 p-3">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div className="absolute -bottom-1 -right-1">
            <div className="bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              60
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <div className="text-sm font-bold text-purple-800">Faster Hiring</div>
        </div>
        <div className="mt-2">
          <div className="w-[80px] h-[60px] rounded-md shadow-sm border border-purple-100 bg-white p-2">
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-red-500 mr-1" />
                <div className="h-0.5 w-8 bg-purple-500"></div>
                <Clock className="h-4 w-4 text-green-500 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network reach animation */}
      <div className="absolute top-1/4 right-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-purple-200 rounded-full opacity-30 animate-ping"></div>
          <div className="relative rounded-full bg-purple-100 p-3">
            <Search className="h-6 w-6 text-purple-600" />
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <ArrowUpRight className="h-5 w-5 text-purple-500" />
        </div>
        <div className="mt-2">
          <div className="w-[90px] h-[70px] rounded-md shadow-sm border border-purple-100 bg-white p-2">
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users size={16} className="text-purple-600" />
                </div>
                <div className="absolute -right-4 -top-2 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Users size={12} className="text-green-600" />
                </div>
                <div className="absolute -left-4 -bottom-2 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users size={12} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-driven strategies */}
      <div className="absolute bottom-1/3 left-1/4">
        <div className="rounded-full bg-purple-100 p-3 animate-bounce">
          <Brain className="h-6 w-6 text-purple-600" />
        </div>
        <div className="mt-2 flex justify-center space-x-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 w-3 rounded-full bg-purple-${i * 200}`}></div>
          ))}
        </div>
        <div className="mt-2">
          <div className="w-[100px] h-[80px] rounded-md shadow-sm border border-purple-100 bg-white p-2">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-xs font-bold text-purple-800">AI Matching</div>
              <div className="mt-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-100 border border-red-300"></div>
                <div className="h-0.5 w-4 bg-purple-300"></div>
                <div className="h-4 w-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center">
                  <CheckCircle size={10} className="text-green-500" />
                </div>
              </div>
              <div className="mt-1 flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-100 border border-blue-300"></div>
                <div className="h-0.5 w-4 bg-purple-300"></div>
                <div className="h-4 w-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center">
                  <CheckCircle size={10} className="text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost savings */}
      <div className="absolute bottom-6 right-1/4">
        <div className="rounded-full bg-orange-100 p-3">
          <DollarSign className="h-6 w-6 text-orange-500" />
        </div>
        <div className="mt-2 flex justify-center">
          <div className="text-xs font-bold text-green-600">FLAT FEE</div>
        </div>
        <div className="mt-2">
          <div className="w-[80px] h-[60px] rounded-md shadow-sm border border-purple-100 bg-white p-2">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 text-green-500" />
                <div className="text-xs font-bold text-green-600">FIXED</div>
              </div>
              <div className="mt-1 relative">
                <div className="text-xs text-red-500 opacity-70">15%</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-0.5 w-full bg-red-500 transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central element - candidates */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-400 rounded-full opacity-10"></div>
          <div className="absolute -inset-8 bg-purple-300 rounded-full opacity-5"></div>
          <div className="relative rounded-full bg-white p-4 shadow-md border border-purple-200">
            <Users className="h-10 w-10 text-purple-600" />
          </div>
        </div>
        <div className="mt-3 text-center">
          <div className="text-sm font-bold text-purple-800">Quality Candidates</div>
        </div>
        <div className="mt-2 flex justify-center">
          <div className="w-[120px] h-[100px] rounded-md shadow-sm border border-purple-100 bg-white p-2">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex space-x-2">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users size={20} className="text-purple-600" />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-xs font-bold">Senior Dev</div>
                  <div className="flex items-center">
                    <CheckCircle size={10} className="text-green-500 mr-1" />
                    <span className="text-[10px]">Perfect Match</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full bg-purple-100 h-4 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-4/5"></div>
              </div>
              <div className="mt-1 text-[10px] text-right w-full">80% Match</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <div className="bg-purple-100 rounded-full p-1">
          <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-2/3 transform -translate-x-1/2 animate-pulse opacity-70">
        <div className="bg-orange-100 rounded-full p-1">
          <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Interactive elements */}
      <div className="absolute top-1/4 left-1/3 transform rotate-12 transition-transform hover:scale-110">
        <div className="w-10 h-10 bg-white rounded-md shadow-sm border border-purple-100 flex items-center justify-center">
          <div className="w-6 h-8 bg-gray-100 border border-gray-200 flex flex-col">
            <div className="h-1 w-4 bg-gray-300 m-1"></div>
            <div className="h-1 w-3 bg-gray-300 m-1"></div>
            <div className="h-1 w-4 bg-gray-300 m-1"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-1/3 transform -rotate-6 transition-transform hover:scale-110">
        <div className="w-10 h-10 bg-white rounded-md shadow-sm border border-purple-100 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={12} className="text-green-500" />
          </div>
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

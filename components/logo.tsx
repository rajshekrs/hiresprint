export function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "small" }) {
  const textSize = size === "small" ? "text-xl" : "text-2xl"
  const underlineWidth = size === "small" ? "w-[60px]" : "w-[80px]"
  const underlineHeight = size === "small" ? "h-[2px]" : "h-[3px]"

  return (
    <div className={`inline-flex flex-col items-center bg-purple-100 px-4 py-2 rounded-md ${className}`}>
      <span className={`${textSize} font-bold text-purple-600`}>HireSprint</span>
      <div className={`${underlineHeight} ${underlineWidth} bg-purple-600 mt-0.5`}></div>
    </div>
  )
}

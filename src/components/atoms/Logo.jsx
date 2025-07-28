import { cn } from "@/utils/cn"

const Logo = ({ className, size = "md" }) => {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  }
  
  return (
    <div className={cn("font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent", sizes[size], className)}>
      김준태 강점기반 글쓰기
    </div>
  )
}

export default Logo
import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Button = forwardRef(({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  disabled = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
  
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl",
    accent: "bg-accent-500 text-gray-900 hover:bg-accent-600 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost: "text-gray-700 hover:bg-gray-100",
    success: "bg-success text-white hover:bg-green-600 shadow-lg hover:shadow-xl"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
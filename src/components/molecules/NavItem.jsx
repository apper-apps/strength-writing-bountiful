import { NavLink } from "react-router-dom"
import { cn } from "@/utils/cn"

const NavItem = ({ to, children, className, mobile = false }) => {
  const baseStyles = "font-medium transition-all duration-200 hover:text-primary-600"
  const desktopStyles = "text-gray-700"
  const mobileStyles = "block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-lg"
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          baseStyles,
          mobile ? mobileStyles : desktopStyles,
          isActive && (mobile ? "bg-primary-50 text-primary-600" : "text-primary-600"),
          className
        )
      }
    >
      {children}
    </NavLink>
  )
}

export default NavItem
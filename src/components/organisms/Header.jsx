import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/components/atoms/Logo"
import NavItem from "@/components/molecules/NavItem"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { label: "홈", path: "/" },
    { label: "강의", path: "/courses" },
    { label: "커뮤니티", path: "/community" },
    { label: "멤버십", path: "/membership" }
  ]
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="lg" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.path} to={item.path}>
                {item.label}
              </NavItem>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="accent" size="sm">
              무료 체험하기
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMobileMenu}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <nav className="p-6 space-y-2">
                {navItems.map((item) => (
                  <NavItem 
                    key={item.path} 
                    to={item.path} 
                    mobile 
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </NavItem>
                ))}
                <div className="pt-6 border-t border-gray-200">
                  <Button variant="accent" size="md" className="w-full">
                    무료 체험하기
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
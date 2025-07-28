import Logo from "@/components/atoms/Logo"
import ApperIcon from "@/components/ApperIcon"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="text-white mb-4" size="lg" />
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              강점기반 글쓰기로 여러분의 글이 월수익을 만들어내는 플랫폼입니다. 
              개인의 고유한 강점을 발견하고 이를 글쓰기로 수익화하는 체계적인 방법을 제공합니다.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <ApperIcon name="Youtube" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <ApperIcon name="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                <ApperIcon name="Mail" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">홈</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-white transition-colors">강의</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white transition-colors">커뮤니티</a></li>
              <li><a href="/membership" className="text-gray-400 hover:text-white transition-colors">멤버십</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">문의하기</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <ApperIcon name="Mail" className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">info@writing-platform.com</span>
              </li>
              <li className="flex items-center gap-3">
                <ApperIcon name="Phone" className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">02-1234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <ApperIcon name="MapPin" className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-400">서울특별시 강남구<br />강남대로 123길 45</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 김준태 강점기반 글쓰기. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
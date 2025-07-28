import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-6 py-3 shadow-lg"
          >
            <ApperIcon name="Sparkles" className="w-5 h-5 text-accent-500" />
            <span className="text-primary-700 font-semibold">강점기반 글쓰기 플랫폼</span>
          </motion.div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              강점승부로,
            </span>
            <br />
            <span className="text-gray-900">글 하나가</span>
            <br />
            <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">
              월수익이 된다
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            당신만의 강점을 발견하고, 체계적인 글쓰기 방법론으로 
            <br className="hidden md:block" />
            지속가능한 콘텐츠 수익을 만들어보세요
          </p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button variant="accent" size="lg" className="flex items-center gap-3 shadow-xl">
              <ApperIcon name="Play" className="w-5 h-5" />
              무료 체험 시작하기
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-3">
              <ApperIcon name="BookOpen" className="w-5 h-5" />
              강의 둘러보기
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                1,200+
              </div>
              <div className="text-gray-600 mt-1">수강생</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">
                평균 150만원
              </div>
              <div className="text-gray-600 mt-1">월수익 달성</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-success to-green-600 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-gray-600 mt-1">만족도</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
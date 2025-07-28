import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import TestimonialCard from "@/components/molecules/TestimonialCard"
import testimonialsService from "@/services/api/testimonialsService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  const loadTestimonials = async () => {
    try {
      setError("")
      setLoading(true)
      const data = await testimonialsService.getAll()
      setTestimonials(data)
    } catch (err) {
      setError("후기를 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadTestimonials()
  }, [])
  
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Loading variant="cards" />
        </div>
      </section>
    )
  }
  
  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message={error} onRetry={loadTestimonials} />
        </div>
      </section>
    )
  }
  
  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Empty 
            title="아직 후기가 없습니다"
            message="곧 수강생들의 생생한 후기가 추가될 예정입니다."
            icon="MessageSquare"
          />
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              수강생 성공 스토리
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            실제 수강생들이 강점기반 글쓰기로 달성한 놀라운 수익 결과를 확인해보세요
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.Id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
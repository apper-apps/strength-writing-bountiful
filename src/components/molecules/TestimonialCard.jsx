import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="testimonial-card"
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover shadow-lg"
        />
        <div>
          <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.role}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-gradient-to-r from-success to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              월 {testimonial.income} 달성
            </div>
          </div>
        </div>
      </div>
      
      <blockquote className="text-gray-700 leading-relaxed mb-4">
        "{testimonial.story}"
      </blockquote>
      
      <div className="flex items-center gap-1 text-accent-500">
        {[...Array(5)].map((_, i) => (
          <ApperIcon key={i} name="Star" className="w-4 h-4 fill-current" />
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialCard
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const ProcessStepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="process-step text-center relative"
    >
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
          {step.number}
        </div>
      </div>
      
      <div className="pt-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name={step.icon} className="w-8 h-8 text-primary-500" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </div>
      
      {index < 3 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
          <ApperIcon name="ArrowRight" className="w-6 h-6 text-primary-300" />
        </div>
      )}
    </motion.div>
  )
}

export default ProcessStepCard
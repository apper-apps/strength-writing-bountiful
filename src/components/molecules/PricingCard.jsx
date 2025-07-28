import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const PricingCard = ({ tier, index, onSelect }) => {
  const isPopular = tier.isPopular
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative bg-white rounded-xl shadow-card p-8 transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-2 ${
        isPopular ? "border-2 border-accent-500 scale-105" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            인기 플랜
          </div>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
        <div className="mb-8">
          <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
          {tier.price !== "무료" && tier.price !== "문의" && (
            <span className="text-gray-600 ml-2">/월</span>
          )}
        </div>
        
        <ul className="space-y-4 mb-8">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <ApperIcon name="Check" className="w-5 h-5 text-success" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant={isPopular ? "accent" : "outline"}
          size="lg"
          className="w-full"
          onClick={() => onSelect(tier)}
        >
          {tier.ctaText}
        </Button>
      </div>
    </motion.div>
  )
}

export default PricingCard
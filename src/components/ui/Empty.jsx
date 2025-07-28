import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  title = "아직 콘텐츠가 없습니다", 
  message = "새로운 콘텐츠가 곧 추가될 예정입니다.", 
  actionText = "홈으로 돌아가기",
  onAction,
  icon = "FileText"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-12 text-center"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name={icon} className="w-10 h-10 text-gray-400" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md">{message}</p>
      
      {onAction && (
        <button
          onClick={onAction}
          className="btn-outline flex items-center gap-2"
        >
          <ApperIcon name="Home" size={16} />
          {actionText}
        </button>
      )}
    </motion.div>
  )
}

export default Empty
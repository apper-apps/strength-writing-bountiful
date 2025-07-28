import { motion } from "framer-motion"

const Loading = ({ variant = "default" }) => {
  if (variant === "hero") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100">
        <div className="text-center space-y-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full mx-auto"
          />
          <div className="space-y-4">
            <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-md mx-auto" />
            <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse max-w-lg mx-auto" />
            <div className="flex gap-4 justify-center mt-8">
              <div className="h-12 w-32 bg-gradient-to-r from-primary-200 to-primary-300 rounded-lg animate-pulse" />
              <div className="h-12 w-32 bg-gradient-to-r from-accent-200 to-accent-300 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-card">
            <div className="animate-pulse space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg" />
              <div className="space-y-2">
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full"
      />
    </div>
  )
}

export default Loading
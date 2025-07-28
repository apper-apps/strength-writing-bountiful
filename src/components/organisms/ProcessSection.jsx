import { motion } from "framer-motion"
import ProcessStepCard from "@/components/molecules/ProcessStepCard"
import processStepsService from "@/services/api/processStepsService"
import { useState, useEffect } from "react"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const ProcessSection = () => {
  const [steps, setSteps] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  const loadSteps = async () => {
    try {
      setError("")
      setLoading(true)
      const data = await processStepsService.getAll()
      setSteps(data)
    } catch (err) {
      setError("프로세스 정보를 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadSteps()
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
          <Error message={error} onRetry={loadSteps} />
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
              4단계 체계적 프로세스
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            검증된 방법론으로 당신의 강점을 발견하고 글쓰기를 통해 수익을 창출하는 단계별 로드맵
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStepCard
              key={step.Id}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
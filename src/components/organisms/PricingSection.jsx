import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import PricingCard from "@/components/molecules/PricingCard"
import membershipTiersService from "@/services/api/membershipTiersService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const PricingSection = () => {
  const [tiers, setTiers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  const loadTiers = async () => {
    try {
      setError("")
      setLoading(true)
      const data = await membershipTiersService.getAll()
      setTiers(data)
    } catch (err) {
      setError("멤버십 정보를 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadTiers()
  }, [])
  
  const handleTierSelect = (tier) => {
    toast.success(`${tier.name} 플랜이 선택되었습니다!`)
  }
  
  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Loading variant="cards" />
        </div>
      </section>
    )
  }
  
  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message={error} onRetry={loadTiers} />
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              멤버십 플랜
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개인의 학습 속도와 목표에 맞는 플랜을 선택하여 글쓰기 수익화 여정을 시작하세요
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.Id}
              tier={tier}
              index={index}
              onSelect={handleTierSelect}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
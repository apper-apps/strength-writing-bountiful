import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import PricingCard from "@/components/molecules/PricingCard"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import membershipTiersService from "@/services/api/membershipTiersService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const Membership = () => {
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

  const benefits = [
    {
      icon: "BookOpen",
      title: "체계적인 커리큘럼",
      description: "4단계 프로세스를 통한 단계별 학습으로 확실한 실력 향상"
    },
    {
      icon: "Users",
      title: "1:1 맞춤 피드백",
      description: "개인별 강점 분석과 맞춤형 글쓰기 코칭 제공"
    },
    {
      icon: "TrendingUp",
      title: "수익화 전략",
      description: "다양한 플랫폼별 최적화된 수익화 방법론 전수"
    },
    {
      icon: "MessageSquare",
      title: "커뮤니티 지원",
      description: "동기부여와 정보 공유가 가능한 활발한 커뮤니티 활동"
    },
    {
      icon: "Zap",
      title: "실시간 Q&A",
      description: "궁금한 점은 언제든 실시간으로 문의하고 답변 받기"
    },
    {
      icon: "Award",
      title: "수료증 발급",
      description: "과정 완료 시 김준태 강점기반 글쓰기 수료증 발급"
    }
  ]

  const faqs = [
    {
      question: "글쓰기 초보도 수강할 수 있나요?",
      answer: "네, 물론입니다. 강점기반 글쓰기는 글쓰기 경험과 관계없이 누구나 시작할 수 있도록 체계적으로 설계되었습니다. 초보자를 위한 기초 과정부터 차근차근 진행됩니다."
    },
    {
      question: "수익 발생까지 얼마나 걸리나요?",
      answer: "개인차가 있지만, 평균적으로 3-6개월 내에 첫 수익을 경험하시는 분들이 많습니다. 꾸준히 학습하고 실습하신다면 더 빠른 결과도 가능합니다."
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "수강 후 7일 이내에는 100% 환불이 가능합니다. 단, 강의 진도가 30%를 넘지 않아야 합니다. 자세한 환불 정책은 이용약관을 참고해주세요."
    },
    {
      question: "오프라인 모임이나 워크샵은 없나요?",
      answer: "정기적으로 오프라인 워크샵과 네트워킹 모임을 진행합니다. 프리미엄 이상 회원님들께는 우선 참가 기회를 제공합니다."
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Loading variant="hero" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Error message={error} onRetry={loadTiers} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50">
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                멤버십 플랜
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              당신의 글쓰기 여정에 맞는 최적의 플랜을 선택하여 수익화 목표를 달성하세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                멤버십 혜택
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              강점기반 글쓰기 멤버십으로 얻을 수 있는 특별한 혜택들을 확인해보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6">
                  <ApperIcon name={benefit.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                자주 묻는 질문
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              멤버십에 대해 궁금한 점들을 확인해보세요
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <ApperIcon name="HelpCircle" className="w-5 h-5 text-primary-500" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              지금 시작하여 <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">월수익을 만들어보세요</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              1,200명이 넘는 수강생들이 이미 경험한 강점기반 글쓰기의 놀라운 효과
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="flex items-center gap-3">
                <ApperIcon name="Rocket" className="w-5 h-5" />
                무료 체험 시작하기
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-3">
                <ApperIcon name="Phone" className="w-5 h-5" />
                상담 받기
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Membership
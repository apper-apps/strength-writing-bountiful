import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "강점 발견 워크샵",
      description: "당신만의 고유한 강점을 발견하고 글쓰기에 활용하는 방법을 배웁니다.",
      duration: "4주",
      level: "초급",
      students: 324,
      rating: 4.9,
      price: "무료",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "콘셉트 기획 마스터",
      description: "독자의 마음을 사로잡는 콘셉트를 기획하고 차별화된 글쓰기 방향을 설정합니다.",
      duration: "6주",
      level: "중급",
      students: 256,
      rating: 4.8,
      price: "39,000원",
      thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "글쓰기 실전 트레이닝",
      description: "체계적인 글쓰기 방법론과 실전 연습을 통해 퀄리티 높은 글을 완성합니다.",
      duration: "8주",
      level: "중급",
      students: 412,
      rating: 4.9,
      price: "59,000원",
      thumbnail: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "수익화 전략 마스터",
      description: "다양한 수익화 채널을 활용하여 글쓰기를 통한 안정적인 수입을 만드는 방법을 학습합니다.",
      duration: "10주",
      level: "고급",
      students: 189,
      rating: 5.0,
      price: "99,000원",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "개인 브랜딩 워크샵",
      description: "개인 브랜드를 구축하고 영향력을 확장하여 더 큰 수익을 창출하는 전략을 배웁니다.",
      duration: "6주",
      level: "고급",
      students: 157,
      rating: 4.8,
      price: "79,000원",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "AI 활용 글쓰기",
      description: "AI 도구를 활용하여 효율적으로 퀄리티 높은 글을 작성하는 최신 방법론을 익힙니다.",
      duration: "4주",
      level: "중급",
      students: 298,
      rating: 4.7,
      price: "49,000원",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "초급": return "bg-green-100 text-green-800"
      case "중급": return "bg-accent-100 text-accent-800"
      case "고급": return "bg-primary-100 text-primary-800"
      default: return "bg-gray-100 text-gray-800"
    }
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
                강의 목록
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적인 커리큘럼으로 단계별 학습하며 글쓰기 수익화 전문가가 되어보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-gray-900">{course.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ApperIcon name="Clock" className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ApperIcon name="Users" className="w-4 h-4" />
                      <span>{course.students}명</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ApperIcon name="Star" className="w-4 h-4 text-accent-500 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <Button variant="primary" className="w-full">
                    강의 신청하기
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
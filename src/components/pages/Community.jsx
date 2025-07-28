import { motion } from "framer-motion"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "첫 번째 글에서 조회수 1만을 달성하는 방법",
      author: "김성공",
      replies: 24,
      views: 892,
      category: "팁 공유",
      timeAgo: "2시간 전",
      isHot: true
    },
    {
      id: 2,
      title: "브런치 첫 글로 월 50만원 수익 달성 후기",
      author: "박수익",
      replies: 18,
      views: 1234,
      category: "성공사례",
      timeAgo: "4시간 전",
      isHot: true
    },
    {
      id: 3,
      title: "강점 찾기가 어려운 분들을 위한 실전 팁",
      author: "이멘토",
      replies: 31,
      views: 567,
      category: "강점찾기",
      timeAgo: "6시간 전",
      isHot: false
    },
    {
      id: 4,
      title: "콘셉트 기획 단계에서 자주 하는 실수들",
      author: "최전문가",
      replies: 12,
      views: 445,
      category: "콘셉트",
      timeAgo: "1일 전",
      isHot: false
    },
    {
      id: 5,
      title: "네이버 블로그 vs 브런치, 어떤 플랫폼이 더 좋을까요?",
      author: "정궁금",
      replies: 27,
      views: 789,
      category: "플랫폼",
      timeAgo: "1일 전",
      isHot: false
    },
    {
      id: 6,
      title: "글쓰기 습관을 만드는 나만의 노하우",
      author: "한꾸준",
      replies: 15,
      views: 623,
      category: "습관만들기",
      timeAgo: "2일 전",
      isHot: false
    }
  ]

  const successStories = [
    {
      id: 1,
      name: "김성공",
      income: "월 320만원",
      story: "3개월 만에 네이버 블로그로 월 300만원 수익을 달성했습니다!",
      platform: "네이버 블로그",
      timeAgo: "1주 전",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "박수익",
      income: "월 180만원",
      story: "브런치에서 연재한 글이 화제가 되어 책 출간까지 이어졌어요.",
      platform: "브런치",
      timeAgo: "2주 전",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "이창업",
      income: "월 450만원",
      story: "개인 브랜딩을 통해 온라인 강의까지 런칭하게 되었습니다.",
      platform: "인스타그램",
      timeAgo: "3주 전",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      "팁 공유": "bg-blue-100 text-blue-800",
      "성공사례": "bg-green-100 text-green-800",
      "강점찾기": "bg-purple-100 text-purple-800",
      "콘셉트": "bg-orange-100 text-orange-800",
      "플랫폼": "bg-pink-100 text-pink-800",
      "습관만들기": "bg-indigo-100 text-indigo-800"
    }
    return colors[category] || "bg-gray-100 text-gray-800"
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
                커뮤니티
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              함께 성장하는 글쓰기 커뮤니티에서 경험을 나누고 서로 도움을 주세요
            </p>
            <Button variant="accent" size="lg" className="flex items-center gap-2 mx-auto">
              <ApperIcon name="PenTool" className="w-5 h-5" />
              새 글 작성하기
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Discussion Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">최신 토론</h2>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">최신순</Button>
                  <Button variant="ghost" size="sm">인기순</Button>
                </div>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(discussion.category)}`}>
                            {discussion.category}
                          </span>
                          {discussion.isHot && (
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                              <ApperIcon name="Flame" className="w-3 h-3" />
                              HOT
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{discussion.author}</span>
                          <div className="flex items-center gap-1">
                            <ApperIcon name="MessageSquare" className="w-4 h-4" />
                            <span>{discussion.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ApperIcon name="Eye" className="w-4 h-4" />
                            <span>{discussion.views}</span>
                          </div>
                          <span>{discussion.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Success Stories */}
            <div className="bg-white rounded-xl shadow-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ApperIcon name="Trophy" className="w-5 h-5 text-accent-500" />
                최근 성공사례
              </h3>
              <div className="space-y-4">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">{story.name}</span>
                        <span className="bg-gradient-to-r from-success to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {story.income}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{story.story}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{story.platform}</span>
                        <span>•</span>
                        <span>{story.timeAgo}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-xl shadow-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">커뮤니티 현황</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">전체 회원</span>
                  <span className="font-bold text-primary-600">1,247명</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">이번 주 신규 글</span>
                  <span className="font-bold text-accent-600">89개</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">총 성공사례</span>
                  <span className="font-bold text-success">156개</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">평균 월수익</span>
                  <span className="font-bold text-gray-900">185만원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
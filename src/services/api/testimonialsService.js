import testimonialsData from "@/services/mockData/testimonials.json"

const testimonialsService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 350))
    return [...testimonialsData]
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const testimonial = testimonialsData.find(item => item.Id === parseInt(id))
    if (!testimonial) {
      throw new Error("Testimonial not found")
    }
    return { ...testimonial }
  },

  create: async (testimonialData) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const maxId = Math.max(...testimonialsData.map(t => t.Id))
    const newTestimonial = {
      Id: maxId + 1,
      ...testimonialData
    }
    testimonialsData.push(newTestimonial)
    return { ...newTestimonial }
  },

  update: async (id, testimonialData) => {
    await new Promise(resolve => setTimeout(resolve, 400))
    const index = testimonialsData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Testimonial not found")
    }
    testimonialsData[index] = { ...testimonialsData[index], ...testimonialData }
    return { ...testimonialsData[index] }
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = testimonialsData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Testimonial not found")
    }
    const deletedTestimonial = testimonialsData.splice(index, 1)[0]
    return { ...deletedTestimonial }
  }
}

export default testimonialsService
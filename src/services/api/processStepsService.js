import processStepsData from "@/services/mockData/processSteps.json"

const processStepsService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return [...processStepsData]
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const step = processStepsData.find(item => item.Id === parseInt(id))
    if (!step) {
      throw new Error("Process step not found")
    }
    return { ...step }
  }
}

export default processStepsService
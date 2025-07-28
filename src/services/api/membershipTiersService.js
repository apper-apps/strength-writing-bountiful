import membershipTiersData from "@/services/mockData/membershipTiers.json"

const membershipTiersService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 400))
    return [...membershipTiersData]
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200))
    const tier = membershipTiersData.find(item => item.Id === parseInt(id))
    if (!tier) {
      throw new Error("Membership tier not found")
    }
    return { ...tier }
  },

  create: async (tierData) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const maxId = Math.max(...membershipTiersData.map(t => t.Id))
    const newTier = {
      Id: maxId + 1,
      ...tierData
    }
    membershipTiersData.push(newTier)
    return { ...newTier }
  },

  update: async (id, tierData) => {
    await new Promise(resolve => setTimeout(resolve, 400))
    const index = membershipTiersData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Membership tier not found")
    }
    membershipTiersData[index] = { ...membershipTiersData[index], ...tierData }
    return { ...membershipTiersData[index] }
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const index = membershipTiersData.findIndex(item => item.Id === parseInt(id))
    if (index === -1) {
      throw new Error("Membership tier not found")
    }
    const deletedTier = membershipTiersData.splice(index, 1)[0]
    return { ...deletedTier }
  }
}

export default membershipTiersService
import { getIdea, getAnalytics, updateIdea } from './idea.db'

const resolvers = {
  Query: {
    test: () => 'test',
    getIdea: async (_, { id }) => {
      const idea = await getIdea(id)
      return { ...idea }
    },
  },
  Mutation: {
    updateIdea: async (_, { idea, id }) => {
      const updatedFields = await updateIdea(idea, id)
      return updatedFields
    },
  },
  Idea: {
    analytics: async () => {
      const analytics = await getAnalytics()
      return analytics
    },
  },
}

export default resolvers

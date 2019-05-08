import { gql } from 'apollo-server-express'

const typeDefs = gql`
  extend type Query {
    test: String
    getIdea(id: ID!): Idea
  }

  extend type Mutation {
    updateIdea(idea: IdeaInput!, id: ID!): Idea
  }

  input IdeaInput {
    name: String
    numberOfComments: Int
  }

  type Idea {
    name: String!
    id: ID!
    numberOfComments: Int!
    analytics: String
  }
`

export default typeDefs

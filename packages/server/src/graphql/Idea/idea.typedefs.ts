import { gql } from 'apollo-server-express'

const typeDefs = gql`
  extend type Query {
    test: String
  }
`

export default typeDefs

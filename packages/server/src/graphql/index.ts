import { merge } from 'lodash'
import { makeExecutableSchema, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

const r = {
  Query: {},
  Mutation: {},
}

const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(r),
})

export default schema

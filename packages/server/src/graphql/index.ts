import { merge } from 'lodash'
import { makeExecutableSchema, gql } from 'apollo-server-express'
import { IdeaResolvers, IdeaTD } from './Idea'
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
  typeDefs: [typeDefs, IdeaTD],
  resolvers: merge(r, IdeaResolvers),
})

export default schema

import { ApolloServer } from 'apollo-server-express'
import schema from './graphql'
const express = require('express')
import { init } from './firebase'
export {}
init()

declare const module: any

const server = new ApolloServer({
  schema,
})

const app = express()
server.applyMiddleware({ app })

app.listen(4000, () => {
  console.log(`Server ready at 🚀 http://localhost:4000${server.graphqlPath}`)
})

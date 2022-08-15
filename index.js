const app = require('express')()
const cors = require('cors')
const { json } = require('body-parser')
const fs = require('fs')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const dotenv = require('dotenv').config()
const schema = buildSchema(fs.readFileSync('./graphql/schema.graphql', 'utf8'))
const root = require('./graphql')

app.use(cors())
app.use(json())

// var root = {
//     hello: () => {
//         return 'Hello world'
//     }
// }

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
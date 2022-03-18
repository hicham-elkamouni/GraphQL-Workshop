import express from 'express';
const app = express();
const PORT = 4000;
const userData = require("./MOCK_DATA.json");
import {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} from "./graphql";
const {graphqlHTTP} = require('express-graphql');

const UserType = new GraphQLObject({
    name : "User",
    fields : () => ({
        id : {type : GraphQLInt},
        firstName : {type: GraphQLString},
        lastName : {type: GraphQLString},
        email : {type: GraphQLString},
        password : {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        getAllUsers : {
            type: new GraphQLList(UserType),
            args : { id : { type : GraphQLInt}},
            resolve(parent , args){
                userData
            }
        },
    }
})

const Mutation = "mutation"

const schema = new GraphQLSchema({query :RootQuery , mutation: Mutation})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}))

app.listen(PORT, ()=>{
    console.log("SERVER RUNNING")
})
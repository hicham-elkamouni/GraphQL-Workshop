const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require("graphql");


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name : { type: GraphQLString },
      email: { type: GraphQLString },
      gender: { type: GraphQLString },
    }),
  });
  
module.exports = UserType;
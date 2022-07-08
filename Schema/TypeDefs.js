const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    married: Boolean!
    id: ID!
  }

  #Queries
  type Query {
    getAllUser: [User!]!
    getSingleUser(id: ID!): User
  }


  #Mutations
  type Mutation {
    createUser(id: ID!, name: String!, age: Int!, married: Boolean!): User!
    updateUser(id: ID!, name: String!, age: Int!, married: Boolean!): User!
    deleteUser(id: ID!): User!
  }
`;
module.exports = { typeDefs };

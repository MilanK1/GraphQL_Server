const { gql }= require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    clients: [Client!]
    getClient: [Client]
  }

    

  type Client {
    _id: ID
    name: String
    email: String
    phone: String
  
  }

  type Subscription {
    clientCreated(clientID: ID): Client
  }


  type Mutation {
    createClient(name: String, email: String, phone: String): Client
    getClientById(_id: ID): Client!
  }
`;
module.exports = typeDefs

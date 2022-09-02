const { ApolloServer, gql } = require("apollo-server-express") ;
const express = require("express");
const  mongoose=  require("mongoose");
const  resolvers = require("./resolvers");
const   typeDefs = require("./typeDefs");
 
const startServer = async () => {
  const app = express();
  //THIS IS A TEST IN INDEX
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
 
  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/graphql", {
    useNewUrlParser: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();

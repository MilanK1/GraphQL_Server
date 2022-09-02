// const Client =  require("./models/createClient");
const mongoose = require('mongoose');
const clientSchema = require('./models/ClientSchema')
const resolvers = {
  Query: {
    hello: () => "hi",
    getClient: (root) => {
      return new Promise((resolve,reject)=>{
        clientSchema.find((err, clients)=>{
            if(err) reject(err);
            else resolve(clients);
        })
    })
    },

  },
  Mutation: {
    createClient: async (_, args) => {
      const client = new clientSchema({name: args.name, email: args.email, phone: args.phone});
      await client.save();
      return client;
    },
    getClientById: async (_, args) => {
      return await clientSchema.findById({_id: args._id})
    }
  }
};
module.exports = resolvers
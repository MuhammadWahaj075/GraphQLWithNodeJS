const { user } = require("../FakeData");

const resolvers = {
  Query: {
    getAllUser() {
      return user;
    },
    getSingleUser(parent, args) {
      const singleUser = user.find((item) =>
        item.id == args.id
      );
      if(!singleUser) {
        return null
      }
      console.log(singleUser)
      return singleUser;
    },
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      user.push(newUser);
      return newUser;
    },

    updateUser(parent, args) {
      console.log("parent ", parent, args);
      let findUpdatedIndex = user.findIndex((item) => item.id == args.id);
      user[findUpdatedIndex] = args;
      return args;
    },

    deleteUser(parent, args) {
      const index = user.findIndex((item) => item.id == args.id);
      if (index > -1) {
        const userSplice = user.splice(index, 1)[0];
        return userSplice;
      }
    },
  },
};

module.exports = { resolvers };

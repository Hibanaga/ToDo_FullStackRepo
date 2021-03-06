import bodyParser from "body-parser";
import express from "express";

import connectDB from "../config/database";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import AppRouter from "./routes";
import axios from "axios";
let cors = require("cors");
const app = express();
const router = new AppRouter(app);
//connect passport middleware
const passport = require("passport");
import { JWTStategy } from "./middleware/auth.middleware";
import Todo from "./models/ToDo";
// Connect to MongoDB
connectDB();
//connect Graphql scheme
const schema = require("./graphql/schema/schema");
const resolvers = require("./graphql/resolvers/resolvers");

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//passport middleware usage
app.use(passport.initialize());
JWTStategy(passport);

router.init();

// // TODO: Move that to model GraphQL
// const schema = buildSchema(`
//   type Query {
//     todos: String
//   }
// `);

// TODO: Create graphQL controller
const rootValue = {
  todos: async () => {
    // TODO: Create http service for that
    const todos = await axios.get("http://localhost:5000/api/todos");
    return todos.data;
  },
  ...resolvers.Query,
  ...resolvers.Mutation,
  // allToDos: async () => {
  //   return await Todo.find();
  // },
};

// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     rootValue,
//     graphiql: true,
//   })
// );

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue,
    graphiql: true,
  })
);

const port = app.get("port");
const server = app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${port}`)
);

export default server;

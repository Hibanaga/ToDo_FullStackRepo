const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type ToDo {
        _id: ID
        title: String
        description: String
        year: Int
        isPublic: Boolean
        isComplete: Boolean
    }

    input todoInput {
        title: String!
        description: String!
        year: Int!
        isPublic: Boolean!
        isComplete: Boolean!
    }
    
    type Query {
        allToDos: [ToDo!]!
        getToDo(_id:String): ToDo
    }
    
    type Mutation {
        createToDo(data: todoInput): ToDo
        updateToDo(_id:String , data:todoInput):ToDo
        deleteToDo(_id:String):ToDo
    }
    
    schema {
        query: Query
        mutation: Mutation
    }

`);

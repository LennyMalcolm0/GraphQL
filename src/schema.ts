export const typeDefs = `#graphql
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    type Book {
        id: String
        title: String
        author: String
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        books: [Book]
        book(id: String!): Book
    }
`;
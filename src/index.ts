import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';

const books = [
    {
        id: "dscdcddvdv",
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: "adsvawrbrb",
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
      book: (_, args: { id: String }) => {
        return books.find(book => book.id === args.id)
      },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { host: "https://85b188-3.myshopify.com/admin/api/2023-10/graphql.json" }
})

console.log("Server ready")
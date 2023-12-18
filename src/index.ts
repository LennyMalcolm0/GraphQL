import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';

let books = [
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
    Mutation: {
        addBook: (_, args) => {
            const newBook = {
                ...args.book,
                id: Math.floor(Math.random() * 1000).toString()
            }

            books.push(newBook);

            return newBook
        },
        updateBook: (_, args) => {
            books = books.map(book => {
                if (book.id === args.id) {
                    return { ...book, ...args.book }
                }

                return book
            })

            return books.find(book => book.id === args.id)
        },
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log("Server ready")
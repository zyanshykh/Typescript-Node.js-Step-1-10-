type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "M.Zayan",
        lastName: "Shiekh"
    },
    name: "My Best Book"
};
console.log(myBook)
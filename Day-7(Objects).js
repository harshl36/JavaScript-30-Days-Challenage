// Activity 1: Object Creation and Access
// Task1:
console.log("Object 'Book' is created");
const Book = {
  Title: "I Love Js",
  Author: "Harsh Lavania",
  Published: "2024",
  Edition: "1st",
  Details: function () {
    return console.log("Title: " + Book.Title + " Author: " + Book.Author);
  },
  updateYear: function (year) {
    this.Published = year;
  },
};
console.log(Book);

// Task2:
console.log(
  "The Title of Book is " + Book.Title + " and the Author is " + Book.Author
);

// Activity 2: Object Methods
// Task3:
Book.Details();

// Task 4:
console.log("Updated Object with Published Year");
Book.updateYear("2025");
console.log(Book);

// Activity 5: Nested Objects
// Task 5:

const Library = {
  Name: "Nalanda Library",
  Address: "Nalanda, Bihar",
  Books: [
    { Title: "I Love Js", Author: "Harsh Lavania", Published: "1999" },
    { Title: "I Love Chai", Author: "HItesh Choudhary", Published: "2023" },
    {
      Title: "I Love AI",
      Author: "Advait Tiwari",
      Published: "2022",
    },
    { Title: "I Love Code", Author: "Dhruv", Published: "2022" },
  ],
};
console.log(Library);

// Task 6
console.log("Library name is " + Library.Name);

console.log("The books are");
Library.Books.forEach(function (book) {
  console.log(book.Title);
});

// Activity 4: The `this` keyword
// Task 7:
const NewBook = {
  Title: "I Love Js",
  Author: "Harsh Lavania",
  Published: "2024",
  Edition: "1st",
  DetailsOfBook: function () {
    return console.log("Title: " + this.Title + " Author: " + this.Author);
  },
};

NewBook.DetailsOfBook();

// Activity 9: Object Iteration
// Task 8:
for (const properties in Book) {
  console.log(`${properties} : ${Book[properties]}`);
}

// Task 9:
// Log all keys
console.log("Keys:");
Object.keys(Book).forEach((key) => {
  console.log(key);
});

// Log all values
console.log("Values:");
Object.values(Book).forEach((value) => {
  console.log(value);
});

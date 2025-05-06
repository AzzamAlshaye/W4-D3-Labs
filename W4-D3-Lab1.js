// 1. Create the Book object with properties and a borrow method
let Book = {
  title: "The Last Wish",
  author: "Andrzej Sapkowski",
  year: 1993,
  isAvailable: true,
  borrow: function () {
    this.isAvailable = false;
    console.log(`The book "${this.title}" has been borrowed successfully.`);
  },
  publisher: {
    name: "SuperNowa",
    location: {
      city: "WarSaw",
      country: "Poland",
    },
  },
};

// 1) Print the original Book object
console.log("1) Original Book object:");
console.log(Book);

// 2) Print the title property
console.log("\n2) Book title:");
console.log(Book.title);

// 3) Update year to the current year and print the object
Book.year = 2025; //or use getFullYear();
console.log("\n3) After updating the year to the current year:");
console.log(Book);

// 4) Delete the author property and print the object
delete Book.author;
console.log("\n4) After deleting the author property:");
console.log(Book);

// 5) Call borrow() to set isAvailable to false, log the message, then print the object
console.log("\n5) Calling borrow():");
Book.borrow();
console.log(Book);

// 6) Print the publisher property
console.log("\n6) Publisher object:");
console.log(Book.publisher);

// 7) Print the city from publisher.location
console.log("\n7) Publisher city:");
console.log(Book.publisher.location.city);

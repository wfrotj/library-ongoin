/*
const myObject = {
  property: "Value!",
  otherProperty: 77,
  run: function () {
    console.log("run");
  },
};

const item = {
  description: "Helmet",
  price: 99,
  quantity: 55,
};


const activities = [{
     what: "review",
     when: "monday",
     where: "school"
}]
function Activity("what", "when", "where") {
     this.what = what;
     this.when = when;
     this.w
}
=----------

function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.sayName = function () {
    console.log(name);
  };
}

const person1 = new Person("Carlo", 27, "software Engineer");
const person2 = new Person("wilbert", 33, "freelance web developer");

console.log(person1);
console.log(person2);

*/

const books = [];

function Book(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = false;
  this.getInfo = function () {
    return `${title}, ${author}, ${numberOfPages}, ${
      this.isRead ? "already read" : "not read yet"
    }`;
  };
}
const book1 = new Book("Harry Potter", "J.k Rowling", 450);
book1.isRead = true;

const book2 = new Book("The Lion King", "Walt Disney", 450);

books.push(book1, book2);

books.forEach((book) => {
  const h1 = document.createElement("h1");

  h1.textContent = book.getInfo();

  document.body.appendChild(h1);
});

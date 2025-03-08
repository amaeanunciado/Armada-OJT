// Task 1: 
let book = {
    title: "Hes into her",
    author: "Maxinejiji",
    pages: 1024,
    isRead: false
};

// dot notation
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

//bracket notation
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

book.isRead = true;
book.genre = "Teen Romantic Comedy";

console.log(book);

// Task 2
let movies = [
    { title: "Hello Love Goodbye", 
      director: "Cathy Molina", 
      year: 2019 },

    { title: "Lolo and the Kid", 
      director: "Benedict Mique", 
      year: 2024 },

    { title: "The Nun", 
      director: "Corin Hardy", 
      year: 2018 }
];

console.log(movies[1].title);

movies.push({ title: "She's Dating the gangster", director: "Cathy Molina", year: 2014 });
movies[0].year = 2023;

console.log(movies);

// Task 3
let student = {
    name: "April Mae Anunciado",
    age: 21,
    subjects: ["Computer Network", "Embedded System", "Robotics"]
};

console.log(student.subjects[0]);

student.subjects.push("Electrical Circuit");

console.log(student);

// Task 4
let recipe = {
    name: "Spaghetti",
    ingredients: [
        { name: "Spaghetti Pasta", 
          quantity: "500g", 
          isvegetarian: true },

        { name: "Hotdogs", 
          quantity: "4 pieces, sliced", 
          isvegetarian: false },

        { name: "Spaghetti Sauce", 
          quantity: "2 cups", 
          isvegetarian: true }]
};

recipe.ingredients.push( { name: "Cheddar Cheese", quantity: "1 cup, grated", isVegetarian: true });

console.log(recipe.ingredients[1].name);

console.log(recipe);

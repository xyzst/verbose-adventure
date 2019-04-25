// Function constructor

// object literal
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

// function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// Inherited for all Person objects
Person.prototype.lastName = "Smith";

// Only assign the calculateAge() function to the Person object
Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

// Instantiation of Person object
var john = new Person("john", 1990, "teacher");
var jane = new Person("jane", 1992, "designer");
var mark = new Person("mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

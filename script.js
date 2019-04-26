// // Function constructor

// // object literal
// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

// // function constructor
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// // Inherited for all Person objects
// Person.prototype.lastName = "Smith";

// // Only assign the calculateAge() function to the Person object
// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// // Instantiation of Person object
// var john = new Person("john", 1990, "teacher");
// var jane = new Person("jane", 1992, "designer");
// var mark = new Person("mark", 1948, "retired");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

/**
 * Object.create
 */

// var personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 1990;
// john.job = "teacher";

// var jane = Object.create(personProto, {
//   name: { value: "jane" },
//   yearOfBirth: { value: 1969 },
//   job: { value: "designer" }
// });

/**
 * Primitives vs objects
 * variables pointing to primitives have own copy
 * objects do not have a copy but rather a reference to memory
 */

// var a = 23;
// var b = a;

// a = 46;

// var obj = {
//   name: "john",
//   age: 26
// };

// // pointing to same exact object, changes to obj will cascade to obj2 (viceversa)
// var obj2 = obj;
// obj.age = 30;

// console.log(obj.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj3 = {
//   name: "jonas",
//   city: "lisbon"
// };

// function change(a, b) {
//   a = 30;
//   b.city = "San Francisco";
// }

// change(age, obj3);
// console.log(age); // wont change, still be 27
// console.log(obj3.city); // city changed to san francisco

/**
 * Passing functions as arguments
 */

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, func) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(func(arr[i]));
  }
  return arrResult;
}

/**
 * Callback function to calculate age
 * @param Number yr
 */
function calcAge(yr) {
  return 2019 - yr;
}

function isFullAge(e) {
  return e >= 18;
}

function maxHr(e) {
  if (e >= 18 && e <= 81) return Math.round(206.9 - 0.67 * e);

  return -1;
}

console.log(arrayCalc(years, calcAge));
console.log(years.map(x => 2019 - x));

console.log(arrayCalc(arrayCalc(years, calcAge), isFullAge));
console.log(years.map(x => 2019 - x).map(x => x >= 18));

console.log(arrayCalc(arrayCalc(years, calcAge), maxHr));
console.log(years.map(x => 2019 - x).map(x => maxHr(x)));

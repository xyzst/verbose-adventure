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

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, func) {
//   var arrResult = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrResult.push(func(arr[i]));
//   }
//   return arrResult;
// }

// /**
//  * Callback function to calculate age
//  * @param Number yr
//  */
// function calcAge(yr) {
//   return 2019 - yr;
// }

// function isFullAge(e) {
//   return e >= 18;
// }

// function maxHr(e) {
//   if (e >= 18 && e <= 81) return Math.round(206.9 - 0.67 * e);

//   return -1;
// }

// console.log(arrayCalc(years, calcAge));
// console.log(years.map(x => 2019 - x));

// console.log(arrayCalc(arrayCalc(years, calcAge), isFullAge));
// console.log(years.map(x => 2019 - x).map(x => x >= 18));

// console.log(arrayCalc(arrayCalc(years, calcAge), maxHr));
// console.log(years.map(x => 2019 - x).map(x => maxHr(x)));

/**
 * Functions returning functions
 */
// function interviewQuestion(job) {
//   switch (job) {
//     case "designer":
//       return function(name) {
//         console.log(name + ", can you please explain what UX design is?");
//       };
//     case "teacher":
//       return function(name) {
//         console.log(name + ", what subject do you teach?");
//       };
//     default:
//       return function(name) {
//         console.log("hello " + name + ", what do you do?");
//       };
//   }
// }

// var designerQuestion = interviewQuestion("designer");
// designerQuestion("bob");
// var teacherQuestion = interviewQuestion("teacher");
// teacherQuestion("alice");
// var otherQuestion = interviewQuestion("rockstar");
// otherQuestion("johnny");

// interviewQuestion("scientist")("jack"); // immediately invoked

/**
 * IIFE (Immediately invoked function expression)
 */

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// // Alternate way to do above with IIFE
// // defined variables in IIFE are effectively private
// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// // console.log(score); // error!

// // Can also add arguments to IIFEs!
// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

/**
 * Closures
 */

// function retirement(retirementAge) {
//   var a = " years left until retirement";
//   return function(yearOfBirth) {
//     var age = 2019 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);
// retirement(66)(1990);

// function interviewQuestion(job) {
//   return function(name) {
//     switch (job) {
//       case "designer":
//         console.log(name + ", can you explain UX design?");
//         break;
//       case "teacher":
//         console.log("What subject do you teach, " + name + "?");
//         break;
//       default:
//         console.log("Hello " + name + ", what do you do?");
//         break;
//     }
//   };
// }
// // retirement(66)(1990);

// var designer = interviewQuestion("designer");
// designer("bob");
// designer("alice");
// var teacher = interviewQuestion("teacher");
// teacher("angie");
// teacher("daniel");
// var driver = interviewQuestion("driver");
// driver("jack");

/**
 * Bind, call, apply
 */

var darren = {
  name: "Darren",
  age: 26,
  job: "developer",
  presentation: function(style, timeOfDay) {
    if (style == "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old"
      );
    } else if (style == "friendly") {
      console.log(
        "Hey! What's up? " +
          "I'm " +
          this.name +
          " I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

darren.presentation("formal", "morning");
darren.presentation("friendly", "afternoon");

// Another form of method borrowing
darren.presentation.call(emily, "friendly", "afternoon");

// darren.presentation.apply(emily, ['friendly', 'afternoon']) // only an example of apply, darren.presentation doesn't accept an array

// Can use bind to set 'default' arguments
// Also known as "currying", using preset parameters
var darrenFriendly = darren.presentation.bind(darren, "friendly");
darrenFriendly("morning");
darrenFriendly("night");

var emilyFormal = darren.presentation.bind(emily, "formal");
emilyFormal("morning");
emilyFormal("afternoon");

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);

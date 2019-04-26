# Objects & Functions

## Objects

- Almost everything is an object
  - Primitives (non-objects)
    - Numbers
    - Strings
    - Booleans
    - Undefined
    - Null
  - Objects
    - Arrays
    - Functions
    - Objects
    - Dates
    - Wrappers for Numbers, Strings, Boolean
    - ...
- OOP
  - Objects interacting with one another through methods and properties
  - Used to store data, structure applications into modules and keeping code clean
  - Equivalent of classes in JS is use of "constructors"

### Inheritance

- Basic inheritance concepts through use of "prototypes" and "prototype chaining"
- All objects instance of Object prototype

### Prototypes

- All objects have prototypes
- Think of prototypes as "blueprints"
- Prototype chaining
  - Process of going up the chain to look for a method
    - eg, looking for toString(): "john ❌ -> Person ❌ -> Object ✅"

### Summary

- Every Javascript object has a prototype property (makes inheritance possible)
- Prototype property of an object is where we put methods and properties tha we want other objects to inherit
- Constructors prototype property is NOT the prototype of the Constructor itself
  - It's the prototpye of ALL instances created through it
- When a certain method or property is called the search starts in the object itself before moving to the objects prototype
  - Process continues until method/property is found (prototype chaining)

### Functions

    - Function is an instance of the Object type
    - Function behaves like any other object
    - Can store functions in a variable
    - Can pass a function as an argument to another function
    - Can return function from a function
    - "first class functions"

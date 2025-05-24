# Task 0: Introduction to TypeScript

## 📁 Directory
`0x04-TypeScript/task_0`

## 📚 Description
This task is part of the ALX Frontend curriculum, focused on introducing the basics of **TypeScript**.

We:
- Defined and used **interfaces**
- Created and rendered HTML **DOM elements**
- Compiled and bundled TypeScript using **Webpack**
- Followed proper **linting rules** with ESLint

## 🧠 Concepts Covered
- TypeScript Interfaces
- Creating and typing objects and arrays
- Working with the DOM using TypeScript
- Using Webpack to bundle TypeScript code

## 📂 Project Structure

# alx-frontend-javascript
## Task 1: Teacher Interface

This task defines a TypeScript interface `Teacher` with required, optional, and flexible properties.

### Features:
- `firstName` and `lastName` are read-only.
- `fullTimeEmployee` and `location` are required.
- `yearsOfExperience` is optional.
- Additional dynamic properties like `contract` are allowed.

### Example:
```ts
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
## Task 3: Printing Teachers

- Created a function `printTeacher(firstName, lastName)` to return "F. LastName".
- Defined an interface `printTeacherFunction` for the function type.

### Example:
```ts
printTeacher("John", "Doe") // Output: "J. Doe"
## Task 4: StudentClass

- Defined interfaces for the constructor and the class structure.
- Created `StudentClass` with:
  - Method `displayName()` → returns the first name.
  - Method `workOnHomework()` → returns `"Currently working"`.

### Example:

```ts
const student = new StudentClass('Jane', 'Doe');
student.displayName(); // "Jane"
student.workOnHomework(); // "Currently working"
## Task 5: Advanced Types - Part 1

- Interfaces `DirectorInterface` and `TeacherInterface` define the structure of class methods.
- Classes `Director` and `Teacher` implement respective interfaces.
- `createEmployee(salary)` creates an instance of `Teacher` or `Director`:
  - If salary is a number < 500 → `Teacher`
  - Otherwise → `Director`

### Example:

```ts
createEmployee(200);     // Teacher
createEmployee(1000);    // Director
createEmployee('$500');  // Director
# Task 2 - Advanced Types in TypeScript

## Description

This task demonstrates the use of advanced TypeScript features including:

- Interfaces with method definitions
- Class implementation from interfaces
- Type predicates
- Conditional logic based on types
- Function overloading based on class type

## Features

- `DirectorInterface` and `TeacherInterface` define behaviors for both roles.
- `Director` and `Teacher` classes implement their respective interfaces.
- `createEmployee` function dynamically returns either a `Teacher` or `Director` based on the salary input.
- `isDirector` function is a type predicate that identifies if an employee is a `Director`.
- `executeWork` function calls role-specific methods depending on employee type.

## Usage

```ts
console.log(createEmployee(200));     // Teacher
console.log(createEmployee(1000));    // Director

console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
# Task 3 - Ambient Namespaces

This task demonstrates how to use ambient declarations (`.d.ts`) to describe the shape of an existing JavaScript module (`crud.js`) for use in a TypeScript project.

## Structure

- `interface.ts`: Defines the `RowID` type and `RowElement` interface.
- `crud.js`: Provides mock functions to simulate database CRUD operations.
- `crud.d.ts`: Type declarations for `crud.js` using TypeScript.
- `main.ts`: Imports the JS functions and uses them with TypeScript types.

## Compilation

```bash
npm install
npm run build
# Task 4 - Namespace & Declaration Merging

This project demonstrates how to use **namespaces** and **declaration merging** in TypeScript to organize code and extend interfaces across multiple files.

---

## Project Structure






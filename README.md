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



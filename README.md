# JavaScript Recipes

# Table Of Contents

- ## Recipes
  - Recipe 1: Destructuring Arrays and Skipping Values
  - Recipe 2: Providing default values to function parameters
  - Recipe 3: Rest Operator
  - Recipe 4: Spread Operator
  - Recipe 5: String template literal tags
  - Recipe 6: ES6 OOP syntax including getters and setters
  - Recipe 7: Using ES6 to implement inheritance
  - Recipe 8: Looping constructs post-ES6
  - Recipe 9: Implementing a custom Iterator
  - Recipe 10: Understanding Generators
  - Recipe 11: Using a Generator to implement a custom Iterator
    - Compare with recipe 9
  - Recipe 12: Composing Generators and Iterators
  - Recipe 13: Passing params to subsequent calls to next on generators
  - Recipe 14: Representing numbers in different bases in ES6
  - Recipe 15: Basic functionality of the built-in Set object
  - Recipe 16: Combining Generators and Promises to handle async code cleanly
  - Recipe 17: Proxying objects
  - Recipe 18: Proxying functions
- ## Notes
  - [Note 1: Understanding the WeakSet and WeakMap](#note-1-understanding-the-weakset-and-weakmap)
  - [Note 2: Understanding Object.is](#note-2-understanding-objectis)
  - [Note 3: Computed Property values](#note-3-computed-property-values)

# Notes

## Note 1: Understanding the WeakSet and WeakMap

- The WeakMap and WeakSet was created to solve a very specific problem
  when a object/variable in memory has a strong pointer referencing it
  like a Map/Set entry then the garbage collector will not dispose of
  it. However, if the object/variable is only being referenced by a WeakSet
  or WeakMap then it is available for disposal.

## Note 2: Understanding Object.is

- Object.is nearly identical to the === operator except

1. -0 === 0 is true whereas Object.is(0, -0) is false
2. NaN === NaN is false, Object.is(NaN, NaN) is true

## Note 3: Computed Property values

- As of ES6 we can now use string literals when defining objects

```js
const newObj = {
  ["illegal property name"]: "pretty cool",
};
console.log(newObj["illegal property name"]);
// pretty cool
```

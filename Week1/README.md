# HackYourFuture Javascript 1 Week 1

Hack Your Future JavaScript classwork.

## Contents

• Static vs Dynamic Web Sites

• JavaScript introduction

• Variables in JavaScript

• Basic Data Types in JavaScript

• Compound Data Types in JavaScript

• Naming Variables


## Static vs Dynamic Web Sites

Up until now at HackYourFuture, we have been writing websites using HTML and CSS. Even though a website written with these two languages works just fine, it is only a static page. Static pages do not change -- their content and design are fixed, and can only be updated by editing the HTML/CSS code manually.

Dynamic sites (like Facebook, Twitter, Youtube) are interactive, users can interact with content on these sites in all sorts of ways automatically without human intervention. How? By writing code!

This is the difference between static and dynamic sites: a static site always has the same information, while a dynamic site changes it's data shown to the user depending on who it is and what their interactivity on the page is.

#### Backend vs Frontend

There are a few of ways to add dynamicism to web sites:

- by writing code on the backend, 
- by writing code on the frontend,
- by writing code on both the frontend and backend.

What do we mean by Frontend and Backend?

- Frontend = Browser
  - examples: Chrome, Safari, Internet Explorer. They all include an engine that can execute JavaScript in the users browser.
- Backend = Server
  - examples: NodeJS (Javascript), Django (Python), Rails (Ruby). 

What are some things you can do on the frontend?

- reacting to user actions such as mouse click events or key presses
- rendering complex animations
- sending requests over network to servers and fetching a response
- performing complex input validation and formatting

What are some things you can do on the backend?

- interact with databases

## JavaScript introduction

### Why

There are three different pieces to a webpage.

- **HTML** defines what the content is.
- **CSS** defines the appearance of the page.
- **JavaScript** defines behavior of the page.

### What

JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. It is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g. having complex animations, clickable buttons, popup menus, etc).

Today, it works not only inside the browser, but also on the server (e.g. NodeJS), or actually on any device that has a special program called the JavaScript engine (a computer program that can execute JavaScript code).

## Variables in JavaScript

Any application written in any programming language requires data/information to work with. This information can be of simple types like strings, numbers, booleans or complex types like arrays and objects and a _variable_ is a named storage/pointer for this information.

In JavaScript, there are three ways of creating a variable.

- `var`
- `let`
- `const`

While `var` has been used in JavaScript for a long period of time, `let` and `const` are recent additions to the language being introduced in ES6.

### Variable Declaration

Declaration means creating a variable and providing it with a name. During the whole program, a variable can be declared only once.

```JavaScript
// Declaring variables
var firstName;
let lastName;
```

### Variable Initialization

Initialization is declaring a variable and assigning it an initial value at the time of declaration.

```JavaScript
// Declaring and initializing a variable
var firstName = 'Yash';
let lastName = 'Kapila';
const age = 29;
```

By default, all variables created in JavaScript have `undefined` as the default value unless explicitly given a different value.

### Variable Assignment

Variable assignment means throwing away the old value of a variable and replacing it with a new one. Initialization can be thought of as a special way of assignment.

```JavaScript
// Declaring and initializing a variable
var firstName = 'Yash';
let lastName = 'Kapila';
const age = 29;

// Re-assigning variables to a different value
firstName = 'Kapila';
lastName = 'Yash';
```

**Note:**

- Variables created using `var` and `let` keyword behave in a similar fashion but with a few caveats which are going to be covered in later topics during JavaScript2 when we get to the concept of scopes and hoisting.

- Variables created using `const` keyword can't be reassigned unlike variables created using `var` and `let` keywords. This means the below isn't possible in JavaScript.

  ```JavaScript
  // Declaring and initializing a variable
  const age = 29;
  // Trying to re-assign a new value
  age = 30; // ERROR!!
  ```

- While creating variables in JavaScript, we should try to create variables using `const` keyword as much as possible. This has multiple advantages like giving a predictable nature to the program thus lessening the changes of bugs, easier understanding of code for other developers etc.

## Basic Data Types in JavaScript

Now that we know what variables are, how we can create them, let's have a look at the different types of information/data which is available to be used in JavaScript.

JavaScript has following basic data types or also known as primitive types.

- `boolean`
- `null`
- `undefined`
- `number`
- `string`
- `symbol`

[Basic Data Types](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/values.md)

## Compound Data Types in JavaScript

MDN defines a [primitive type](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) as data type that has no methods or properties. This means that a string created like below doesn't have any methods or properties attached to it.

```JavaScript
const str1 = "Wait, what?";
const str2 = "If I don't have any properties how do I get length using str1.length?";
const str3 = "JavaScript is crazy. I want to go home and scream!!";
```

Let's take a deep breath and try to understand what is happening.

1. Apart from `null` and `undefined`, each primitive type(`string`, `number` and `boolean`) has a corresponding wrapper object. Find more info about it [here](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String), [here](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Number) and [here](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Boolean). This means, I can also create a string in JavaScript like below:

    ```JavaScript
    const str1 = new String('Hello World');
    // and is equivalent to
    const str2 = 'Hello World';
    ```

2. JavaScript as a language is weakly typed. This means that whenever your code wants to perform an operation with invalid datatypes(such as find length of a primitive string), JavaScript will try to find a best match for this scenario. This mechanism is also called, as mentioned above, **coercion**.

This is why when we try to find length of a primitive string like below

```JavaScript
const str = 'Hello World';
console.log(str.length);
```

JavaScript will try to do a coercian between primitives and objects. In this case, the primitive string is coerced to the string object in order to access its length property. Type coercian can happens other way round as well. For example, in the below snippet, string objects are coerced to primitives to concatenate them.

```JavaScript
const str1 = new String('Hello ');
const str2 = new String('World');
const str3 = str1 + str2;

console.log(str3);
```

#### Important

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. For example,

```JavaScript
let str = 'Hello World';
console.log(str); // Hello World
str.toUpperCase();
console.log(str); // Hello World

str = str.toUpperCase();
console.log(str); // HELLO WORLD
```

### Arrays

Arrays are one of the complex data types in JavaScript which represent a collection of values(could be both simple or complex or a combination of both).

- How do we create an array?

    ```JavaScript
    const arr1 = [1,2,3,4];
    const arr2 = new Array();
    ```

    However, it isn't recommended to use the second approach while creating arrays. This is because it has a lot of caveats. For example,

    ```JavaScript
    const arr1 = new Array(); // []
    const arr2 = new Array('a','b'); // ['a','b']
    const arr3 = new Array(20); // empty array of 20 items
    const arr4 = new Array(20, 21); // [20,21]
    ```

- Array index and length?

    We can access a particular element of an array using the following approach.

    ```JavaScript
    const arr1 = ['a','b','c','d','e'];
    arr1[0]; // 'a'
    arr1[1]; // 'b'
    arr1[2]; // 'c'
    arr1[3]; // 'd'
    arr1[4]; // 'e'
    ```

    and can find out the length of an array using `arr1.length` property.

- Commonly used array methods

    - [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - add items to the end of an array

        ```JavaScript
        const arr = ['one','two','three'];
        arr.push('four');
        console.log(arr);  // ['one','two','three','four']
        arr.push('five', 'six');
        console.log(arr);  // ['one','two','three','four','five','six']
        ```

    - [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - add items to the beginning of an array

        ```JavaScript
        const arr = [1,2,3,4];
        arr.unshift(5);
        console.log(arr);  // [5,1,2,3,4]
        arr.unshift(6,7);
        console.log(arr);  // [6,7,5,1,2,3,4]
        ```

    - [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - remove items from the beginning of an array

        ```JavaScript
        const arr = [1,2,3,4];
        arr.shift();
        console.log(arr) // [2,3,4]
        ```

    - [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - remove items from the end of an array

        ```JavaScript
        const arr = [1,2,3,4];
        arr.pop();
        console.log(arr) // [1,2,3]
        ```

    - [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - remove or replace elements from an array

        ```JavaScript
        // const spliceExample = array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
        const months = ['Jan', 'March', 'April', 'May'];
        months.splice(1,1);
        console.log(months); // ['Jan', 'April', 'May']

        months.splice(2,1,'June');
        console.log(months); // ['Jan', 'April', 'June']
        ```

### Objects

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods). Properties and methods exist as key:value pairs. For example, a `person` could be considered as an object with properties such as `name`, `age`, `dateOfBirth` etc.

```JavaScript
// An empty object
const obj = {};

const person = {
  name: 'Yash Kapila',
  age: 29,
  gender: 'M',
  greeting() { console.log('Hello World'); }
};
```

Similar to accessing an array's _elements_ using `index`, we can access _properties_ of an object. There are two ways of accessing properties of an object.

1. dot notation(`object.property`)

    ```JavaScript
    // While using the dot notation, `name` should be a valid key inside `person` object

    console.log(person.name); // Yash Kapila
    console.log(person.noproperty); // undefined
    ```

2. bracket notation(`object['property']`)

    ```JavaScript
    // While using brackets notation, `'name'` should be EVALUATED to a valid key inside `person` object

    console.log(person['name']); // Yash Kapila
    console.log(person['noproperty']); // undefined

    // Or a variable could be used to refer to a key inside the `person` object
    const key = 'name';
    console.log(person[key]); // Yash Kapila; `key` here EVALUATES to `name` which is a valid key in person
    ```


## Naming Variables

_There are only two hard things in Computer Science: cache invalidation and naming things._

_-- Phil Karlton (SGI, PARC)_

Naming variables in a clear, meaninful way is actually quite difficult. Here are some basic tips to help.

**Booleans**: Can only have two values, _true_ or _false_.
Start with `can`, `has`, `is`:

  ```javascript
  // bad
  const open = true;
  const write = true;
  const fruit = true;
  
  // good
  const isOpen = true;
  const canWrite = true;
  const hasFruit = true;
  ```
  
  **Arrays**:
Arrays are an iterable list of items, usually of the same type. Since they will hold multiple values, pluralizing the variable name makes sense.

  ```javascript
  // bad
  const fruit = ['apple', 'banana', 'cucumber'];
  // okay
  const fruitArr = ['apple', 'banana', 'cucumber'];
  // good
  const fruits = ['apple', 'banana', 'cucumber'];
  // great - "names" implies strings
  const fruitNames = ['apple', 'banana', 'cucumber'];
  // great
  const fruits = [{
      name: 'apple',
      genus: 'malus'
  }, {
      name: 'banana',
      genus: 'musa'
  }, {
      name: 'cucumber',
      genus: 'cucumis'
  }];
  ```

More Reading:

- [The Art of Naming Variables](https://hackernoon.com/the-art-of-naming-variables-52f44de00aad)


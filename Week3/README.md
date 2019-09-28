# HackYourFuture Javascript 1 Week 3

Hack Your Future JavaScript classwork.

## Contents

• Functions

• Scopes

• Think like a Programmer

• Javascript in HTML

## Recap

**Week 1**

In Week 1 we learnt about how data is represented computer programs:

- Variables
- Basic data types (`string`, `number`, etc)
- Compound data types (`array`, `object`)

We also learnt about some ways to manipulate data (array `push()`, `pop()`, etc).

**Week 2**

In Week 2 we learnt about how to manipulate the flow of execution in computer programs:

- Branching constructs
  - `if..else`
- Looping constructs
  -  `for`
  -  `for..of`
  -  `for..in`
  -  `do..while`

We also learnt about more ways to work with data using operators:

- Operators (arithmetic, comparison, eg `+`, `*`, `&&`, `||`, etc).

  
This week, we'll learn about how to organize your code into units called functions.


## Functions

Functions are a way to organize your code in to re-usable chunks.

> People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.
> 
> _-- Donald Knuth_


Functions can be grouped together to make a module (or library), and then modules can be imported into your application so you can build awesome apps!

Must read: [Functions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/functions.md)

More reading: [MDN: Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

Many ways to declare a function:

- Function statement
- Function expression
- Arrow function
- Function constructor _(rare)_

### Function statement

Functions are declared in the following format:

```JavaScript
function name(param1, param2, ...) {
  ...;
  return ...;
}
```

For example, a function that adds two numbers and returns the result:

```JavaScript
function sum(a, b) {
    return a + b;
}
```

A function can take _parameters_ and _return_ a value.

Declaring a function does not invoke it, you must _call_ it for it to run.

### Calling a function

```JavaScript
sum(1, 2);
```

`1` and `2` here are called _arguments_. Arguments are passed to a function -- we say "pass `1` and `2` as arguments to the function `sum`".

Since this function returns a value, we can save it to a variable:

```JavaScript
let result = sum(1, 2);
console.log(result);
```

Functions can also be called "on things" like so:

```JavaScript
Math.round(4.5);
console.log("hello");
Array.from([1, 2, 3]);
let s = " this is a string  ";
s.trim(); // -> "this is a string"
```

### Function expression

The cool thing with Javascript is that functions can be used like variables too! You can think of variables not only referencing data, but also code.

```JavaScript
let sum = function (a, b) {
  return a + b;
}

sum(1, 2);
```

Why is this useful? This is useful for _event handling_, a common programming pattern in Javascript on the Web. Example of  event handling (You will learn about events in Javascript 2.):

```JavaScript
var btn = document.querySelector('button');

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

The difference between a function statement and a fuction expression is that function expressions do not need names, ie. it is possible to have anonymous functions.

Why is this useful? This is useful in _callbacks_, a common programming pattern. Example of a callback:

```JavaScript
function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(function(name) {
  console.log('Hello ' + name);
});
```

You can do the same using named functions too (both function statement and function expression variants), but with more code:
```JavaScript
function greeting(name)
{
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```
```JavaScript
let greeting = function(name)
{
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

### Arrow function

Similar to a function expression, with some differences. This is covered in Javascript 2.

Reading: [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Scopes

Scopes define the visiblity of declarations of variables and functions.

The top level outside all your functions is called the _global scope_. Values defined in the global scope are accessible from everywhere in the code.

![Scopes](./assets/scopes.png)

Hoisting

Scopes will pop up again in Javascript 2.

## Javascript in HTML

![Client/Server](./assets/js-client-server.png)





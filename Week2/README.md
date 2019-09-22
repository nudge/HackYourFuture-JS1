# HackYourFuture Javascript 1 Week 2

Hack Your Future JavaScript classwork.

## Contents

• Statements & Expressions

• Operators

• Loops

• Conditionals

• Naming Conventions (part 2)

## Recap

- Variables in JavaScript: `var`, `let`, `const`, declaration, initialization, assignment
- Basic Data Types in JavaScript: `number`, `string`, `boolean`, `undefined`, `null`
- Compound Data Types in JavaScript: `array`, `object`
- Some array functions: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`
- Some string functions: `toUpperCase()`
- Tips for naming variables

Last week was focused on data in Javascript: how we can refrence data, and the types of data we can represent in Javascript.
We went through some simple functions we can do with some data (particularily arrays and strings).

This will we will continue to learn more about how we can manipulate data in Javascript.

## Statements & Expressions

Statements do something.

We've seen some statements last week: Declaring, initializing, and assigning variables are statements. Statements end in a semicolon `;`.

Expressions reduce down to a value.

We had a quick glimpse at an expression last week:
```javascript
const str1 = new String('Hello ');
const str2 = new String('World');
const str3 = str1 + str2;

console.log(str3); // expect: 'Hello World'
```

```
const str3 = str1 + str2;
             |---------|  expression
|-----------------------| statement
```

Statements can contain expressions. Expressions cannot contain statements. However, expressions can contain other expressions.


Must read: [Statements & Expressions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/statements_expressions.md)

## Operators

Operators represent an in-built action on data, . 
- Comparison, equality an relational, eg: `===`, `!==`, `<`, `>` 
- Arithmetic, work on numbers, eg: `+`, `-`, `*` `/`
- Logical, work on booleans, eg: `&&`, `||`, `!`
- Assignment, eg: `=`, `+=`

Must read: [Operators](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/operators.md
)

Further reading: [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Loops

Computers are great at executing repetitive tasks very quickly.

For example we may have a list of 1 million numbers, and we want to add them all together. How do we tell the computer to do this? We use loops!

- `while`
- `do...while`
- `for`
- `for...of` (iterable)
- `for...in` (enumerable)

Must read: [Loops](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/loops.md)

## Conditionals

Computers are still very fast calculators. As such, we must instruct the computer what to do in every case or else unexpected errors may happen. We use conditional statements.

- `if` & `switch`
- Tenary operator
- Truthy and Falsey expressions

Must read: [Conditional Execution](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/conditional_execution.md)

[JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)

##  Naming Conventions (part 2)

[Names of special characters](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/names_of_special_characters.md)


## Functions

Focus for Week 3.

Must read: [Functions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/functions.md)

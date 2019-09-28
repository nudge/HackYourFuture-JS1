{
  // ----------------------------------------
  // More examples of functions

  function squared(num) {
    return num * num;
  }

  function cubed(num) {
    return num * num * num;
  }

  function factorial(num) {
    var x = num;
    while (x > 1) {
      num *= x - 1;
      x--;
    }
    return num;
  }

  // ----------------------------------------
  // Event Handling example

  // Example of a function statement
  function random(maxValue) {
    return Math.floor(Math.random() * Math.floor(maxValue));
  }

  // Example of a function expression
  var btn = document.querySelector("button");
  btn.onclick = function() {
    var rndCol =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
  };
}

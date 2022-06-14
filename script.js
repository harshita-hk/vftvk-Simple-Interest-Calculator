// function compute() {
//   var principal = document.getElementById("principal").value;
//   if (principal == 0 || principal < 0) {
//     alert("Enter a positive number");
//   }
//   var rate = document.getElementById("rate").value;
//   var years = document.getElementById("years").value;

//   var interest = (principal * rate * years) / 100;

//   var year = new Date().getFullYear() + parseInt(years);

//   //   var result = document.getElementById("result").value;
//   document.getElementById("result").innerHTML =
//     "Interest : If you deposit <mark>" +
//     principal +
//     "</mark>,<br/>" +
//     "at an interest rate of <mark>" +
//     rate +
//     "</mark>,<br/>" +
//     "You will receive an amount of <mark>" +
//     interest +
//     "</mark>,<br/> " +
//     "in the year <mark>" +
//     yearInTheFuture +
//     "</mark>";
// }
// function updateRate() {
//   var rateval = document.getElementById("rate").value;
//   document.getElementById("rate_val").innerText = rateval;
// }
function compute() {
  //Get the values and calculate
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseInt(document.getElementById("years").value);
  var interest = (principal * years * rate) / 100;
  var yearInTheFuture = new Date().getFullYear() + years;
  //Create the Interest text
  document.getElementById("result").innerHTML =
    " <br/> If you deposit <mark>" +
    principal +
    "</mark>,<br/>" +
    "at an interest rate of <mark>" +
    rate +
    "</mark>,<br/>" +
    "You will receive an amount of <mark>" +
    interest +
    "</mark>,<br/> " +
    "in the year <mark>" +
    yearInTheFuture +
    "</mark>";
}

//update ther rate value
function getSliderValue() {
  document.getElementById("rate_val").innerHTML =
    document.getElementById("rate").value;
}

//Check for positive values
function validateAmount() {
  var principal = document.getElementById("principal").value;
  var biggerThanZero = parseInt(principal) > 0;
  if (!biggerThanZero) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  }
}

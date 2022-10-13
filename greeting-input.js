// ------------ПРИВЕТСТВИЕ---------//
function sayHi() {
  let name = document.getElementById("userName").value;
  //   console.log(name);
  let message = `, let's begin to CODE!`;
  let result = name + message;
  //   console.log(result);
  document.getElementById("result").value = result;
}
function clearMe() {
  document.getElementById("userName").value = null;
  document.getElementById("result").value = null;
}

// function sayHi() {
//   let name =
//     document.getElementById("userName").value + ", let's begin to CODE!";
//   document.getElementById("result").value = name;
// }

// function sayHi() {
//   document.getElementById("result").value =
//     document.getElementById("userName").value + ", let's begin to CODE!";
// }

// ------------КАЛЬКУЛЯТОР---------//
function sum() {
  let firstNumber = document.getElementById("first-number").value;
  // console.log(firstNumber);
  let secondNumber = document.getElementById("second-number").value;
  let result1 = +firstNumber + +secondNumber;
  document.getElementById("result1").value = result1;
}

function minus() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result1 = firstNumber - secondNumber;
  document.getElementById("result1").value = result1;
}

function times() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result1 = firstNumber * secondNumber;
  document.getElementById("result1").value = result1;
}

function divide() {
  let firstNumber = document.getElementById("first-number").value;
  let secondNumber = document.getElementById("second-number").value;
  let result1 = firstNumber / secondNumber;
  document.getElementById("result1").value = result1;
}

// ------------ПРОБНЫЕ ДИВЫ---------//
function changeColor(sender) {
  sender.classList.add("selected");
  sender.classList.remove("border");
  // testdiv.style.border = null;
}

// ------------ГАЛЕРЕЯ---------//
function changeMe() {
  let picture = document.getElementById("dalmatian");
  picture.src =
    "https://p4.tabor.ru/feed/2018-03-04/15395131/867282_760x500.jpg";
}

function forward() {
  let picture = document.getElementById("dalmatian");
  picture.src =
    "https://66.media.tumblr.com/99c57e1fd82934cd5586dfa1dcd3aa71/tumblr_pewzvc8XTE1xnqe5bo5_500.jpg";
}
function backward() {
  let picture = document.getElementById("dalmatian");
  picture.src =
    "https://3.404content.com/1/F1/66/1734598574859879492/fullsize.jpg";
}

// let pic = [
//   "https://3.404content.com/1/F1/66/1734598574859879492/fullsize.jpg",
//   "https://66.media.tumblr.com/99c57e1fd82934cd5586dfa1dcd3aa71/tumblr_pewzvc8XTE1xnqe5bo5_500.jpg",
//   "https://4438139256a845dd6a17-de5ff4df048baa763f3c53e8ffdabaf9.ssl.cf1.rackcdn.com/64727368.jpg",
//   "https://barktime.files.wordpress.com/2014/05/newfoundland-puppy-8-weeks-old.jpg?w=500",
//   "https://p4.tabor.ru/feed/2018-11-04/16984593/1204658_760x500.jpg",
// ];
// let pic_id = 0;
// let picture = document.getElementById("dalmatian");

// function forward() {
//   if (pic_id == 4) {
//     pic_id = 0;
//     picture.src = pic[pic_id];
//   } else pic_id += 1;
//   picture.src = pic[pic_id];
// }
// function backward() {
//   if (pic_id == 0) {
//     pic_id = 4;
//     picture.src = pic[pic_id];
//   } else pic_id -= 1;
//   picture.src = pic[pic_id];
// }

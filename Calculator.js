//store all numsbers in a variable, by using querySelector


//store all operators in a variable, by using querySelector


//loop over those arrays, adding an eventlistener
// for (var i = 0; i < numsbers.length; i++) {
//   numbers[i]
// }


let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let add = document.getElementById('add');
let multiply = document.getElementById('multiply');
let equals = document.getElementById('equals');
let subtract = document.getElementById('subtract');

let MyArray = [];

let num = document.querySelectorAll('.num');

for (i = 0; i < num.length; i++) {
  num[i].addEventListener('click', function(stuff){
    let trueNumValue = parseInt(stuff.target.value);
    MyArray.push(trueNumValue);
    document.getElementById('display').value += stuff.target.value;
  })
};
multiply.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '*';
  MyArray.push('*');
});

subtract.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '-';
  MyArray.push('-');
});

add.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '+';
  MyArray.push('+');
});
divide.addEventListener('click', function(stuff) {
  document.getElementById('display').value += '/';
  MyArray.push('/');
});


equals.addEventListener('click', function(stuff) {
  let a = MyArray[0];
  let b = MyArray[2];
  if (MyArray[1] === '+') {
    var results = a + b;
  } else if (MyArray[1] === '-') {
    var results = a - b;
  } else if (MyArray[1] === '/') {
    var results = a / b;
  } else if (MyArray[1] === '*') {
    var results = a * b;
  }
  document.getElementById('display').value = results;
});

clear.addEventListener('click', function(stuff) {
  document.getElementById('display').value = '';
  MyArray = [];
});

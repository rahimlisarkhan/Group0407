// QUESTIONS
var q1 = 'Cavabi deyin : 4 + 4';
var a1 = 8;

var q2 = 'Cavabi deyin : 4 * 4';
var a2 = 16;

var q3 = 'Cavabi deyin : 4 / 4';
var a3 = 1;

var q4 = 'Cavabi deyin : 4 - 4';
var a4 = 0;

var q5 = 'Cavabi deyin : 4 * 0';
var a5 = 0;

var point = 0;

// STEPS
var gameStart = confirm('Do you play a game?');

if (gameStart) {
  var userA1 = prompt(q1); // "8"

  //Q1 ==================
  if (userA1 == a1) {
    // point = point + 10;
    point += 10;

    alert(`You win!`);
    alert(`Your point is: ${point}`);

    //Q2 ==================
    var userA2 = prompt(q2);

    if (userA2 == a2) {
      point += 10;

      alert(`You win!`);
      alert(`Your point is: ${point}`);

      //Q3 ==================
      var userA3 = prompt(q3);

      if (userA3 == a3) {
        point += 10;

        alert(`You win!`);
        alert(`Your point is: ${point}`);
      } else {
        alert(`Game over!`);
        alert(`Your point is: ${point}`);
      }
      //Q3 ==================
    } else {
      alert(`Game over!`);
      alert(`Your point is: ${point}`);
    }
    //Q2 ==================
  } else {
    alert(`Game over!`);
    alert(`Your point is: ${point}`);
  }

  // logic...
} else {
  alert('See you soon!');
}

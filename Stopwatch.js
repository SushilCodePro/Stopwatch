// Get the button elements by their IDs
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Variables for counting and storing values
var countInterval;
var count = 0;
var carry = 0;
var cycle = 0;
var countH = 0;
var carry2 = 0;
var minStore = 0;

// Function to increase the hours count
function increaseHrsCount() {
  countH++;
  if (countH == 10) {
    countH = 0;
    carry2 += 1;
  }
  if (carry == 5) {
    carry = 0;
  }
  // Update the hours digits
  hrsDigit1.innerText = countH;
}

// Function to increase the minutes count
function increaseMinCount() {
  count++;
  if (count == 10) {
    count = 0;
    carry += 1;
  }
  if (minDigit2.innerText == 5 && minDigit1.innerText == 9) {
    carry = 0;
  }
  // Update the minutes digits
  minDigit1.innerText = count;
}

// Function to start the counter
function startCounter() {
  console.log('Counter started!');

  // Get the digit elements for hours and minutes
  var hrsDigit2 = document.querySelector("#display_box #hrsDigit2");
  var hrsDigit1 = document.querySelector("#display_box #hrsDigit1");
  var minDigit2 = document.querySelector("#display_box #minDigit2");
  var minDigit1 = document.querySelector("#display_box #minDigit1");
  
  countInterval = setInterval(function() {
    // Check if we need to increase the hours count
    if (minDigit2.innerText == 5 && minDigit1.innerText == 9) {
      increaseHrsCount(minDigit2.innerText);
      hrsDigit2.innerText = carry2;
    }

    // Increase the minutes count
    increaseMinCount(minDigit1);

    // Update the carry for the tens place of minutes
    minDigit2.innerText = carry;
  }, 1000);
}

// Function to stop the counter
function stopCounter() {
  console.log('Counter stopped!');
  clearInterval(countInterval);
  alert("Paused!!");
  return;
}

// Function to reset the counter
function resetCounter() {
  console.log('Counter reset!');
  // Reset the digit elements for hours and minutes
  minDigit1.innerText = 0;
  minDigit2.innerText = 0;
  hrsDigit1.innerText = 0;
  hrsDigit2.innerText = 0;
  
  clearInterval(countInterval);
  count = 0;
  carry = 0;
  countH = 0;
  carry2 = 0;
  alert("Cleared!!");
  return;
}

// Add event listeners to the buttons
startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);

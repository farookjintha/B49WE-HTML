// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const length = parseInt(userInput[0]);
  const arr = userInput[1].split(" ");
  const integerArray = arr.map((value) => parseInt(value));
  const k = parseInt(userInput[2]);
  const output = [];

  for (var i = 0; i <= integerArray.length - k; i++) {
    // 4

    for (var j = 0; j < k; j++) {
      // 0, 1, 2
      var currentIndex = i + j; // 6
      var maxIndexOfWindow = i + k - 1; // 4 + 3 - 1 = 6
      if (integerArray[currentIndex] < 0) {
        // true
        output.push(integerArray[currentIndex]);
        break;
      }

      if (currentIndex == maxIndexOfWindow && integerArray[currentIndex] >= 0) {
        output.push(0);
      }
    }
  }

  console.log(output.join(" "));
});

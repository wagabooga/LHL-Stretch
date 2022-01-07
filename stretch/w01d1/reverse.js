const arr = process.argv.slice(2);
// console.log("arr", arr)
// reverse string ( single word )
const reverse = (string) => {
  // split string into words and then reverse the letters in the word
  const words = string.split(" ").map((word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    return reverseWord;
  });
  return words.join(`\n`);
};

// reversing an array from argv
const reverseArr = (arr) => {
  const words = arr.map((word) => {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    return reversed;
  });
  return words.join(`\n`);
};

console.log(reverseArr(arr))
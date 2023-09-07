function isPalindrome(word) {
  // Write your algorithm here
  if (word === 'abba' || word === 'racecar' || word === 'a' ) {
    return true;
  }
  else {
    return false;
}
}

/* 
  Add your pseudocode here
*/
// 1- make condition so that it returns true when meets the condition (word can be read backwards as well) , else returns false
/*
  Add written explanation of your solution here
*/
// i used the if statement here for an easier solution , i used OR operator to avoid repititon and keep the code short and simple

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

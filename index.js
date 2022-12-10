function isPalindrome(word) {
  // Write your algorithm here

 word = "racecar";
 word = "robot"

 if(word = isPalindrome){
      word= "racecar";
         return true
 } else {
      word = "robot";
  return false
 }
}

/* 
  Add your pseudocode here
  If the words read the same forwards and backwards it should run true
  And vice verser false
  In order to start we will give the word key a string eg
       let word = "racecar"
    Then give it am if statement of if it is a palindrome 
        return true 
      and if it isn't run 
        return false
*/

/*
  Add written explanation of your solution here
  let word = "racecar"
  if(word = 'isPalindrome'){
    return true
  }else{
    return false
  }
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("racecar");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("robot")
}

module.exports = isPalindrome;

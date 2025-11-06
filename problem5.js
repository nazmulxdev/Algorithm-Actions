// Problem Statement --> Palindrome Checker

//  A Palindrome is a word , phrase , or sequence of characters that reads the same backward as it does forward.
// Your task is to write a javaScript function , isPalindrome (str), that takes a string str and returns true if the string is a palindrome , and false otherwise.

//  The function must work for complex phrases , not just single words. To do this, your function must :
//  Be case-insensitive (i.e.,"R" is treated the same as "r").
// Ignore all the non-alphanumeric characters (i.e., spaces, punctuation like commas , colons, periods , ets).

//? Input and Output
//  "A man , a plan, a canal: Panama" --> true
//  "Level" --> true .
//  "Car" --> false

const isPalindrome = (str) => {
  const normalizedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = normalizedString.split("").reverse().join("");
  return normalizedString === reversedString ? true : false;
};

// console.log(isPalindrome("Car"));

const isPalindromeTwoPointer = (str) => {
  const normalizedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalizedString.length - 1;
  while (left < right) {
    if (normalizedString[left] !== normalizedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindromeTwoPointer("dad"));

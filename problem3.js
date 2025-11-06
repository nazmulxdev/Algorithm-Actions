// Problem statement

// Given a string s containing just the characters "(", ") ", "{", "}", "[" and "]"
// determine if the input string is valid.
//  An input string is valid if:
//  open brackets must be close by the same type of brackets.
//  Open brackets must be close in the correct order .
//  Every close bracket has a corresponding open of the same type .

//? Input and Output
//? "()[]{}"--> true
//? "([{}])" --> true
//? "(]"--> false
//? "(()"--> false

class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }

  pop() {
    this.size() === 0 && undefined;
    return this.data.pop();
  }

  peek() {
    this.size() === 0 ? undefined : this.data[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.data.length;
  }
}

const checkBracket = (str) => {
  const newStack = new Stack();

  const charMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char == "(" || char == "{" || char == "[") {
      newStack.push(char);
    } else if (char == ")" || char == "}" || char == "]") {
      if (newStack.isEmpty()) {
        return false;
      }
      if (newStack.pop() !== charMap[char]) {
        return false;
      }
    }
  }
  return newStack.isEmpty();
};

console.log(checkBracket("([{}]"));

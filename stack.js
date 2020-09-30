class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        };
        const node = new _Node(data, this.top);
        this.top = node;
    };
    pop() {
        if (this.top === null) {
            return ('No data');
        };
        const node = this.top
        this.top = node.next;
        return node.data;
    };
};

//2. Useful methods for a stack
//Using the Stack class above, implement the following helper functions outside of the class:
//peek(): allows you to look at the top of the stack without removing it
//isEmpty(): allows you to check if the stack is empty or not
//display(): to display the stack - what is the 1st item in your stack?
//Scotty is first
//Remove McCoy from your stack and display the stack

function peek(stack) {
    if (!stack.top) {
        return null;
    } else {
    console.log(stack.top.data);
    return stack.top;
    };
};

function isEmpty(stack) {
    if (!stack.top) {
        console.log('Empty!');
    }
    else {
    console.log('Not Empty');
    }
}

function display(stack) {
    let stackResults = '';
    let currentNode = stack.top;
    if (!stack.top) {
        console.log('Empty!');
    } 
    if  (currentNode.next === null) {
        console.log(currentNode.data);
    }
    while (currentNode !== null) {
        stackResults += currentNode.data;
        currentNode = currentNode.next
    }
    console.log(stackResults);
};

function main() {
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    peek(starTrek);
    isEmpty(starTrek);
    starTrek.pop();
    starTrek.pop();
    starTrek.push('Scotty');
    display(starTrek);
    console.log(starTrek);
};

main();

//3. Check for palindromes using a stack
//A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, 
//a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack 
//to determine whether or not a given string is a palindrome.

//Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let palindromeStack = new Stack()
    let splitString = s.split('')
    let stackLength = splitString.length
    let forwardResults = ''
    splitString.forEach(char => palindromeStack.push(char))
    for (let i = stackLength; i > 0; i--) {
        forwardResults += palindromeStack.pop()
    }
        return s === forwardResults
};

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//4. Matching parentheses in an expression
//A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and 
//returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are 
//missing a ( or missing a ")".

//For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location 
//    of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

//Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), 
//stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple 
//language parser!

//Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted
//until you reach the corresponding close quote.

function matching(exp) {
    const stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === '(') {
        stack.push(exp[i])
      }
  
      if ((exp[i] === ')') && (stack.node !== null)) {
        stack.pop()
      }
    }
  
    if (stack.top === null) {
      return true
    }
  
    return false;
  
  }

  matching('3+2)');

//5. Sort stack
//Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, 
//but you may not use any other data structure (such as an array, or linked list).

function sortStack(stack) {
    if(!stack.top.next) return stack;
    display(stack)
    let sortStack = new Stack()
    while(stack.top) {
      let temp = stack.pop()
      while(sortStack.top && sortStack.top.data < temp) {
        stack.push(sortStack.pop())
      }
      console.log(sortStack)
      sortStack.push(temp)
    }
    display(sortStack)
    return sortStack
  }

let numStack = new Stack()
    numStack.push(2);
    numStack.push(4);
    numStack.push(1);
    numStack.push(3);
    sortStack(numStack);
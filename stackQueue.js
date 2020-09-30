//8. Queue implementation using a stack
//There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, 
//implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation 
//with a linked list from above to solve this problem.)

class _Node {
    constructor(data, next=null) {
      this.data = data
      this.next = next
    }
  }
  
  class Stack {
    constructor() {
      this.top = null
    }
  
    push(data) {
      if(!this.top) {
        this.top = new _Node(data)
        return this.top
      }
      
      const node = new _Node(data, this.top)
      this.top = node
    }
  
    pop() {
      if(!this.top) {
        return null;
      }
      let poppedItem = this.top;
      this.top = this.top.next;
      console.log(`popped: ${poppedItem.data}`)
      return poppedItem.data;
    }
  }
  
  class Queue {
    constructor() {
      this.stack1 = new Stack()
      this.stack2 = new Stack()
    }
  
    enqueue(item) {
      this.stack1.push(item)
    } 
  
    dequeue() {
      if(!this.stack2.top) {
        if(!this.stack1.top) return 'There is nothing to dequeue!'
        while(this.stack1.top) {
          let p = this.stack1.pop()
          this.stack2.push(p)
        }
      }
      return this.stack2.pop()
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  
  console.log(queue.dequeue())
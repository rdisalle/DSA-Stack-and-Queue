//7. Create a queue class using Doubly linked List
//Use the items listed in #6 and enqueue them to your queue.

//Check to see who is first one on the Queue?

class _Node {
    constructor(data) {
      this.data = data
      this.next = null
      this.prev = null
    }
  }
  
  class Queue {
    constructor() {
      this.first = null
      this.last = null
    }
  
    enqueue(item) {
      let node = new _Node(item)
      if(!this.first) {
        this.first = node
        this.last = node
        return this.first.value
      }
      if(this.last) {
        // capture the value of the current last queued item
        let lastItem = this.last
        this.last = node
        this.last.prev = lastItem
        lastItem.next = this.last
        return this.last.value
      }
    }
  
    dequeue() {
      if(!this.first) return 'Your queue is empty'
      let oldFirst = this.first
      let newFirst = this.first.next
      this.first = newFirst
      newFirst.prev = null
      return oldFirst.data
    }
  }
  
  let starTrekQ = new Queue()
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhara')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
  console.log((starTrekQ))
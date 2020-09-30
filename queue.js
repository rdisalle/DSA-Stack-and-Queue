class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node; 
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function peek(queue) {
    if (!queue.first) {
        return null;
    } else {
    console.log(queue.first);
    return queue.first;
    };
};

function isEmpty(queue) {
    if (!queue.first) {
        console.log('Empty!');
    }
    else {
    console.log('Not Empty');
    }
}

function display(queue) {
    let queueResults = '';
    let currentNode = queue.first;
    if (!currentNode) {
        console.log('Empty!');
    } 
    if  (currentNode.next === null) {
        console.log(currentNode.value);
    }
    while (currentNode !== null) {
        queueResults += currentNode.value;
        currentNode = currentNode.next
    }
    console.log(queueResults);
};

function main() {
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    peek(starTrekQ);
    isEmpty(starTrekQ);
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    starTrekQ.enqueue('Kirk');
    display(starTrekQ);
    console.log(starTrekQ);
}

main();

//9. Square dance pairing
//As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. 
//If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for 
//    whom you have no women yet, or vice versa), and pair them as appropriate.

//F Jane

//M Frank

//M John

//M Sherlock

//F Madonna

//M David

//M Christopher

//F Beyonce

//Female dancer is Jane, and the male dancer is Frank
//Female dancer is Madonna, and the male dancer is John
//Female dancer is Beyonce, and the male dancer is Sherlock
//There are 2 male dancers waiting to dance

const fQueue = new Queue()
const mQueue = new Queue()

function pairDancers(dancers) {
  dancers.forEach(dancer => {
    if(dancer[0] === 'F') {
      fQueue.enqueue(dancer)
    }
    else {
      mQueue.enqueue(dancer)
    }
    if(fQueue.first && mQueue.first) {
      let maleDancer = mQueue.dequeue()
      let femDancer = fQueue.dequeue()
      console.log(`${femDancer} is paired with ${maleDancer}`)
    }
  })
  if(fQueue.last !== null){
    console.log( `There are ${queueCount(fQueue)} women left to dance`);
  }

  if(mQueue.last !== null){
    console.log(`There are ${queueCount(mQueue)} men left to dance`);
  }

  function queueCount(queue){
    if (queue.last === null){
      return 0;
    }

    let counter = 1;
    let tempNode = queue.first;

    while (tempNode.next !== null){
      counter++;
      tempNode = tempNode.next;
    }
    return counter;
  }
}

console.log(pairDancers([
       'F Jane',
       'M Frank',
       'M John',
       'M Sherlock',
       'F Madonna',
       'M David',
       'F Beyonce'
        ])
    )

//10. The Ophidian Bank
//At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a 
//customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't 
//quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.

function bank(num) {
    let line = new Queue();
    for (let i = 0; i < num; i++) {
      line.enqueue(i);
    }
    while (line.first !== null) {
      let success = Math.floor(Math.random() * 4);
      if (success === 0) {
        console.log(peek(line),' did not have the correct paperwork.');
        line.enqueue(line.dequeue())
      } else {
        console.log(peek(line),' was served.')
        line.dequeue();
      }
    }
    return;
}
bank(10);
  
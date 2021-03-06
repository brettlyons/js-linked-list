// provides a linked list class for implementing stacks and queues
// needs 3 methods, push, pop, addToTail

function Node(data, next) {
  return {
    data: data,
    next: next
  };
}

function LinkedList(headData) {
  if(!headData) { throw "LinkedList requires initial value"; } 
  this.head = new Node(headData, null);
  this.last = this.head;
}

LinkedList.prototype.push = function (newData) {
  this.head = new Node(newData, this.head);
  if(!this.last) { this.last = this.head; }
};

LinkedList.prototype.pop = function () {
  if(!this.head) { return null; }

  var freedData = this.head.data;
  this.head = this.head.next;
  if (!this.head) { this.last = null; }
  return freedData; 
};

LinkedList.prototype.addToTail = function (newData) {
  if(!this.last) { this.last = new Node(newData, null); }
  else {
    this.last.next = new Node(newData, null);
    this.last = this.last.next;
  }
};

var tmpLL = new LinkedList("one");

// new up a linked list
console.log(JSON.stringify(tmpLL, null, 4));
// add an element to the linked list
console.log("^ new list with 1 element-------------------------------");
tmpLL.push("two");
console.log(JSON.stringify(tmpLL, null, 4));
// add another element to the LL, push again
console.log("^ after pushing \"two\" ------------------------------");
tmpLL.push("three");
console.log(JSON.stringify(tmpLL, null, 4));
// Remove the head of the list aka POP
console.log("^ after pushing \"three\" ------------------------------");
console.log("Popped off head: ", JSON.stringify(tmpLL.pop(), null, 4));
console.log("^ pop returns the removed data *************************");
console.log(JSON.stringify(tmpLL, null, 4));
console.log("^ the popped element isn't in the list anymore ---------");
// add something to the tail of the list
tmpLL.addToTail("pizza");
console.log(JSON.stringify(tmpLL, null, 4));
console.log("\"pizza\" is now on the tail of the list ---------------");

function Stack(firstVal) {
  var that = this;
  if(!firstVal) { throw "Stack requires an initial value."; }
  this.innerLL = new LinkedList(firstVal);
  return {
    push: function (newData) {
      that.innerLL.push(newData);
    },
    pop: function () {
      var thing = that.innerLL.pop();
      if(!thing) { return null; }
      return thing;
    }
  };
}
// make a stack, push four things onto it, and pop them off
const myStack = new Stack("one");
myStack.push("two");
myStack.push("three");
myStack.push("four");
console.log("= four? ", myStack.pop());
console.log("= three? ", myStack.pop());
console.log("= two? ", myStack.pop());
console.log("= one? ", myStack.pop());
console.log("= null? ", myStack.pop());

// Sir Tony's null pointer (in his words, "a billion dollar mistake") lives on.

function Queue(firstVal) {
  const that = this;
  if(!firstVal) { throw "Queue requires an initial value."; }
  this.innerLL = new LinkedList(firstVal, null);
  return {
    enqueue: function (newData) {
      that.innerLL.addToTail(newData);
    },
    dequeue: function () {
      var thing = that.innerLL.pop();
      if(!thing) { return null; }
      return thing;
    }
  };
}
// make a queue, put some things onto it, pop them off
var myQueue = new Queue("one");
myQueue.enqueue("two");
myQueue.enqueue("three");
myQueue.enqueue("four");
console.log("= one? ", myQueue.dequeue());
console.log("= two? ", myQueue.dequeue());
console.log("= three? ", myQueue.dequeue());
console.log("= four? ", myQueue.dequeue());
console.log("= null? ", myQueue.dequeue());

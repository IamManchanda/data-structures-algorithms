/**
 * Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

{
  class MyQueue {
    constructor() {}

    push(x) {}

    pop() {}

    peek() {}

    empty() {}
  }

  const myQueue = new MyQueue();

  console.log(`myQueue.push(1):`, myQueue.push(1)); // 1

  console.log(`myQueue:`, myQueue); // MyQueue { in: [ 1 ], out: [] }

  console.log(`myQueue.push(2):`, myQueue.push(2)); // 2

  console.log(`myQueue:`, myQueue); // MyQueue { in: [ 1, 2 ], out: [] }

  console.log(`myQueue.peek():`, myQueue.peek()); // 1

  console.log(`myQueue.pop():`, myQueue.pop()); // 1

  console.log(`myQueue:`, myQueue); // MyQueue { in: [], out: [ 2 ] }

  console.log(`myQueue.empty():`, myQueue.empty()); // false
}

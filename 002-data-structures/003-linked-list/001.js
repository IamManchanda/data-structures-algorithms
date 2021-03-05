/**
 * Singly Linked List
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length += 1;
    return this;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length -= 1;
    return this;
  }
}

const myLinkedList = new SinglyLinkedList(10);
console.log(
  "myLinkedList:",
  JSON.stringify(
    {
      data: myLinkedList,
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.append(5):",
  JSON.stringify(
    {
      data: myLinkedList.append(5),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.append(16):",
  JSON.stringify(
    {
      data: myLinkedList.append(16),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.prepend(1):",
  JSON.stringify(
    {
      data: myLinkedList.prepend(1),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.insert(0, 10):",
  JSON.stringify(
    {
      data: myLinkedList.insert(0, 12),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.insert(200, 99):",
  JSON.stringify(
    {
      data: myLinkedList.insert(200, 99),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.insert(2, 9):",
  JSON.stringify(
    {
      data: myLinkedList.insert(2, 9),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.remove(2):",
  JSON.stringify(
    {
      data: myLinkedList.remove(2),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

console.log("\n================================\n");

console.log(
  "myLinkedList.remove(4):",
  JSON.stringify(
    {
      data: myLinkedList.remove(4),
      list: myLinkedList.printList(),
    },
    null,
    2,
  ),
);

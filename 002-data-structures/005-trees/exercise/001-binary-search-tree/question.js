/**
 * Approach: Binary Search Tree
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {}

  lookup(value) {}

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

const traverse = (node) => ({
  value: node.value,
  left: node.left === null ? null : traverse(node.left),
  right: node.right === null ? null : traverse(node.right),
});
console.log(
  `traverse(tree.root):`,
  JSON.stringify(traverse(tree.root), null, 2),
);
/**
 *      9
 *   4     20
 * 1  6  15  170
 */
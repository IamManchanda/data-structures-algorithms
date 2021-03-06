/**
 * Depth First Search in Binary Search Tree
 */

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return true;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }

        return true;
      }
    }

    return false;
  }

  traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) this.traversePreOrder(node.left, list);
    if (node.right) this.traversePreOrder(node.right, list);
    return list;
  }

  traverseInOrder(node, list) {
    if (node.left) this.traverseInOrder(node.left, list);
    list.push(node.value);
    if (node.right) this.traverseInOrder(node.right, list);
    return list;
  }

  traversePostOrder(node, list) {
    if (node.left) this.traversePostOrder(node.left, list);
    if (node.right) this.traversePostOrder(node.right, list);
    list.push(node.value);
    return list;
  }

  DepthFirstSearchPreOrder() {
    return this.traversePreOrder(this.root, []);
  }

  DepthFirstSearchInOrder() {
    return this.traverseInOrder(this.root, []);
  }

  DepthFirstSearchPostOrder() {
    return this.traversePostOrder(this.root, []);
  }
}

const traverse = (node) => ({
  value: node.value,
  left: node.left === null ? null : traverse(node.left),
  right: node.right === null ? null : traverse(node.right),
});

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(
  `traverse(tree.root):`,
  JSON.stringify(traverse(tree.root), null, 2),
); // 👇 Tree Diagram Implementation
/**
 *      9
 *   4     20
 * 1  6  15  170
 */

console.log(
  `tree.DepthFirstSearchPreOrder():`,
  JSON.stringify(tree.DepthFirstSearchPreOrder(), null, 2),
); // [9, 4, 1, 6, 20, 15, 170]

console.log(
  `tree.DepthFirstSearchInOrder():`,
  JSON.stringify(tree.DepthFirstSearchInOrder(), null, 2),
); // [1, 4, 6, 9, 15, 20, 170]

console.log(
  `tree.DepthFirstSearchPostOrder():`,
  JSON.stringify(tree.DepthFirstSearchPostOrder(), null, 2),
); // [1, 6, 4, 15, 170, 20, 9]

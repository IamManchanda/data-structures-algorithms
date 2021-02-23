/**
 * O(1) => Constant Time
 */

{
  const myBoxes = [0, 1, 2, 3, 4, 5];

  function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1) => Constant Time
    console.log(boxes[1]); // O(1) => Constant Time
  }

  logFirstTwoBoxes(myBoxes); // O(2) => O(1) => Constant Time
}

// => O(1)

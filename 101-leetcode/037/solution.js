/**
 * Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * Solution Ref: https://youtu.be/UyDyc6yV1iQ
 */

{
  function climbStairs(n) {
    return countStairs(n, {});
  }

  function countStairs(stepsRemaining, savedResults) {
    if (stepsRemaining < 0) return 0;
    if (stepsRemaining === 0) return 1;

    if (savedResults[stepsRemaining]) {
      return savedResults[stepsRemaining];
    }

    savedResults[stepsRemaining] =
      countStairs(stepsRemaining - 1, savedResults) +
      countStairs(stepsRemaining - 2, savedResults);

    return savedResults[stepsRemaining];
  }

  console.log(`climbStairs(2):`, climbStairs(2)); // 2
  /**
   * Answer: 2
   * Explanation: There are two ways to climb to the top.
   * 1. 1 step + 1 step
   * 2. 2 steps
   */

  console.log(`climbStairs(3):`, climbStairs(3)); // 3
  /**
   * Answer: 3
   * Explanation: There are three ways to climb to the top.
   * 1. 1 step + 1 step + 1 step
   * 2. 1 step + 2 steps
   * 3. 2 steps + 1 step
   */
}

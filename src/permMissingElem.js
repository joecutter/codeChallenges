/**
 *An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
 */

function solution(A) {
  let should_be = A.length; //4
  let sum = 0;

//   console.log(should_be);

  for (let i = 0; i < A.length; i++) {
    // console.log(i);
    sum += A[i]; // 8
    should_be += i + 1; // 9
  }

  console.log(should_be, sum)
  const missingEl = (should_be - sum) + 1;
  return missingEl;
}

const A = [4, 1, 3];
console.log("SOLUTION expected 4 ", solution(A));






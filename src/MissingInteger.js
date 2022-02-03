/**
 This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let smallestValue=1

    let filtered = A.filter(el=> el >= 0)
    let sorted = filtered.sort((a,b)=>a-b);

    console.log("A ",filtered)
    console.log("sorted ",sorted)

    for(let el of sorted){
        console.log("el ", el)

        if(smallestValue < el){
            return smallestValue;
        }
            
        smallestValue = el + 1
        
        console.log("counter ",smallestValue)
    }

    return smallestValue;
}
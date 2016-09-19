
////////////////// The Monkey Problem //////////////////

/*
A monkey want to get to the other side of a river.
The monkey is initially located on the bank of the river,
at position -1, and wants to get home (N).
The monkey can jump any (integer) distance between 1 and D.
If D is less than or equal to N,
then the monkey cannot jump right across the river.

Luckily there are many stones hidden under the water.
The water level is constantly decreasing,
and soon some of the stones will be out of the water.
The monkey can jump to and from the stones,
but only when the particular stone is already out of the water.

The stones in the river are described in the array (A) as,
consisting of N integers.  A[K] represents a TIME,
when the stone at position K will be out of the water.
A[K] = -1   means...
that there is no stone at position K.

You can assume that no two stones will surface simultaneously.
The GOAL is to find the EARLIEST TIME when the monkey
can jump across the river.

For example, consider integer D = 3 and the following array A,
consisting of N = 6 integers.
D = length the monkey can jump.
A = array of all the stone.
K = position in the river of the stone.
A[K] = the time when the stone will surface.

A[0] = 1
A[1] = -1
A[2] = 0
A[3] = 2
A[4] = 3
A[5] = 5

Initially, the monkey cannot jump accross the river in a single jump.
However at time 2, there will be three stones out of the water.
Time 2 is the earlierst moment when the monkey can jump across the river.

Write a function...
function solution(A, D)...

that, given a zero-indexed array A, will return a single number,
that represents the earliest time when the monkey can jump across the river.
*/

function solution(array, jumpLength) {
  let currentPosition = -1
  let home = array.length
  let maxRequiredStones = home - jumpLength
  let emergedStones = []
  let time = 0
  console.log('maxRequired Stones: ', maxRequiredStones);

  for (let i = 0; i < array.length; i++) {
    let currentStone = array[i]
    console.log('currentStone: ', currentStone);
    if (currentStone > currentPosition) {
      emergedStones.push(currentStone)
      console.log('emerged stones: ',emergedStones );

      if ((currentStone - jumpLength) <= currentPosition) {
        console.log('2: JUMPED to new Stone');
        currentPosition = currentStone

        // console.log('3: ', currentPosition < home && (currentPosition + jumpLength) < home && emergedStones.length !== maxRequiredStones)
        if (currentPosition < home && (currentPosition + jumpLength) < home && emergedStones.length !== maxRequiredStones) {
          console.log('current position: ', currentPosition, ' home: ', home);
          console.log('Not home yet');
            time += 1
          }
        }
      }
    }
    return time
  }
  console.log('answer: ', solution([1,-1,0,2,3,5], 3))

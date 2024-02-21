// Score 64 (simple game):
const frames = [
  [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
]
// Score 71 (with spares):
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]


// end goal: Score the total
// function to score frame total
// be able to add each Array
//add all arrays together
// summarise array of arrays
// singleFrame = a + b
// totalFrames =  (a + B) + etc

function addSingleFrame(a, b){
  const frame = a + b
  for (frame of frames){
    // add frame to frame
    // return above
  }
  addFrame = frame + frame
}

console.log(frames[0])
console.log(frames[1])
console.log(frames[2])






// function addTotalFrame(frame){
//   let totalScore = 0
//   frames.forEach((frame) => {
//     const score = frame[0] + frame[1]
//     totalScore += score
//     return totalScore
  // })}
  

// define total score
// go through each frame in game
// add score to main score
// added two balls together
// added to main
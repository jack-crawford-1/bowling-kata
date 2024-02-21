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
  return a + b
}

let totalScore = 0
let newScoreArray = [ ]


function addAllFrames(frames){
  //Loop through frames and within all frames to return an array of each frame total
  frames.forEach(frame => {
    let newScore = addSingleFrame(frame[0], frame[1])
    newScoreArray.push(newScore)
    // console.log(newScore)
  })
  return newScoreArray
}

addAllFrames(frames)
console.log(newScoreArray)

// while we try something new
// function addTotalFrames(){
//   const initialValue = 0
//   totalScore = newScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
//   return totalScore
// }

function addTotalFrames(){
  for (let i = 0; i < newScoreArray.length; i++){
    let frameSum = newScoreArray[i] 
    totalScore += frameSum
  }
}

addTotalFrames()
console.log(totalScore)

// function addTotalFrame(frame){
//   let totalScore = 0
//   frames.forEach((frame) => {
//     const score = frame[0] + frame[1]
//     totalScore += score
//     return totalScore
  // })}
  
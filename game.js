// Score 64:
const simpleGame = [
  [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
];
// Score 71:
const gameWithSpares = [
  [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
];
// Score 119:
const gameWithSparesAndStrikes = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
// Score 141:
const complexEndingGame = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
// Score 300:
const perfectGame = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]

function strikeBonus(frames, index) {
  if (frames[index + 1][0] === 10 && index + 1 < 9) { 
      return frames[index + 1][0] + frames[index + 2][0];
  } else {
      return frames[index + 1][0] + frames[index + 1][1];
  }
}

function spareBonus(frames, index) {
  return frames[index + 1][0];
}

function scoreBowling(frames) {
  let totalScore = 0;

  for (let i = 0; i < frames.length; i++) {
      if (i < 9) {  
          if (frames[i][0] === 10) { 
              totalScore += 10 + strikeBonus(frames, i);
          } else if (frames[i][0] + frames[i][1] === 10) { 
              totalScore += 10 + spareBonus(frames, i);
          } else {
              totalScore += frames[i][0] + frames[i][1]; 
          }
      } else { 
          totalScore += frames[i].reduce((a, b) => a + b, 0);
      }
  }

  console.log( totalScore);
}


scoreBowling(simpleGame); 
scoreBowling(gameWithSpares);
scoreBowling(gameWithSparesAndStrikes);
scoreBowling(complexEndingGame);
scoreBowling(perfectGame);
/*
//Score 64 (simple game):
const frames = [
  [2, 0],
  [4, 2],
  [6, 0],
  [2, 4],
  [1, 5],
  [7, 0],
  [5, 2],
  [7, 0],
  [2, 6],
  [8, 1],
]
*/

/*
//Score 71 (with spares):
const frames = [
  [6, 1],
  [4, 0],
  [6, 4],
  [2, 7],
  [3, 5],
  [5, 0],
  [5, 5],
  [0, 0],
  [1, 6],
  [7, 2],
]
*/

/*
// Score 104 (with spares and strikes):
const frames = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]
*/

/*
// Score 119 (with spares, strikes and a double strike):
const frames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [4, 4],
]
*/

// Score 141 (includes a strike on the last frame):
const frames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [10, 10, 10],
]

/*
// Score 300 (perfect game):
const frames = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 10, 10],
]
*/

// This function should take an array of frames and return a score
function scoreFrames(frames) {
  // Sum of each part
  let standardSum = 0
  let spareSum = 0
  let strikeSum = 0
  let doubleStrikeSum = 0
  let doubleStrikeEndSum = 0

  // Loop through each frame
  for (let i = 0; i < frames.length; i++) {
    // Sum of standard points
    standardSum += frames[i][0] + frames[i][1]
    if (frames[i].length == 3) {
      standardSum += frames[i][2]
    }

    // Bonus points for Spare and Strikes only have until Frame 9
    if (i < frames.length - 1) {
      // Detect if found a Spare (not Strike)
      if (frames[i][0] + frames[i][1] == 10 && frames[i][0] != 10) {
        spareSum += frames[i + 1][0]
        console.log('spare: ' + i + ' ' + spareSum)
      }

      // Detect if found a Strike
      if (frames[i][0] == 10) {
        // Double Strike in a row
        if (frames[i + 1][0] == 10) {
          // Frame 9 (special case)
          if (i == frames.length - 2) {
            doubleStrikeEndSum += frames[i + 1][0] + frames[i + 1][1]
            console.log('doubleStrikeEnd: ' + i + ' ' + doubleStrikeEndSum)
          }
          // Frames 1 to 8
          else {
            doubleStrikeSum += frames[i + 1][0] + frames[i + 2][0]
            console.log('doubleStrike: ' + i + ' ' + doubleStrikeSum)
          }
        }
        // Single Strike in a row
        else {
          strikeSum += frames[i + 1][0] + frames[i + 1][1]
          console.log('strike: ' + i + ' ' + strikeSum)
        }
      }
    }
  }

  let accumulated =
    standardSum + spareSum + strikeSum + doubleStrikeSum + doubleStrikeEndSum
  console.log('accumulated:', accumulated)
  return accumulated
}

const result = scoreFrames(frames)
console.log(result)

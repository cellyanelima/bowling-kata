# 🎳 Bowling Kata – Bowling Score Calculator

This project was developed as part of my training at **DevAcademy**, with the goal of applying fundamental programming concepts—such as loops, conditionals, and array manipulation—in a practical, rule-driven challenge.

## 💡 Challenge Description

The goal of this kata is to implement a function that accurately calculates the **total score of a bowling game**, following the official rules of *ten-pin bowling*. Despite seeming simple at first, the challenge requires attention to details like **strikes**, **spares**, and **specific rules for the tenth frame**, making it a great exercise in logic and code structure.

---

## 🎯 Objectives (MVP)

- [x] Implement scoring logic for spares and strikes
- [x] Handle the special case of the last frame (potential 3 rolls)
- [x] Support normal scoring (no strike or spare)
- [x] Validate different scenarios: regular game, complex endings, and perfect game

---

## 📋 Business Rules

The implemented rules follow the standard ten-pin bowling format:

- Each frame allows up to two rolls, except the last which may have three.
- **Strike**: all pins knocked down in the first roll. Score: 10 + next two rolls.
- **Spare**: all pins knocked down in two rolls. Score: 10 + next roll.
- Otherwise, the score is the simple sum of pins knocked down in the frame.
- In the 10th frame:
  - If a **strike** or **spare** occurs, the player gets bonus roll(s).
  - The maximum possible score is **300 points** (a perfect game with 12 consecutive strikes).

---

## 🧠 Data Structure

Frames are represented as an array of arrays. Each subarray represents a frame with up to two rolls (or three in the final frame if applicable):

```js
const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
];
```

---

## 📈 Implemented Test Cases

### ✅ Regular Game
```js
const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
];
// Expected result: 119
```

### ✅ Complex Ending
```js
const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
];
// Expected result: 141
```

### ✅ Perfect Game
```js
const frames = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
];
// Expected result: 300
```

---

## 🛠 Running the Code

This project was built in **JavaScript (Node.js)**. To execute the code:

```bash
node game.js
```

---

## 🚀 Technical Considerations

- The code was written with a focus on clarity, readability, and modularity.
- The scoring logic was thoroughly tested with different frame combinations to ensure compliance with the game rules.
- This challenge was a valuable exercise in transforming complex business rules into functional, reliable code.

---

If you'd like to review or comment on the code, I'm open to technical feedback. Thank you for taking the time to evaluate!

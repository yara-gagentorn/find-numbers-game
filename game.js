// You need to find all numbers from 1 to n in order (first 1, then 2...)

// generate n divs, each div contains number
// font size, colors, font-styles are random (a few options for classes)
// on click number become gray and unclickable

// generate divs or spans with numbers

// need to generate different styles for each number
// parameters: color (any, not too white), size (0.5 rem to 5rem), syle (bold,italic,), font-family

// generate a new span

const fontFamilies = [
  "'Abril Fatface', cursive",
  "'Alfa Slab One', cursive",
  "'Anton', sans-serif",
  "'Barlow', sans-serif",
  "'Comfortaa', cursive",
  "'Edu VIC WA NT Beginner', cursive",
  "'Fredoka One', cursive",
  "'Lobster', cursive",
  "'Lobster Two', cursive",
  "'Mochiy Pop One', sans-serif",
  "'Orbitron', sans-serif",
  "'Parisienne', cursive",
  "'Quicksand', sans-serif",
  "'Rampart One', cursive",
  "'Shadows Into Light', cursive",
  "'Titan One', cursive",
]

const fontStyles = ['normal', 'italic']

const howManyNumbers = 10

// random element from array
function getRandomElement(array) {
  let randomEl = array[Math.floor(Math.random() * array.length)]
  return randomEl
}

// generate random color
function randomColor(elem) {
  let someColor = Math.floor(Math.random() * 16777215).toString(16)
  elem.style.color = '#' + someColor
}

// generate random font style and weight
function randomStyleAndWeight(elem) {
  elem.style.fontStyle = getRandomElement(fontStyles)
  elem.style.fontWeight = Math.floor(Math.random() * 900)
}

// generate font
function randomFont(elem) {
  elem.style.fontFamily = getRandomElement(fontFamilies)
}

// generate font size
function randomSize(elem) {
  elem.style.fontSize = Math.floor(Math.random() * 6 + 2) + 'rem'
}

function randomAlign(elem) {
  const alignOpt = ['baseline', 'top', 'middle', 'bottom']
  elem.verticalAlign = getRandomElement(alignOpt)
}

// apply all styles
function assignStyle(elem) {
  randomColor(elem)
  randomFont(elem)
  randomSize(elem)
  randomStyleAndWeight(elem)
  randomAlign(elem)
}

// create an array

function getArray(firstNumber, lastNumber) {
  let arr = []
  for (let i = firstNumber; i <= lastNumber; i++) {
    arr.push(i)
  }
  return arr
}

function generateGameField(howManyNumbers) {
  let arr = getArray(0, howManyNumbers)
  console.log(arr)
  let i = howManyNumbers
  let randomNum
  let newSpan
  let randomEl

  while (i >= 0) {
    i--
    newSpan = document.createElement('span')
    randomEl = getRandomElement(arr)
    randomNum = parseInt(randomEl)
    arr.splice(arr.indexOf(randomEl), 1)
    console.log(arr)
    newSpan.innerHTML = randomNum + ' '
    newSpan.setAttribute('id', randomNum + 'n')
    assignStyle(newSpan)
    //  onClick only on the first number - 0
    if (randomNum === 0) {
      newSpan.onclick = clickOnNumber
    }
    document.getElementById('game-field').appendChild(newSpan)
  }
}

generateGameField(howManyNumbers)

function clickOnNumber(number) {
  let clickedNumSpan = number.target
  let nextSpanID
  clickedNumSpan.classList.add('clicked-num')
  clickedNumSpan.onclick = ''
  nextSpanID = parseInt(clickedNumSpan.innerHTML) + 1 + 'n'
  console.log(nextSpanID)
  document.getElementById(nextSpanID).onclick = clickOnNumber
  console.log(clickedNum)
}

function gameLogic() {
  // click on numbers from 0 to
}

// shows the next number
function showHint() {
  // find the next element and animete it
}

//----- TIMER -------//

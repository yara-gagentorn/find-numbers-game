// You need to find all numbers from 1 to n in order (first 1, then 2...)

// generate n divs, each div contains number
// font size, colors, font-styles are random (a few options for classes)
// on click number become gray and unclickable

// generate divs or spans with numbers

// need to generate different styles for each number
// parameters: color (any, not too white), size (0.5 rem to 5rem), syle (bold,italic,), font-family

// generate a new span

const fontFamilies = [
  "font-family: 'Abril Fatface', cursive",
  "font-family: 'Alfa Slab One', cursive",
  "font-family: 'Anton', sans-serif",
  "font-family: 'Barlow', sans-serif",
  "font-family: 'Comfortaa', cursive",
  "font-family: 'Edu VIC WA NT Beginner', cursive",
  "font-family: 'Fredoka One', cursive",
  "font-family: 'Lobster', cursive",
  "font-family: 'Lobster Two', cursive",
  "font-family: 'Mochiy Pop One', sans-serif",
  "font-family: 'Orbitron', sans-serif",
  "font-family: 'Parisienne', cursive",
  "font-family: 'Quicksand', sans-serif",
  "font-family: 'Rampart One', cursive",
  "font-family: 'Shadows Into Light', cursive",
  "font-family: 'Titan One', cursive",
]

const fontStyles = ['normal', 'italic']

let newSpan = document.createElement('span')

// random element from array
function getRandomElement(array) {
  let randomEl = array[Math.floor(Math.random() * array.length)]
  return randomEl
}

function randomColor(elem) {
  // generate random color
  elem.style.color = red
}

function randomStyleAndWeight(elem) {
  elem.style.fontStyle = 'italic'
  elem.style.fontWeight = '900'
}

function randomFont(elem) {
  elem.style.fontFamily = getRandomElement(fontFamilies)
}

function randomSize(elem) {}

// apply all styles
function assignStyle(elem) {
  elem.randomColor
  elem.randomFont
  elem.randomSize
  elem.randomStyleAndWeight
}

function generateSpanWithNumbers(howManyNumbers) {
  for (let i = 0; i < howManyNumbers; i++) {
    newSpan.innerHTML = i
    newSpan.classList.add('class' + i)
    if (i % 10 === 0) {
      document
        .getElementById('game-field')
        .appendChild(document.createElement('br'))
    }
    // add div inside game-container
    document.getElementById('game-field').appendChild(newSpan)
  }
}

generateSpanWithNumbers(100)

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

// random element from array
function getRandomElement(array) {
  let randomEl = array[Math.floor(Math.random() * array.length)]
  return randomEl
}

function randomColor(elem) {
  // generate random color
  let someColor = Math.floor(Math.random() * 16777215).toString(16)
  elem.style.color = '#' + someColor
  console.log(someColor)
}

function randomStyleAndWeight(elem) {
  elem.style.fontStyle = getRandomElement(fontStyles)
  elem.style.fontWeight = Math.floor(Math.random() * 900)
}

function randomFont(elem) {
  elem.style.fontFamily = getRandomElement(fontFamilies)
  console.log('font' + elem.style.fontFamily)
}

function randomSize(elem) {
  elem.style.fontSize = Math.floor(Math.random() * 5) + 'rem'
  //console.log('size')
}

// apply all styles
function assignStyle(elem) {
  randomColor(elem)
  randomFont(elem)
  randomSize(elem)
  randomStyleAndWeight(elem)
}

function generateGameField(howManyNumbers) {
  for (let i = 0; i < howManyNumbers; i++) {
    console.log('here')
    let newSpan = document.createElement('span')

    newSpan.innerHTML = i
    //newSpan.classList.add('class' + i)
    if (i % 10 === 0) {
      document
        .getElementById('game-field')
        .appendChild(document.createElement('br'))
    }
    // add div inside game-container
    assignStyle(newSpan)
    newSpan.onclick = () => {
      console.log(i)
    }
    document.getElementById('game-field').appendChild(newSpan)
  }
}

generateGameField(100)

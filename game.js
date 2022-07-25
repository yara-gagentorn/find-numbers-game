// You need to find all numbers from 1 to n in order (first 1, then 2...)

// generate n divs, each div contains number
// font size, colors, font-styles are random (a few options for classes)
// on click number become gray and unclickable

// generate divs with numbers

// function generateDivWithNumbers(howManyNumbers) {
//   for (let i = 0; i < howManyNumbers; i++) {
//     let newDiv = document.createElement('div')
//     newDiv.innerHTML = i
//     // add div inside game-container
//     document.getElementById('game-field').appendChild(newDiv)
//   }
// }

function generateSpanWithNumbers(howManyNumbers) {
  for (let i = 0; i < howManyNumbers; i++) {
    let newSpan = document.createElement('span')
    newSpan.innerHTML = i
    newSpan.classList.add('class' + i)
    // add div inside game-container
    document.getElementById('game-field').appendChild(newSpan)
  }
}

generateSpanWithNumbers(100)

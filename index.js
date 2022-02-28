const rColBtn = document.querySelector('.r-col-btn')
const header = document.querySelector('header')
const hexCode = document.getElementById('hex-code')
let curBackCol = ''

// let randHexStr = () => {
//   const hexCharArr = [
//     {
//       '10': 'a',
//       '11': 'b',
//       '12': 'c',
//       '13': 'd',
//       '14': 'e',
//       '15': 'f'
//     }
//   ]
//   let hexStr = '#'
//   while (hexStr.length < 7) {
//     const randNum15 = () => {
//       return Math.floor(Math.random() * 16)
//     }
//     let newRand = randNum15()
//     if (hexCharArr[0][newRand]) {
//       hexStr += hexCharArr[0][newRand]
//     } else {
//       hexStr += newRand
//     }
//   }
//   return hexStr
// }

let randHexStr2 = () => {
  const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  const randNum15 = () => {
    return Math.floor(Math.random() * 16)
  }
  let hexStr = '#'
  while (hexStr.length < 7) {
    hexStr += hexChars[randNum15()]
  }
  return hexStr
}

rColBtn.addEventListener('click', () => {
  let newHexStr = randHexStr2()
  console.log(newHexStr)
  // let newColStr = `
  //       <style class='${newHexStr}'>
  //         body {
  //             background-color: ${newHexStr};
  //         }
  //       </style>`
  hexCode.innerHTML = newHexStr
  curBackCol = newHexStr
  // header.innerHTML += newColStr
  document.body.style.backgroundColor = newHexStr
})

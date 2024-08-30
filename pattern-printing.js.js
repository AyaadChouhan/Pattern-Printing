//star pyramid..
function patternPrinting(nTimes, patternType) {
  let star = "";
  //=================================

  // for (let i = 0; i <= nTimes; i++) {
  //   for (let j = 1; j <= nTimes - i; j++) {
  //     star += " ";
  //   }
  //   for (let k = 0; k <= i * 2; k++) {
  //     star += patternType;
  //   }
  //   console.log(star);
  //   star = "";
  // }

  //==========
  for (let i = 0; i <= nTimes; i++) {
    for (let j = 0; j < i ; j++) {
      star += " ";
    }
    for (let k = 0 ; k < ((nTimes * 2) - 1) - (2 * i); k++) {
      star += patternType;
    }
    console.log(star);
    star = "";
  }
}
patternPrinting(5, "*");

// for (let i = 0; i < nTimes; i++) {
//   star += patternType;
// }
// for (let j = 0; j < nTimes; j++) {
//   console.log(star);
// }

//==================================
//Pyramid... with *.
// for (let i = 0; i < nTimes; i++) {
//     star += patternType;
//     console.log(star)
// }

//==================================
//HalfPyramid... with numbers.
// for (let i = 0; i < nTimes; i++) {
//     star += patternType++;
//     console.log(star)
// }

//==================================
//HalfPyramid... with numbers.
// for (let i = 1; i <= nTimes; i++) {
//   for (let j = 1; j <= i; j++) {
//     star += i;
//   }
//   console.log(star);
//   star = "";
// }
//===================================
//number half Pyramid

//   for (let i = nTimes; i > 0; i--) {
//     for (let j = i; j > 0; j--) {
//       star += patternType;
//     }
//     console.log(star);
//     star = "";
//   }
// }
//===============================
//number half Pyramid
// for (let i = nTimes; i > 0; i--) {
//   for (let j = i , k = 1; j > 0; j--, k++) {
//     star += k;
//   }
//   console.log(star);
//   star = "";
// }

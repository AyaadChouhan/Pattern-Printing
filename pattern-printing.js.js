// // const promise1 = new Promise((resolve, reject) => {
// //  setTimeout(() => {
// //   resolve("slow")
// //  }, 500);

// // setTimeout(resolve, 1000, "ayaad chouhan")
// // });
// // promise1.then((val)=>{
// //   console.log(val);
// // }).catch((err)=>{
// //   console.log(err);
// // })
// const promise2 = new Promise((resolve, reject) => {
//   if (false) {
//     return resolve(2);
//   } else {
//     return reject("2oops");
//   }
// });
// const promise3 = new Promise((resolve, reject) => {
//   if (false) {
//     return resolve("3");
//   } else {
//     throw new Error();
//   }
// });
// const promise4 = new Promise((resolve, reject) => {
//   if (false) {
//     return resolve("hello world");
//   } else {
//     return reject("4oops");
//   }
// });
// const promises = [promise2, promise3, promise4];
// // Promise.any(promises)
// //   .then((val) => {
// //     console.log(val);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // Promise.race(promises)
// //   .then((val) => {
// //     console.log(val);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// Promise.allSettled([promise2, promise3, promise4]).then(function (result) {
//   result.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
//     } else {
//       console.log(
//         `Promise ${index + 1} rejected with reason: ${result.reason}`
//       );
//     }
//   });
// });
// // .catch(function (err) {
// //   console.log(err);
// // });

// // promise1
// //   .then(function (val) {
// //     let newVal = val * 2;
// //     console.log(newVal);
// //     return newVal;
// //   })
// //   .then(function (val) {
// //     let newVal = val * 2;
// //     console.log(newVal);
// //     return newVal;
// //   })
// //   .then(function (val) {
// //     let newVal = val * 2;
// //     console.log(newVal);
// //     return newVal;
// //   })
// //   .catch(function (err) {
// //     console.log(err);
// //   });

// // const promise1 = Promise.reject('oops');
// // const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// // const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// // const promises = [promise2, promise3, promise4];

// // Promise.all(promises).then((value) => console.log(value)).catch(function (err) {
// //         console.log(err);
// //       });
// //       // Promise.an
// //       Promise.any(promises).then((value) => console.log(value)).catch(function (err) {
// //         console.log(err);
// //       });
// //       Promise.race(promises).then((value) => console.log(value)).catch(function (err) {
// //         console.log(err);
// //       })
// //       Promise.allSettled(promises).then((value) => console.log(value)).catch(function (err) {
// //           console.log(err);
// //         })

// // let promise1 = new Promise((resolve, reject) => {
// //   let response = fetch('https://mail.google.com/chat/u/0/#chat/dm/qkUcDUAAAAE')
// //   // let val = response.json();
// //   resolve(response);
// //   reject('something went wrong')
// // });

// // promise1.then(function (val) {
// //     console.log(val);
// // }).catch((err)=>{
// //   console.log(err);
// // })

// // try {
// //   console.log(age)
// // } catch (error) {
// //   console.log(error)
// // }

// async function prom(url) {
//   try {
//     let response = await fetch(url);
//     let val = await response.text();
//     return val;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// // prom("https://jsonplaceholder.typicode.com/users")
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// // async function prom(url) {
// //   let response = await fetch(url);//The keyword await makes JavaScript wait until that promise settles and returns its result.
// //   let data = await response.json();
// //   return data
// // }
// // prom('https://jsonplaceholder.typicode.com/users').then((result) => {
// //     console.log(result)
// // }).catch((err) => {
// //     console.log(err)
// // });
// var addTwoNumbers = function (l1, l2) {
//   let newArr = [];
//   let val = l1.join("");
//   let val2 = l2.join("");
//   let sum = Number(val) + Number(val2);
//   let str = String(sum);
//   let convertToArr = [...str];
//   for (let i = 0; i < convertToArr.length; i++) {
//     newArr.push(Number(str[i]));
//   }
//   return newArr.reverse();
// };

// // console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// // console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));

// function sortByCharFrequency(str) {
//   // let set = new Set(str);
//   // let obj = {};
//   // set.forEach((element) => {
//   //   obj[element] = element;
//   // });
//   // // let newStr = "";
//   // let count = 0;
//   // for (let i = 0; i < str.length; i++) {
//   //   if (strval === str[i]) {
//   //     obj.str[i] = 0;
//   //   }
//   // }
//   // return count;

//   const val = str.split('').sort();
//   let firstVal = val[0]
//   let arr = [];
//   let newStr = ''
//   for (let i = 0; i < val.length; i++) {
//       if (firstVal === val[i]) {
//         newStr += firstVal
//       } else{
//         arr.push(newStr);
//       }
//   }
//   return arr
// }

// // Example usage
// const inputString = "banana";
// const sortedString = sortByCharFrequency(inputString);
// console.log(sortedString); // Output: "aaannb"

// function freezer(obj, layers) {

//   for (const key in obj) {
//     console.log(key)
//   }
// }

// let firstlayer = {
//   seclayer: {
//     thirdlayer: {
//       faculty: "CS",
//     },
//   },
// };
// let data = freezer(firstlayer, 3)
// console.log(data)

// let freeze = Object.freeze(obj.seclayer);
// // obj.name = 'ayad'
// obj.seclayer.id = 999;
// console.log(obj);

//===================================
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

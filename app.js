console.log("hello from app.js");

const btn1 = document.querySelector("#btn1");
const body = document.querySelector("body");

btn1.addEventListener("click", () => {
  body.classList.add("backgroundColor");
})

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("mouseover", () => {
  console.log("Moused over me");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn2.style.left = `${width}px`;
  btn2.style.top = `${height}px`;
});

btn2.addEventListener('click', ()=> {
  btn2.innerText = "YOU GOT ME!";
  body.style.backgroundColor = "green";
})

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet"
];
const container = document.querySelector('#boxes');

const h2 = document.querySelector('h2');
const changeColor = function(box){
  const h2 = document.querySelector("h2");
  body.style.backgroundColor = box.style.backgroundColor;
}



for(let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);

  box.addEventListener('click', function() {
    changeColor(box);
  })
}


// numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers2= [1,2,3,4,5,8];
// negative= [0,0];
// console.log(numbers);
// console.log(numbers2);

// function findNotConsecutive(arr){
//     let prev = arr[0];
//     let temp;
//     for(let i =1; i<arr.length; i++) {
//         if(prev + 1 != arr[i]) {
//           temp=arr[i];
//           return temp;
//           break;
//         }
//         prev++;
//     }
//     return null;
//     }
// console.log('Solution for findNotConsecutive:');
// console.log('numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];')
// console.log(findNotConsecutive(numbers));
// console.log('numbers2= [1,2,3,4,5,8];')
// console.log(findNotConsecutive(numbers2));
// console.log('Solution for findNotConsecutive([4,5,6,7,9,10]));')
// console.log(findNotConsecutive([4,5,6,7,9,10]));
// console.log('find from negative ');
// console.log(findNotConsecutive(negative));
// console.log('----------------------------------------------------------------');
// function multiply (arr) {
//   const multiplication = arr.reduce((accumulator, current) => {
//     return accumulator * current;
//   });
//   return multiplication;
// };
// console.log('SOLUTION FOR MULTIPLICATION:')
// console.log(" multiply([1,2,3,4])")
// const multiplication = multiply([1,2,3,4]);
// console.log(multiply([1,2,3,4]));
// console.log('----------------------------------------------------------------');
// let hello = "hello";
// let HELLO = 'HELLO';

// function isAllCaps (someString) {
//    if(someString == someString.toLocaleUpperCase()) {
//     return true;
//    } else {
//     return false;
//    };
// }
// console.log('Solution for isAllCaps:');
// console.log('isAllCaps(hello)')
// console.log(isAllCaps(hello));
// console.log('isAllCaps(HELLO)')
// console.log(isAllCaps(HELLO));
// console.log('isAllCaps(Ania)')
// console.log(isAllCaps("Ania"));
// console.log('----------------------------------------------------------------');
// function reverse (word) {
//     const reversedWord = [];
//     for(let a=word.length; a >= 0; a--) {
//         reversedWord.push(word.charAt(a));
//         // console.log(reversedWord);
//     }
//     return reversedWord.join('');
// }

// console.log('Solution for reverse(katar)');
// console.log(reverse('katar'));
// const aristotelis = 'Werner Vígi';
// console.log('----------------------------------------------------------------');
//     function printNameOnBillboardCalculatePrice(name, price=15) {
//         // const characters = name.length;
//         // const billboard = characters * 30;
//         // return billboard;
//         let total = 0;
//         for(let b = 0; b< name.length; b++) {
//             total = total + price;
//         }
//         return total;
//     }
// console.log("Solution for printNameOnBillboardCalculatePrice");
//     console.log(printNameOnBillboardCalculatePrice(aristotelis));
// console.log('----------------------------------------------------------------');
//     const square = [1,2,2];

//     function squareSum(numbers) {
//         let sum = 0;
//         for(let d = 0; d < numbers.length; d++) {
//             let toPower = Math.pow(numbers[d], 2);
//             sum = sum + toPower;
//         }
//         return sum;
//     }
// console.log("Solution for squareSum");
// console.log(squareSum(square));
// console.log('----------------------------------------------------------------');
// duplicateExample = [1,1,1,2,3,5,99,100];
//     function distinct(a) {
//         noDuplicates = [];
//           for(let e = 0; e < a.length; e++){
//                if(!noDuplicates.includes(a[e])){
//                  noDuplicates.push(a[e]);
//                } else {
//                  continue;
//                }
//         }
//       return noDuplicates;
//       }
// noDuplicates = [...new Set(a)];
// console.log(noDuplicates);
// }
// console.log("Solution for duplicateExample");
// console.log(distinct(duplicateExample));
// console.log('----------------------------------------------------------------');
// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break;
//       case 2:
//         name = 'Venus'
//         break;
//       case 3:
//         name = 'Earth'
//         break;
//       case 4:
//         name = 'Mars'
//         break;
//       case 5:
//         name = 'Jupiter'
//         break;
//       case 6:
//         name = 'Saturn'
//         break;
//       case 7:
//         name = 'Uranus'
//         break;
//       case 8:
//         name = 'Neptune'
//         break;
//     }
//     return name;
//   }
//   console.log(getPlanetName(5));
// console.log('----------------------------------------------------------------');
// var countSheep = function (num){
//     let sheeps = [];
//     for(let f= 1; f <= num; f++) {
//         let part = `${f} sheep...`;
//         sheeps.push(part);
//     }
//     return sheeps.join('');
//   }
// console.log("Solution for countSheep");
// console.log(countSheep(5));
// console.log('----------------------------------------------------------------');
//   function removeChar(str){
//     let last = str.length - 1;
//     // debugger;
//      let newStr = str.slice(1, last);
//     console.log(newStr);
//     return newStr;
//    };
// console.log("Solution for removeChar");
//    removeChar('pAniap');
// console.log('----------------------------------------------------------------');
//    function bonusTime(salary, bonus) {
//         if(bonus) {
//             salary = salary * 10;
//         }
//         return `£${salary}`;
//    }
//    console.log(bonusTime(4000, false));
//    console.log(bonusTime(4000, true));
// console.log('----------------------------------------------------------------');
//    function isIsogram(str) {
//      if(str.length = 0) {
//       return true;
//     } else {
//       str = str.toLowerCase();
//     }

//     let changeToArr =str.split("");
//     let sortedArray = changeToArr.sort();
//     console.log(sortedArray);
//      for(let g=0; g < str.length; g++) {
//       if (sortedArray[g] == sortedArray[g+1]) {
//         return false;
//       }
//     }
//       return true;
//    }

//    console.log(isIsogram("Anna"));
//    console.log(isIsogram("nikos"));
//    console.log(isIsogram(""));
// console.log('----------------------------------------------------------------');
//    function abbrevName(name) {
//     nameArr = [];
//     for(l = 0; l < name.length; l++) {
//       nameArr.push(name[l]);
//     }
//     nameArr = name.split(" ");
//     initials = [];
//     console.log(nameArr);
//     initials.push(nameArr[0].charAt(0).toUpperCase());
//     initials.push(nameArr[1].charAt(0));
//     return initials.join(".");
//    }
//    console.log(abbrevName("anna Szpecht"));
// console.log('----------------------------------------------------------------');
//  const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   if(step > end) {
//     return 0;
//   } else {
//     for(let i = begin; i <= end; i=i+step) {
//       sum = i + sum;
//     }
//   }
//  return sum;
//  }

//  console.log(sequenceSum(2,6,2));
//  console.log(sequenceSum(1,5,3));
// console.log('----------------------------------------------------------------');
//   function arithmetic(a, b, operator){
//     let result = 0;
//     switch(operator){
//         case "add":
//           result = a + b;
//         break;
//         case "subract":
//           result= a - b;
//           break;
//         case "multiply":
//           result = a  * b;
//           break;
//         case "divide":
//           result = a / b;
//         break;
//         default:
//           return result;
//     }
//     return result;
//   }
// console.log(arithmetic(2, 2, "add"));
// console.log('----------------------------------------------------------------');
// function getCount(str) {
//   let vowCount = 0;
//   vow = "";
//   for (let i = 0; i <= str.length; i++) {

//     if(str.charAt(i) == "a"){
//       vowCount = vowCount + 1;
//     } else if(str.charAt(i) == "e") {
//       vowCount++;
//     } else if(str.charAt(i) == "i") {
//       vowCount++;
//     } else if(str.charAt(i) == "o") {
//       vowCount++;
//     } else if(str.charAt(i) == "u") {
//       vowCount++;
//     }
//   }
//   return vowCount;
// }

// console.log(getCount("abracadabra"));
// console.log('----------------------------------------------------------------');
// function squareDigits(num){
//   let number = '' + num;
//   // console.log(number);
//   numberArr = [];
//   for(let i = 0; i< number.length; i++) {
//     numberArr.push(number[i]);
//   }
//   // console.log(numberArr);
//   let squredDigits = 0;
//   let sumOfSquaredDigits = [];

// function squareDigits(num){
//   let number = '' + num;
//   // console.log(number);
//   numberArr = [];
//   for(let i = 0; i< number.length; i++) {
//     numberArr.push(number[i]);
//   }
//   // console.log(numberArr);
//   let squredDigits = 0;
//   let sumOfSquaredDigits = [];

//   for(let j = 0; j < numberArr.length; j++) {
//     let n = parseInt(numberArr[j]);
//     squaredDigits = Math.pow(n, 2);
//     sumOfSquaredDigits.push(squaredDigits);
//   }
//   return parseInt(sumOfSquaredDigits.join(''));
// }
// console.log(squareDigits(9119));
// console.log(squareDigits(2112));

// function disemvowel(str) {
//   let noVowel = str.replace(/a|e|i|o|u/ig, "");
//   return noVowel;
// }

// console.log(disemvowel("This website is for losers LOL!"));
// console.log('----------------------------------------------------------------');
//   for(let j = 0; j < numberArr.length; j++) {
//     let n = parseInt(numberArr[j]);
//     squaredDigits = Math.pow(n, 2);
//     sumOfSquaredDigits.push(squaredDigits);
//   }
//   return parseInt(sumOfSquaredDigits.join(''));
// }
// console.log(squareDigits(9119));
// console.log(squareDigits(2112));
// console.log('----------------------------------------------------------------');
// function disemvowel(str) {
//   let noVowel = str.replace(/a|e|i|o|u/ig, "");
//   return noVowel;
// }

// console.log(disemvowel("This website is for losers LOL!"));
// console.log('----------------------------------------------------------------');
// function highAndLow(numbers){
//   numbers = numbers.split(" ");
//   // console.log(numbers);
//   return Math.max(...numbers) + " " + Math.min(...numbers);
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// console.log('----------------------------------------------------------------');
// function descendingOrder(n){
// array = [];
// string = n.toString();
// for(let i = 0; i <= string.length; i++) {
//   array.push(string[i]);
// }
// console.log(array);
//  for(let i = 0; i < array.length - 1; i++) {
//   for(let j = i + 1; j < array.length; j++) {
//     if(parseInt(array[i]) < parseInt(array[j])) {
//       temp = array[i];
//       array[i] = array [j];
//       array [j]= temp;
//     }
//   }
// }
// return array.join("");
//another solution also fail with 0
//     nToString = n.toString();
//     nBackToNumArr = nToString.split("");
//     nBackToNumArr.sort((a, b) => b - a);
//     nToNumArr = nBackToNumArr.join("");
//     return nToNumArr;
// }
// console.log(descendingOrder(0, 0));
// console.log(descendingOrder(013456789));
// console.log('----------------------------------------------------------------');
// function accum(s) {
//   const result = []
//   const lowerCase = s.toLowerCase()

//   for(let i = 0; i < lowerCase.length; i++) {
//     let string = lowerCase[i].toUpperCase()
//     for(let j = 0; j < i; j++) {
//       string = string + lowerCase[i];
//     }
//     result.push(string);
//   }
//   return result.join("-")
// }
// console.log(accum("abc"));
// console.log('----------------------------------------------------------------');
// function getMiddle(string) {
//   newArr = [];
//   let middle;
//   for(let i = 0; i < string.length; i++) {
//     if(string.length % 2 !== 0){
//       middle = Math.ceil(string.length / 2 - 1);
//       newArr.push(string[middle]);
//     } else {
//       middle = Math.round(string.length/2);
//       newArr.push(string[middle - 1]);
//       newArr.push(string[middle]);
//     }
//     // console.log(newArr);
//     return newArr.join("");
//   }
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log('----------------------------------------------------------------');
// function filter_list(l){
// const numbersOnly = l.filter(x => {
//  return typeof x === 'number';
// })
// return numbersOnly
// }

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1,'a','b',0,15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));
// console.log('----------------------------------------------------------------');
// var isSquare = function (n) {
//   let squared = Math.sqrt(n);
//   if ( n === 0) {
//     return true;
//   } else if (squared % 1 != 0) {
//     console.log(squared % 1);
//     return false;
//   } else if (squared % squared === 0) {
//     console.log(Math.sqrt(n));
//     console.log( n * n);
//     return true;
//   }
//  return false;
// }
// console.log(isSquare(4));
// console.log(isSquare(3));
// console.log(Math.sqrt(3));
// console.log(5 * 5);
// console.log(Math.sqrt(5));
// console.log(Math.sqrt(25));
// console.log('----------------------------------------------------------------');
// function XO (str)  {
// if(str.includes("x") && str.includes("o")) {
// let countX = 0;
// let countO = 0;
//   for(let i = 0; i<= str.length; i++) {
//     if(str[i]=== "x" || str[i] === "X"){
//       countX++;
//     } else if (str[i] === "o" || str[i] === "O") {
//       countO++;
//     }
//   }
// if(countX === countO){
//     return true;
// } else if (!str.includes("x") && !str.includes("o") ) {
//   return true;
// }
// return false;
// }

// console.log(XO("xxoo"));
// console.log(XO("xooxx"));
// console.log(XO("ooxXm"));
// console.log(XO("zpzpzpp"));
// console.log(XO("zzoo"));
// console.log('----------------------------------------------------------------');

//   function toJadenCase(string) {
//   caps = [];
//   let words = string.split(" ");
//   console.log(words);

//   for(let i = 0; i < words.length; i++) {
//     word = words[i];
//     caps.push(word[0].toUpperCase()+ word.slice(1));
//   }
// return caps.join(" ");
// }

// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
// console.log('----------------------------------------------------------------');
// function findShort(s) {
//   let words = s.split(" ");
//   console.log(words);
//   length = [];
//   for(let i = 0; i < words.length; i++) {
//     length.push(words[i].length);
//   }
//   return Math.min(...length);
// }
// console.log(findShort("Which is the longest word of all"));
// console.log('----------------------------------------------------------------');
// function sumTwoSmallestNumbers(numbers) {
//   smallest = [];
//   let sumOfSmallest = 0;
//   const sorted = numbers.sort((a, b) => a - b);
//   // console.log(sorted);
//   for(let i = 0; i< 2; i++){
//     // console.log(sorted[i]);
//     // smallest.push(sorted[i]);
//     sumOfSmallest = sorted[i] + sumOfSmallest;
//   }
//   return sumOfSmallest;
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2]));
// console.log('----------------------------------------------------------------');
// function friend(friends){
//   trueFriends = [];
//   for(let i = 0; i < friends.length; i++) {
//     if(friends[i].length == 4) {
//       trueFriends.push(friends[i]);
//     }
//   }
//   return trueFriends;
// }
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
// console.log('----------------------------------------------------------------');
// function maskify(cc) {
//   let length = cc.length;
//   let start = length - 4;
//   masked = [];

// for(let i = 0; i < start; i++){
//   masked.push("#");
// }

// for(let j = start; j < length; j++) {
//   masked.push(cc[j]);
// }
// // console.log(masked);
// return masked.join("");
// }
// console.log(maskify('ananananananannnananana Batman!'));
//sprawdz jak dziala slice
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
// console.log('----------------------------------------------------------------');
// function longest(s1, s2) {
//   onlyOne = new Set ([...s1, ...s2].sort());
//  return Array.from(onlyOne).join("");
// }
// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
// console.log('----------------------------------------------------------------');

// function openOrSenior(data) {

// }
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
// console.log('----------------------------------------------------------------');
// function wordsToMarks(string){
//   alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   values = [];
//   let result = 0;
//   let letter;

//   for(let j = 1; j<= alphabet.length; j++){
//     values.push(j);
//   }

//   for(let i = 0; i <= string.length; i++) {
//     letter = string.charAt(i);
//     console.log(letter);

//     for(let k = 0; k <= alphabet.length; k++) {
//       if(letter == alphabet[k]){
//         result = values[k] + result;
//       }
//     }
//   }
//   return result;
// }
// const wordsToMarks = (string) => {
//   [...string].reduce((accumulator, valueAtIndex) => {
//   accumulator = accumulator + valueAtIndex.charCodeAt();

// })
// return wordsToMarks;
// }
//charCodeAt!

// function wordsToMarks(string){
//   let result = 0;
//   for(let i = 0; i < string.length; i++) {
//   result = string.charCodeAt(i) - 96 + result;
//   }
// return result;
// }
// // console.log("a".charCodeAt());
// console.log(wordsToMarks("ab"));
// console.log('----------------------------------------------------------------');
// function solution(number) {
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if ((i % 3 === 0) || (i % 5 === 0)) {
//       sum = i + sum;
//     }
//   }
//   return sum;
// }
// console.log(solution(10));
// console.log('----------------------------------------------------------------');
// function spinWords(string){
//   let words = string.split(" ");
//   let spinnedWords = "";

//   words.map((word, i) => {
//     if(word.length >= 5) {
//       words[i] = word.split("").reverse().join("");
//     } else {
//       words[i] = word;
//     }
//     spinnedWords = words.join(" ");
//   });
//   return spinnedWords;
// }

// console.log(spinWords("Hey fellow warriors"));
// console.log('----------------------------------------------------------------');
// function findOdd(A) {
//   let count = 0;
//   let arr = A.sort();
//   console.log(arr);

//   for(let i = 0; i <= arr.length; i++) {
//     for(let j = 0; j<= arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//         // console.log("i: " + i + " j: " + j + " arr[i]: " + arr[i]  + " array[j]= " + arr[j] + " count: " +  count);
//       }
//     }
//     if(count % 2 !== 0) {
//       return arr[i];
//     }
//   }
// }

// let obj = {};
// A.forEach(element => {
//   if(obj[element]){
//     obj[element]++;
//   } else {
//     obj[element] = 1;
//   }
// });

// let keys = Object.keys(obj);
// let result = keys.filter(key => obj[key] % 2!= 0);
// return result;

// console.log(findOdd([7]));
// console.log(findOdd([0, 1, 0, 1, 0]));
// console.log(findOdd([1,1,2]));
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
// console.log('----------------------------------------------------------------');
// function digitalRoot(numbers) {
//   let sum = numbers;
//   let arr = [];

//   while(sum > 9) {
//     arr = sum.toString().split("");
//     sum = arr.reduce((a,b) => {
//       return parseInt(a) + parseInt(b);
//     });
//     console.log(arr);
//   }
//   return sum;
// }
// console.log(digitalRoot(16));
// console.log(digitalRoot(942));
// console.log(digitalRoot(132189));
// console.log('----------------------------------------------------------------');
// function likes(names) {
//   console.log(names);
//   const [first, second, third] = names;

//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//       break;
//     case 1:
//       return `${first} likes this`;
//       break;
//     case 2:
//       return `${first} and ${second} like this`;
//       break;
//     case 3:
//       return `${first}, ${second} and ${third} like this`;
//       break;
//     default:
//       return `${first}, ${second} and ${names.length - 2} others likes this`;
//   }
// }
// console.log(likes([]));
// console.log(likes(["Nikos"]));
// console.log(likes(["Ania", "Iwona"]));
// console.log(likes(["Ania", "Iwona", "Krzysiek"]));
// console.log(likes(["Ania", "Iwona", "Krzysiek", "Marcin"]));
// console.log('----------------------------------------------------------------');

// function arrayDiff(a, b) {
//   const diff = a.filter(b => {
//     return a !== b;
//   })
//   return diff;
// }
// console.log(arrayDiff([1,2], [1]));

const dragonEvents = [
  { type: 'sleep', value: 10 },
  { type: 'attack', 
    value: 50, target: 'player-1' },
  { type: 'eat', value: 10 },
  { type: 'attack', value: 10, target: 'player-2' },
  { type: 'attack', value: 50, target: 'player-2' },
  { type: 'eat', value: 50 },
  { type: 'sleep', value: 10 },
  { type: 'attack', value: 20, target: 'player-1' },
  { type: 'sleep', value: 10 },
  { type: 'attack', value: 50, target: 'player-2' },
  { type: 'attack', value: 50, target: 'player-1' },
  { type: 'sleep', value: 10 },
  { type: 'attack', value: 150, target: 'player-2' },
  { type: 'eat', value: 10 },
  { type: 'attack', value: 50, target: 'player-1' }
];
// Wypisz na ekranie ile punktów obrazen (w sumie) dostal player-1,
// Wypisz ile punktów zycia zostalo player-2 przy zalozeniu ze na poczatku mial 1000

const damageP1 = dragonEvents.filter(p => p.target && p.target.includes("player-1"))
                              .map(v => v.value)
                              .reduce((prev, next) => prev + next);
// console.log(damageP1);

const damageP2 = dragonEvents.filter(p => p.target && p.target.includes("player-2"))
                            .map(v => v.value)
                            .reduce((prev, next) => prev + next);

const lifeLeftP2 = 1000 - damageP2;
console.log("Player 2 left points of life: " + lifeLeftP2);


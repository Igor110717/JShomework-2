// Задание 1
// const logItems = function(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log (`${i+1} - ${array[i]}`)
//   }
//   };
  
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  
  // Задание 2
  // const calculateEngravingPrice = function(message, pricePerWord) {
  //  const sum = pricePerWord * message.split(" ").length;
  //  return sum
  // };
  
  // console.log(
  //   calculateEngravingPrice(
  //     'Proin sociis natoque et magnis parturient montes mus',
  //     10,
  //   ),
  // ); // 80
  
  // console.log(
  //   calculateEngravingPrice(
  //     'Proin sociis natoque et magnis parturient montes mus',
  //     20,
  //   ),
  // ); // 160
  
  // console.log(
  //   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  // ); // 240
  
  // console.log(
  //   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  // ); // 120
  
  // Задание 3

//   const findLongestWord = function(string) {
//     const stringArray = string.split(" ");
//     let longestWord = stringArray[0];
    
//     for (const element of stringArray) {
    
//       if (element.length > longestWord.length) {
//         longestWord = element;
//       }

//     }
    
//     return longestWord;
//   };

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


// Задание 4

// const formatString = function(string) {
//   return string.length > 40 ? string.slice(0, 40) + "..." : string;
// };


// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка


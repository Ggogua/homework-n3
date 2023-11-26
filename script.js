// 1)
// let array1 = ["hello", 14, 24, "hello2"];
// let onlyNumbers = array1.filter((num) => num >= 0 || num <= 0);
// console.log(onlyNumbers);

// 2)
// let array2 = [14, 150, 'css', null, 'javascript', 25];
// let newArray = array2.map((numb) => {
//     if (typeof numb == 'number') {
//         return numb * numb;
//     }
//     else if (typeof numb == 'string') {
//         return numb.toUpperCase();
//     }

//     return numb;
// }) 

// console.log(newArray);

// 3)
// let info = "Good Day";
// let newInfo = info.slice(4, 8);
// console.log(newInfo);

// 4)
// let theLength = (word) => {
//     return word.length;
// }
// console.log(theLength('hippopotamus'));

// 5)
// let question = prompt("Capital of Sakartvelo?: ");
// let correctAnswer = 'tbilisi';
// let userAnswer = question.trim().toLowerCase();
// let trueOrFalse = (userAnswer.toLowerCase() === correctAnswer) ? 'True' : 'False';

// 6)
// let link = "https://google.com";
// function checker(link) {
//     if (link.indexOf("https://") !== -1) {
//         return "Yes, it contains it";
//     }

//     return "Nope, it does not";
// };

// console.log(checker(link));

// 7)
// let fruits = ["Apple", "Mango", "Avocado", "Kiwi"];
// fruits.splice(-2, 1, 'Strawberry');
// console.log(fruits);

// 8)
// let THE_ARRAY = [5, 25, 89, 120, 36];
// THE_ARRAY.push("Javascript", "Python");
// THE_ARRAY.unshift("html", "css");
// console.log(THE_ARRAY.length);
// THE_ARRAY.shift();
// THE_ARRAY.pop();
// console.log(THE_ARRAY);

// 9)
// let FRUIT_ARRAY = ["Orange", "Banana", "Pear"];
// console.log(FRUIT_ARRAY.length);
// FRUIT_ARRAY.push("Apple", "Pineapple");
// FRUIT_ARRAY.unshift("Watermelon");
// console.log(FRUIT_ARRAY.length);
// FRUIT_ARRAY.splice(2, 0, 'Mango');
// FRUIT_ARRAY.pop();
// FRUIT_ARRAY.shift();
// console.log(FRUIT_ARRAY.length);

// 10)
// let array =[1, 2, 3, 4, 5];
// array.splice(3, 0, 'a', 'b', 'c');
// console.log(array);

// 11)
// let arr = [1, 2, 3, 4, 5].reduce((total, num) => total + num);
// console.log(arr);

// 12)
// let  array = [12, 25, 3, 6, 8, 14, 7, 23];
// let mapArray = array.map((numb) => Math.round(numb / 3));
// console.log(mapArray);

// 13)
// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let useFilter = languages.filter((word) => word.length > 3);
// console.log(useFilter);

// 14)
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let theFilter = words.filter((word) => word.includes('m') || word.includes('M'));
// console.log(theFilter);

// 15)
// let arr = [-1, -2, -3, 4]; 
// let checkIt = arr.some((numb) => numb > 0);
// console.log(checkIt);

// 16)
// let arr =  [15, 100, 25, 10, 36];
// arr.splice(-2, 1);
// console.log(arr);

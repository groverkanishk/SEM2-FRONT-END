// // Array Methods
// // 1. push() 
// let fruits = ["apple", "banana"];
// let newLength = fruits.push("cherry");

// console.log(fruits);
// console.log(newLength);

// // 2. pop()
// let fruits = ["apple", "banana", "cherry"];
// let removed = fruits.pop("cherry");

// console.log(fruits);
// console.log(removed);

// // 3. shift() 
// let fruits = ["apple", "banana", "cherry"];
// let removed = fruits.shift("apple");

// console.log(fruits);
// console.log(removed);

// // 4. unshift
// let fruits = ["banana", "cherry"];
// let newLength = fruits.unshift("apple");

// console.log(fruits);
// console.log(newLength);

// Q1: Reverse the array by using push() and pop() method.
// let arr = [1,2,3,4,5]
// let reverse = []

// while(arr.length > 0){
//     reverse.push(arr.pop())
// }
// console.log(reverse)

// Q2: Remove all negative numbers.
// let arr = [-12, -5, -1, 2, 6, 9, 13]
// let positive = []

// while(arr.length > 0){
//     let val = arr.shift
//     if (val >= 0){
//         positive.push()
//     }
// }

// Q3: Check if array is palidrone or not.
let arr = [1,2,3,4,5]
let temp = []
let orignal = []

for(let i = 0; i < arr.length; i++){
    orignal.push(arr[i])
}
console.log(orignal);

while (arr.length > 0){
    temp.push(arr.pop());
}
console.log(temp);

for (let i = 0; i < orignal.length; i++){
    if (orignal[i] !== temp[i])
        console.log("It is not a palidrone");
    else {
        console.log("It is a palidrone")
    }
    return
}
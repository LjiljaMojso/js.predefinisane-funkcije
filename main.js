//TASK 1

/* ased on given string:

"Lorem ipsum dolor sit amet"

Create a function that should receive string, and transform all letters to lowercase.

 */
var someString = "Lorem ipsum dolor sit amet";
console.log(someString.toLowerCase())

//TASK 2

/* Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should check if there is a word "sit" in the string, and console log sentence saying that it exist or not.
 */
var someString = "Lorem ipsum dolor sit amet";
var status = someString.indexOf("sit") > -1;
if (status == true) { 
} 
console.log(" In this strind exist a world sit ");

//TASK 3

/* Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should find and return index of the last letter in the sentence. */
var someString = "Lorem ipsum dolor sit amet";
var lastLetter = someString.lastIndexOf(someString.charAt(someString.length -1 ))


console.log( " Last letter in the sentence is at index of " + lastLetter) 

//TASK 4

/* Based on given string:

"Lorem ipsum dolor sit amet"

Create a function that should split string based on empty space, and return first 3 results.
 */

var someString = "Lorem ipsum dolor sit amet";
var result = someString.split(" ");
var newResult = [];
for (let i = 0; i < 3; i++) {
    newResult[i] = result[i];
    
}
console.log(newResult)


//TASK 5

/* Based on given string:

"Piter is an actor."

Create a function that should turn a string into the following string:

"Pitor is an acter." */

var someName = "Piter is an actor."
var newName = someName.replace(/o/, "e")
console.log(newName)

//TASK 6

/* Based on given array:

var someData = [34, 23, 14, 56, 23, 44, 65];

Create a function that should remove number 56 from an array and return array without it.
 */
var someData = [34, 23, 14, 56, 23, 44, 65];

var newData = someData.splice(3,1);


console.log(someData)

//TASK 7

/* Based on given array:

Create a function that should turn it into following array:

var otherData = [23, 14, 56, 65, 44, 23]; */

var someData = [34, 23, 14, 56, 23, 44, 65];

var newDataArray = someData.shift()

function moveIndex(arr, old_index, new_index) {
  
   if (new_index > arr.length) {
       var j = new_index - arr.length + 1;
       while (j--) {
           arr.push(undefined);
       }
   }
   arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
   return arr; 
   
};
console.log(moveIndex(someData, 3, 5));


//TASK 8

/* Based on given array:

Create a function that should repack array to the new one, where each element should be current one, reduced by value of previous one from initial array.
 */
//var someData = [334, 233, 212, 199, 154, 122];
/* var resultat = someData.map(function(item){
  
      for (let i = 0; i < someData.length; i++) {

          newSomeData[i] = someData[i+1] - someData[i];
      }
      return item
})
console.log(newSomeData) */


var someData = [334, 233, 212, 199, 154, 122];
function repackSomeData(array){
   var newSomeData = [];
   for (let i = 0; i < array.length; i++) {
      if (i === 0) {
         newSomeData.push(array[i]);
      }if (i > 0) {
         newSomeData[i]=array[i]-array[i-1]
      }
      
   }return newSomeData;
}
var someResult = repackSomeData(someData);
console.log(someResult);


//TASK 9

//Based on given array:

/* Create a function that should return new array with all students whose average grade is larger than 8.5. 
In new array, average grade should be formatted to 2 decimals.
 */
var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]
students.forEach(function(item){
   item.avgGrade = item.avgGrade.toFixed(2)
})
var newStudents = students.filter(function(avgGrade){ 
   if (avgGrade > 8.50) {
      newStudents = students
   }
   
   return avgGrade

})


console.log(newStudents)






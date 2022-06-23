// 10.  Write a Javascript program where user passes the location and a function is called which returns a promise, if the location passed is Paris Below is the output expected:
// "Let's take a trip to Paris"
// If the location is other than Paris, show the error message "Invalid Location"
// let fun = (str) =>
//   new Promise(function (resolve, reject) {
//     if (str == "Paris" || str == "paris") resolve("Let's take a trip to Paris");
//     else reject("Invalid Location");
//   });
// let str = prompt("Enter the place to visit");
// fun(str)
//   .then((res) => alert(res))
//   .catch((res) => alert(res));

// 11.  Write a JavaScript program to book a hotel only after booking a flight.
// [Hint: To achieve this, the promise returned from the bookHotel function is resolved only after resolving the promise from bookFlight function.
// If the promise gets rejected from bookflight then it won't execute the second function.]

// let flight=(str)=>new Promise((resolve, reject)=>{
//     if(str=='book-flight' || str=='bookflight')
//     resolve("flight booked")
//     else
//     reject("flight blocked")
// })
// let hotel=(str)=>new Promise((resolve, reject)=>{
//     if(str=='book-hotel' || str=='hotel')
//     resolve("hotel booked")
//     else
//     reject("hotel blocked")
// })
// let str1=prompt("\nEnter the book-flight if u want ")
// flight(str1).then((val)=>{alert(val);
// let str2=prompt("\nEnter the book-hotel if u want ");hotel(str2).then((val)=>alert(val))}).catch((val)=>alert(val))

// let n = prompt("Enter the number");
// let numTest = new Promise(function (resolve, reject) {
//   if (n > 20) resolve("The number greater then 20");
//   else reject("The number is less then 20");
// });
// numTest.then((res) => {
//   console.log(res);
// });

// Implement a JavaScript promise to perform arithmetic operations. 
// Display result for each operation synchronously using await () method. (Give delay in each promise object using settimeout() method).
// var n1=prompt("Enter the number 1")
// var n2=prompt("Enter the number 2");
let pr=(n1,n2)=>new Promise(function(resolve){
    setTimeout(function(){
        resolve("The sum is "+(n1+n2))      
    })
})
let n1=parseInt(prompt("Enter the number 1:"))
let n2=parseInt(prompt("Enter the number 2:"))
pr(n1,n2).then((val)=>{
    console.log(val);
})


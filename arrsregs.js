var myString = "Albert Einstein was born in Ulm,on 14/03/1879"; //Could be any String
var myRegexp = /\d{2}[-.\/]\d{2}(?:[-.\/]\d{2}(\d{2})?)?/g; //Check pattern only
var validDate =
  /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])?|(?:(?:16|[2468][048]|[3579][26])00)?)))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))(\4)?(?:(?:1[6-9]|[2-9]\d)?\d{2})?$/g; //Check the validity of the date
myString = myRegexp.exec(myString);
myString = validDate.exec(myString[0]);
console.log(myString[0]);

function valid_email(str) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(str)) {
    console.log("Valid email address!");
  } else {
    console.log("You have entered an invalid email address!");
  }
}

valid_email("me-info@example.com");

let obtainstrings = (arrstrings, n) => {
  let newstrings = arrstrings.toString().replaceAll(",", "");
  let substrings = newstrings.substr(0, n);
  return substrings;
};

let palindrome = (string) => {
  let reversestring = string.split("").reverse().join("");
  if (string === reversestring) return true;
  else return false;
};

let even = (arr) => {
  let evensum = 0;
  for (let i of arr) {
    if (i % 2 == 0) evensum += i;
    else continue;
  }
  return evensum;
};

let average = (arr) => {
  let avg = 0;
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  avg = sum / arr.length;
  return avg;
};

let string = "naman";
let arrstrings = ["hello", "hi", "how are you?"];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = parseInt(prompt("Enter the length of the string:"));
console.log(average(arr), even(arr), palindrome(string));

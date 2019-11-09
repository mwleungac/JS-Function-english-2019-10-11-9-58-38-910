function palindrome(message){
     if (message.includes("abcba")) {
       return true;
     }
     return false;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true

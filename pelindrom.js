let str="abcba";
let blnk ="";
for(let i=str.length-1;i>=0;i--){
    blnk += str[i];
}
if(str == blnk){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}
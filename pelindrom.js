let str="abcba";
let blnk ="";
for(let i=0;i<str.length;i++){
    blnk+=str[i];
}
if(str==blnk){
    console.log("palindrom");
}else{
    console.log("not palindrom")
}
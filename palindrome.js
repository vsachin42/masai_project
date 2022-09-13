//Check palindrome or not!

let str=naman;
let bag="";

for(let i=str.length-1; i>=0; i--){
bag=bag+str[i];
}
if(bag===str){
    console.log("yes");
}
else{
    console.log("No");
}
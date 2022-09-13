// Check prime number or not!

let num=13;
let prime=true;


if (num==2){
    console.log("prime no");
} else {
for (let i=2; i<num; i++){
    if (num%i===0){
        prime=false;
    }
}
}

if (prime===true){
    console.log("Prime no");
}
else{
console.log("Not prime");
}
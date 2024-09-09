/*console.log("Hello World..!");
//alert("this is the alert message.");
//confirm("Do you want to proceed further.");
//prompt("Enter your name.");*/
/*
var a=1.5;
var b="a"
var c=true;
var d;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));




let e;
e=null;
console.log(e);
*/
/*
var a="karthik";
console.log(a.charAt(1));
console.log(a.concat(" sai"));
console.log(a.length);
console.log(a.indexOf("ka"));
console.log(a.lastIndexOf("k"));

a=1;
a=0;

if(a==1){
    console.log("if");
}
else if(a==2){
    console.log("else if");
}
else if(a==3){
    console.log("else if");
}
else{
    console.log("else");
}

for(let i=0;i<5;i++){
    console.log(i)
}
let x=0;
while(x<5){
    console.log(x);
    x++;
}
x=0
do{
    console.log("hello doing re..");
    console.log(x);
    x++;
}
while(x<5)
   
*/

let a= [1,2,3,4,5,"hey",7,8,true];
let b= new Array('a','b','c',1,2);
console.log(a[0]);
b.push("Sushanth");
b.unshift("Karthik")
console.log(b);
b.pop();
b.shift();
console.log(b);
console.log(b.indexOf(3));
console.log(b.includes(3));
console.log(a.concat(b));
console.log(a.slice(-2));
/*
for(let i of b){
console.log(i);
}

for(let i in a){
    console.log(a[i]);
    }*/

    let a1=[1,2,3];
    let b1=[...a1,...b,...a];// spread operetor
    b1[0]=31;
    console.log(a1);
    console.log(b1);

    function apple(x){
        console.log("hey hello..."+x);
    }

    apple(12);
let t=60
let divele=document.createElement("h1");
let timer1=setInterval(function(){
    if(t==50)
        clearInterval(timer1);
    let root=document.getElementById("test");
    divele.textContent=t;
    root.appendChild(divele);
    console.log(t);
    return t--;
},1000);
console.log(t);


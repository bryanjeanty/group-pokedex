let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let name1 = document.querySelector("#trainer1");
let name2 = document.querySelector("#trainer2");
 
btn1.addEventListener("click",(event)=>{
    event.preventDefault();
    name1.innerHTML = input1.value;
    let sect1 = document.querySelector('#sect-1');
    sect1.scrollIntoView(true);
})

btn2.addEventListener("click",(event)=>{
    event.preventDefault();
    name2.innerHTML = input2.value;
    let sect2 = document.querySelector("#sect-2");
    sect2.scrollIntoView(true);
})

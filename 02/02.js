const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circleArr = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const minNum = 0 , maxNUM = circleArr.length-1;
console.log(minNum,maxNUM);
let activecount = 0;
prev.addEventListener('click',()=>{
    
});
next.addEventListener('click',()=>{
    if(next.classList.contains("disable")) return;
    
})
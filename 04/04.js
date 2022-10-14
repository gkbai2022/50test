const container = document.getElementById("container");
const words = document.getElementById("words");
const btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    container.classList.toggle("active");
    words.focus();
})
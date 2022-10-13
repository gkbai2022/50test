const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const pagemain = document.getElementsByClassName("pagemain")[0];
openBtn.addEventListener('click',()=>{
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    pagemain.classList.add("trans");
})
closeBtn.addEventListener('click',()=>{
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
    pagemain.classList.remove("trans");

})
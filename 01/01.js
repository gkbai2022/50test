// let active = document.getElementById("active");
// active.onclick=function(){
//     active.classList.add("active")
// }

const panelItems = document.querySelectorAll(".container > .panel");
panelItems.forEach(item => {
    item.addEventListener('click',() => {
        panelItems.forEach(el=>{
            el.classList.remove("active");
        })
        item.classList.add('active');
    });
});

// const panelItems = document.querySelectorAll(".container > .panel");
// panelItems.forEach(item => {
//     item.addEventListener('click',() => {
//         [].filter.call(item.parentElement.children,el => el !== item).forEach(el => el.classList.remove('active'));
//         item.classList.add('active')
//     });
// });
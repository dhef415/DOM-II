// Your code goes here

//mouseover
const mouse = document.querySelector('header','.')
mouse.addEventListener('mouseover', (e) => {
    e.target.style.color = 'orange';
    
})
//mouseleave
mouse.addEventListener('mouseout', (e) => {
    e.target.style.color = 'yellow';
    
})
//contextmenu
const mClick = document.querySelector('.intro')
mClick.addEventListener('contextmenu',(e) => {
    e.target.style.color = 'red';
})
//keydown
const txtColor = document.querySelector('body')
txtColor.addEventListener('keydown',(e) => {
    if(e.key=== 'w'){
        e.target.style.color = 'red';
    }
})
//keyup
txtColor.addEventListener('keyup',(e) => {
    if(e.key==='w'){
        e.target.style.color = 'purple';
    }
})
//keypress
txtColor.addEventListener('keypress',(e) => {
    e.target.style.color = 'white';
})
//mousedown
const conDes = document.querySelector('.content-destination')
conDes.addEventListener('mousedown',(e) => {
    e.target.style.color = 'green';
})

// 7. dblclick
// 8. mousedown
// 9. mouseup
// 10. contextmenu
const addtodo = document.getElementById('todo');
const readinput = document.getElementById('myform').value;
let listitems = document.getElementsByClassName('item');
console.log(listitems);




const todoclick = addtodo.addEventListener('click', () => {
    const readinput = document.getElementById('myform').value
    creatDiv(readinput);
});

function creatDiv(innerText){
    let newTodo = document.createElement("div");                 
    newTodo.classList.add('item', 'd-flex', 'justify-content-center');

    let newSpan = document.createElement('span');
    newSpan.classList.add('trashcan', 'd-flex', 'align-items-end');

    let textnode = document.createTextNode(innerText);         
    newTodo.appendChild(textnode);                     
    document.getElementById('mylist').appendChild(newTodo);
    console.log(newTodo.innerHTML);

    

    

}

let newSpan = document.createElement('span');
newSpan.classList.add('trashcan', 'd-flex', 'align-items-end');















// const addtodo = document.getElementById('todo');
// let todoinput = document.getElementById('myform').value;
// let allitems = document.getElementById('mylist');
// console.log(allitems);
// // allitems.forEach( item => {
// //     console.log(item);
// // });

// const test = addtodo.addEventListener('click', () => {
//     let formvalue = document.getElementById('myform').value;
//     const tododiv = document.createElement('.item');
//     tododiv.textContent = formvalue;
    
// });

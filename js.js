let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('button');

button.addEventListener('click', whatIsBiggest);

function whatIsBiggest(){
    let result = Math.max(inp1.value, inp2.value);
    alert('Максимальное число: ' + result );

}
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('button');

button.addEventListener('click', whatIsBiggest);

function whatIsBiggest(){
    if(inp1.value > inp2.value){
        alert('Максимальное значение: ' + inp1.value);
    }
    else if(inp1.value < inp2.value){
        alert('Максимальное значение: ' + inp2.value);
    }
    else if(inp1.value === inp2.value){
        alert('Числа равны');
    }
}
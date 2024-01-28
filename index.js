console.log(1);
const button = document.querySelector('button');//говорим, что есть кнопка на странице
const output = document.querySelector('.output');//говорим, что есть место куда мы можем вывести текст, это класс output
button.addEventListener('click', function () {  // Событие, если оно произойдет при нажатии то выполни инструкцию
 output.innerHTML = 'Мама, я тебя люблю';   
});

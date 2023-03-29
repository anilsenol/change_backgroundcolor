const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['blue','red','yellow','green','orange','violet','pink','black'];

body.style.backgroundColor = 'white';
    button.addEventListener('click',function(){
        const color = parseInt(Math.random()*colors.length);
        body.style.backgroundColor=colors[color];

    })

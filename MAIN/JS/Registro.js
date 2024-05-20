var open2 = document.getElementById('open2');
var modal_container = document.getElementById('modal_container');
var close = document.getElementById('close');

open2.addEventListener ('click', () =>{modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

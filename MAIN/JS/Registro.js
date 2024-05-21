var open2 = document.getElementById('open2');
var modal_container2 = document.getElementById('modal_container2');
var close2 = document.getElementById('close2');

open2.addEventListener ('click', () =>{modal_container2.classList.add('show2');
});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show2');
});


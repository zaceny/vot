const yes_button = document.querySelector('#yes_button');
const no_button = document.querySelector('#no_button');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');

function muve_no_button() {
    var x = Math.random() * (window.innerWidth - no_button.offsetWidth - 100);
    var y = Math.random() * (window.innerHeight - no_button.offsetHeight - 100);

    no_button.style.position = 'absolute'
    no_button.style.left = `${x}px`
    no_button.style.top = `${y}px`
}

yes_button.addEventListener('click', () => {
    s1.classList.add("hide");
    s2.classList.remove("hide");
});

no_button.addEventListener('click', muve_no_button)
no_button.addEventListener('mouseenter', muve_no_button)
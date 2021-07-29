//Variables
const cards = document.querySelectorAll('.panel');
let active = document.querySelector('.active');

eventListeners();
//Listeners
function eventListeners() {
    document.addEventListener('DOMContentLoaded', startApp);

}

//Functions
function startApp() {
    cards.forEach( card=> {
        card.addEventListener('click', cardActive);
    });
};

function cardActive(e) {
    if(!e.target.classList.contains('active')) {
        active.classList.remove('active');
        e.target.classList.add('active');
        active = document.querySelector('.active');
    } 
}
const car = document.querySelector('img');

const message = evt => {
    alert('You know you want to!');
};

car.addEventListener('click', message);
const counterValue = document.querySelector('.countValue');
const cartCounter = document.querySelector('.cart-counter');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const addToCartButton = document.querySelector('.add-to-cart-button');

let count = 0;

function updateDisplay() {
    counterValue.textContent = count;
}

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay()
});

decrementButton.addEventListener('click',()=>{if(count)
{
    count--;
    updateDisplay()
}
})

addToCartButton.addEventListener('click', () => {
    cartCounter.textContent = count;
    count = 0;
  updateDisplay()
});
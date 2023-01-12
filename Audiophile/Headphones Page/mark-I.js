/* Add to cart functionality */

const cartX = document.querySelector('[data-x-add]');
const cartBtn = document.querySelector('.fa-cart-shopping');
const wholeCart = document.querySelector('.overlay-cart');
const totalPrice = document.querySelector('[data-price-total]');


cartX.addEventListener('click', () => {
   wholeCart.style.display = "none";
})

cartBtn.addEventListener('click', () => {
    wholeCart.style.display = "flex";
    if (localStorage.getItem('checker1') == 'true') {
        const sum = JSON.parse(localStorage.getItem('total'));
        const reduce = sum.reduce((total, value) => {
            return total += value;
        });
        localStorage.setItem('total', reduce.toLocaleString());
        totalPrice.innerHTML = `₱${localStorage.getItem('total')}`;

    } 
})

window.addEventListener('click', (e) => {
   if (e.target == wholeCart) {
    wholeCart.style.display = "none";
   }
})

/* Subtraction and addition buttons */
const minusBtn = document.querySelector('[data-subs]');
const dataQuan = document.querySelector('[data-quantity]');
const plusBtn = document.querySelector('[data-adds]');
const timesNum = document.querySelector('[data-times-product]');

let count = 1;

plusBtn.addEventListener('click', () => {
    count++;
    dataQuan.innerHTML = count;
})

minusBtn.addEventListener('click', () => {
    count--;
    if (count <= 0) {
      count = 1;
    }
    dataQuan.innerHTML = count
})

const sumArray = []
/* Delete button */
const delButton = document.querySelector('[data-delete]');
 function myDel(product, current) {
    /* Calculations in subtracting the price */
    const total = Number(timesNum.innerHTML.replace(/x/gi, '')) * Number(current);
    const totalPrice = document.querySelector('[data-price-total]');
    let finalPrice = Number(localStorage.getItem('total').replace(/,/g, '')) - total;
    if (finalPrice <= 0) {
      finalPrice = 0.00;
    }

    const index = sumArray.indexOf(total);
    sumArray[index] = 0;
    console.log(sumArray)
    localStorage.setItem('total', finalPrice.toFixed(2));
    totalPrice.innerHTML = localStorage.getItem('total');
    product.style.display = "none";
    localStorage.setItem('timesNum1', '');
    localStorage.setItem('checker1', false);
    timesNum.innerHTML = `x${localStorage.getItem('timesNum1')}`;
}
delButton.addEventListener('click', () => {
    
    myDel(productSection1, currentPrice);
    /* Cout on cart */
    cartNum1--;
    if (cartNum1 <= 0) {
      cartNum1 = "";
    }
    localStorage.setItem('cartNum1', cartNum1);
    cartCount.innerHTML = localStorage.getItem('cartNum1');
})

/* To Rememeber the data */
const productSection1 = document.querySelector('.img-section1');
const currentPrice = document.querySelector('[data-price]').innerHTML.replace(/,/g, '');
const cartCount = document.querySelector('[data-count]');
let cartNum1 = 0;

function myReminder(product, total, times) {   
    product.style.display = "flex";
    total.innerHTML = `₱${localStorage.getItem('total')}`;
    times.innerHTML = `x${localStorage.getItem('timesNum1')}`;   
}

if (localStorage.getItem('checker1') == 'true') {
    myReminder(productSection1, totalPrice, timesNum);
    cartNum1 = Number(localStorage.getItem('cartNum1'));
    cartCount.innerHTML = localStorage.getItem('cartNum1'); 
}
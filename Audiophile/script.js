/* Menu functionality */
const menuBtn = document.querySelector('[data-menu]');
const navCon = document.querySelector('[data-visibility]');
const xBtn = document.querySelector('.fa-x');

menuBtn.addEventListener('click', () => {
    navCon.setAttribute('data-visibility', 'true');
    xBtn.style.display = "block";
})

xBtn.addEventListener('click', () => {
    navCon.setAttribute('data-visibility', 'false');
})

/* Cart Modal */

const cartX = document.querySelector('[data-x-add]');
const cartBtn = document.querySelector('.fa-cart-shopping');
const wholeCart = document.querySelector('.overlay-cart');


cartX.addEventListener('click', () => {
   wholeCart.style.display = "none";
})

cartBtn.addEventListener('click', () => {
    wholeCart.style.display = "flex";
})

window.addEventListener('click', (e) => {
   if (e.target == wholeCart) {
    wholeCart.style.display = "none";
   }
})

/* Variables required in every product */
const product1 = document.querySelector('.img-section1');
const product2 = document.querySelector('.img-section2');
const product3 = document.querySelector('.img-section3');
const speakerPro1 = document.querySelector('.img-sectionSpeaker1');
const speakerPro2 = document.querySelector('.img-sectionSpeaker2');
const earphonePro1 = document.querySelector('.img-sectionEarphone1');
const timesNumPro1 = document.querySelector('[data-times-product1]');
const timesNumPro2 = document.querySelector('[data-times-product2]');
const timesNumPro3 = document.querySelector('[data-times-product3]');
const speaker1TimesNum = document.querySelector('[data-times-productS1]');
const speaker2TimesNum = document.querySelector('[data-times-productS2');
const earphone1TimesNum = document.querySelector('[data-times-productE1]');

/* To remember the elements */
function myChecker(checker, product, times, timesEl) {
    if (localStorage.getItem(checker) === 'true') {
      product.style.display = "flex";
      timesEl.innerHTML = `x${localStorage.getItem(times)}`;
    }
  }
  myChecker('checker1', product1, 'timesPro1', timesNumPro1);
  myChecker('checker2', product2, 'timesPro2', timesNumPro2);
  myChecker('checker3', product3, 'timesPro3', timesNumPro3);
  myChecker('checkerS1', speakerPro1, 'timesProS1', speaker1TimesNum);
  myChecker('checkerS2', speakerPro2, 'timesProS2', speaker2TimesNum);
  myChecker('checkerE1', earphonePro1, 'timesProE1', earphone1TimesNum);


/* Delete button in every product */

let arr = [];
if (!!localStorage.getItem('total')) {
   arr = JSON.parse(localStorage.getItem('total')); 
}

/* Required Variables */
const priceProduct1 = document.querySelector('[data-product-price1]');
const priceProduct2 = document.querySelector('[data-product-price2]');
const priceProduct3 = document.querySelector('[data-product-price3]');
const speakerPricePro1 = document.querySelector('[data-product-priceS1]');
const speakerPricePro2 = document.querySelector('[data-product-priceS2]');
const earphonePricePro1 = document.querySelector('[data-product-priceE1]');
const dataTimes1 = document.querySelector('[data-times-product1]');
const dataTimes2 = document.querySelector('[data-times-product2]');
const dataTimes3 = document.querySelector('[data-times-product3]');
const speakerDataTimes1 = document.querySelector('[data-times-productS1]');
const speakerDataTimes2 = document.querySelector('[data-times-productS2]');
const earphoneDataTimes1 = document.querySelector('[data-times-productE1]');
const totalPrice = document.querySelector('[data-price-total]');

const cartNum = document.querySelector('[data-count]');
let cartCount = 0;
if (Number(localStorage.getItem('cartCount')) > 0) {
  cartCount = Number(localStorage.getItem('cartCount'));
  cartNum.innerHTML = cartCount;
}


/* Function that we're gonna use to add events in each product */
function myDelete(product ,productPrice, dataTimes, checker, clicked) {
  console.log(localStorage.getItem(clicked));
  if (!!localStorage.getItem(clicked)) {
    localStorage.removeItem(clicked);
  }
  localStorage.setItem(checker, false);
  product.style.display = "none";
  const finalPrice = Number(productPrice.innerHTML.replace(/₱|,/gi, '')) * Number(dataTimes.innerHTML.replace(/x/gi, ''));
  const index = arr.indexOf(Number(finalPrice.toFixed(2)));
 arr[index] = 0;
  const arrSum = arr.reduce((total, value) => total + value);
  totalPrice.innerHTML = `₱${arrSum.toLocaleString()}`;
  localStorage.setItem('total', JSON.stringify(arr));
  console.log(arr);

  /* decrement the cart count */
  cartCount--;
  if (cartCount <= 0) {
    cartNum.innerHTML = "";
    localStorage.setItem('cartCount', 0);
    /* Visibility of checkout button */
    checkBtnVisibility();
    return;
  }
  localStorage.setItem('cartCount', Number(cartCount));
  cartNum.innerHTML = JSON.parse(localStorage.getItem('cartCount'));

}

/* Delete buttons */
const deleteBtn1 = document.querySelector('[data-delete1]');
const deleteBtn2 = document.querySelector('[data-delete2]');
const deleteBtn3 = document.querySelector('[data-delete3]');
const speakerDelBtn1 = document.querySelector('[data-deleteS1]');
const speakerDelBtn2 = document.querySelector('[data-deleteS2]');
const earphoneDelBtn1 = document.querySelector('[data-deleteE1]');

deleteBtn1.addEventListener('click', () => {
  myDelete(product1, priceProduct1, dataTimes1, 'checker1', 'clicked1');
})

deleteBtn2.addEventListener('click', () => {
  myDelete(product2, priceProduct2, dataTimes2, 'checker2', 'clicked2');
})

deleteBtn3.addEventListener('click', () => {
  myDelete(product3, priceProduct3, dataTimes3, 'checker3', 'clicked3');
})

speakerDelBtn1.addEventListener('click', () => {
  myDelete(speakerPro1, speakerPricePro1, speakerDataTimes1, 'checkerS1', 'clickedS1');
})

speakerDelBtn2.addEventListener('click', () => {
  myDelete(speakerPro2, speakerPricePro2, speakerDataTimes2, 'checkerS2', 'clickedS2');
})

earphoneDelBtn1.addEventListener('click', () => {
  myDelete(earphonePro1, earphonePricePro1, earphoneDataTimes1, 'checkerE1', 'clickedE1');
})


cartBtn.addEventListener('click', () => {
    wholeCart.style.display = "flex";
    if (arr.length <= 0) {
      return;
    } else {
        const arrSum = arr.reduce((total, value) => total + value);
        totalPrice.innerHTML = `₱${arrSum.toLocaleString()}`;
    } 
})

function checkBtnVisibility() {
  /* Checkout button visibility */
const checkoutBtn = document.querySelector('.checkout-btn');
if (localStorage.getItem('cartCount') == '0' || !localStorage.getItem('cartCount')) {
  checkoutBtn.style.display = "none";
}
}
checkBtnVisibility();
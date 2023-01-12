/* Variables */
const menuBtn = document.querySelector('[data-menu]');
const xBtn = document.querySelector('[data-xBtn]');
const list = document.querySelector('[data-visibility]');

menuBtn.addEventListener('click', () => {
    list.setAttribute('data-visibility', 'true');
    menuBtn.style.display = "none";
    xBtn.style.display = "block";
})

xBtn.addEventListener('click', () => {
    list.setAttribute('data-visibility', 'false');
    menuBtn.style.display = "block";
    xBtn.style.display = "none";
})

/* Dropdown effects */

const numbers = document.querySelectorAll('.title-form');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        const title = number.getElementsByClassName('number-title');
        for (let i = 0; i < title.length; i++) {
            const spl = document.querySelectorAll('.number-title');
            for (let j = 0; j < spl.length; j++) {
              spl[j].classList.remove('active');
            }
            title[i].classList.add('active');
        }

        const text = number.getElementsByClassName('text-title');
        for (let i = 0; i < title.length; i++) {
            const spl = document.querySelectorAll('.text-title');
            for (let j = 0; j < spl.length; j++) {
              spl[j].classList.remove('active');
            }
            text[i].classList.add('active');
        }  
    })
})

/* Creatig a plan */
const card = document.querySelectorAll('.dropTitle');
const createButton = document.querySelector('.summary-container .create-btn');
const modalCon = document.querySelector('.checkout-container');
const modalText = document.querySelector('[data-checkout-text]');


card.forEach(crd => {
    crd.addEventListener('click', () => {  

        const title = crd.querySelector('[data-question]');    
        title.classList.toggle('active-dropTitle');
        
        const arrow = crd.querySelector('[data-arrow]');
        arrow.classList.toggle('active-dropArrow');
        
        const boxes = crd.nextElementSibling;
        boxes.classList.toggle('active-choices');

        const box = boxes.querySelectorAll('.card');
        box.forEach(bx => {
          bx.addEventListener('click', () => {
           for (let i = 0; i < box.length; i++) {
            box[i].classList.remove('active-card');
           }
          bx.classList.add('active-card');

          const cardTitle = bx.querySelector('[data-title]');
          const summaryCon = document.querySelector('.order-summary');
          const paraEl = summaryCon.getElementsByTagName('p')[0];
          const preSpan = summaryCon.querySelector('[data-prespan]');
          const beanSpan = summaryCon.querySelector('[data-beanspan]');
          const quantitySpan = summaryCon.querySelector('[data-quantity]');
          const grindSpan = summaryCon.querySelector('[data-grind]');
          const delSpan = summaryCon.querySelector('[data-deliveries]');

        
          if (title.hasAttribute('data-pre')) {
            preSpan.innerHTML = cardTitle.innerHTML;
          } 

          if (title.hasAttribute('data-bean')) {
            beanSpan.innerHTML = cardTitle.innerHTML;
          }

          if (title.hasAttribute('data-quantity')) {
            quantitySpan.innerHTML = cardTitle.innerHTML;
          }

          if (title.hasAttribute('data-grind')) {
            grindSpan.innerHTML = cardTitle.innerHTML;
          }

          if (title.hasAttribute('data-deliveries')) {
            delSpan.innerHTML = cardTitle.innerHTML;
          }
          

          const pSpan = preSpan.innerHTML;
          const bSpan = beanSpan.innerHTML;
          const qSpan = quantitySpan.innerHTML;
          const gSpan = grindSpan.innerHTML;
          const dSpan = delSpan.innerHTML;

          if (pSpan != '_____' && bSpan != '_____' && gSpan != '_____' && dSpan != '_____' && qSpan != '_____') {
            createButton.classList.add('active-createBtn');
            createButton.addEventListener('click', () => {
              modalCon.removeAttribute('data-off');
              modalCon.setAttribute('data-on', '');
            })
            const preSpanCheck = modalText.querySelector('[data-prespan]');
            const beanSpanCheck = modalText.querySelector('[data-beanspan]');
            const quantitySpanCheck = modalText.querySelector('[data-quantity]');
            const grindSpanCheck = modalText.querySelector('[data-grind]');
            const delSpanCheck = modalText.querySelector('[data-deliveries]');

            preSpanCheck.innerHTML = pSpan;
            beanSpanCheck.innerHTML = bSpan;
            quantitySpanCheck.innerHTML = qSpan;
            grindSpanCheck.innerHTML = gSpan;
            delSpanCheck.innerHTML = dSpan;
          } 
          
    })
})
    })
})

const priceCon = document.querySelector('.dropdown .price-card');
const priceCard = priceCon.querySelectorAll('.card');

priceCard.forEach(crd => {
  crd.addEventListener('click', () => {
    const amountQuantity = document.querySelector('[data-amount]');
    const valueAmount = crd.querySelector('[data-price]');
    const amountText = valueAmount.innerHTML;

    let str = "";
            if (amountText == '$7.20') {
              str = `${amountText} / week`;
            }

            if (amountText == '$9.60') {
              str = `${amountText} / 2 weeks`;
            }

            if (amountText == '$12.00') {
              str = `${amountText} / month`;
            }

            amountQuantity.innerHTML = str;
  })
})


window.addEventListener('click', e => {
  if (e.target == modalCon) {
    modalCon.removeAttribute('data-on');
    modalCon.setAttribute('data-off', '');
  }
})

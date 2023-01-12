window.addEventListener('load', () => {

    /* Required Variables */
    
    /* Headphones */
    const headphone1 = document.querySelector('[data-head1]');
    const headphone2 = document.querySelector('[data-head2]');
    const headphone3 = document.querySelector('[data-head3]');

    /* Speakers */
    const speaker1 = document.querySelector('[data-speaker1]');
    const speaker2 = document.querySelector('[data-speaker2]');

    /* Earphones */
    const earphone1 = document.querySelector('[data-earphone1]');
    

    function remember(checker, product, times) {
      if (localStorage.getItem(checker) === 'true') {
        product.classList.add('active');
        product.querySelector('span').innerHTML = `x${localStorage.getItem(times)}`;
      } else {
        return;
      }
    }

    /* Computations in total price*/
    const total = document.querySelector('[data-total]');
    const arr = JSON.parse(localStorage.getItem('total'));
    total.innerHTML = `₱${arr.reduce((total, value) => total + value).toLocaleString()}`;
    const grandTotal = document.querySelector('[data-grand]');

    if (total.innerHTML !== '₱0') {
      const number = arr.reduce((total, value) => total + value);
      grandTotal.innerHTML = `₱${(number + 380 + 650).toLocaleString()}`;
    }

    /* For Headphones */
    remember('checker1', headphone1, 'timesPro1');
    remember('checker2', headphone2, 'timesPro2');
    remember('checker3', headphone3, 'timesPro3');

    /* For Speakers */
    remember('checkerS1', speaker1, 'timesProS1');
    remember('checkerS2', speaker2, 'timesProS2');

    /* For Earphones */
    remember('checkerE1', earphone1, 'timesProE1');

    /* Payment Button */
    const payBtn = document.querySelector('.payment-btn');

    /* Pass variables */
    let pass;
    const objError = {};
  
    payBtn.addEventListener('click', () => {
     
      /* Input elements */
      const name = document.querySelector('[data-name]');
      const phoneNumber = document.querySelector('[data-number]');
      const email = document.querySelector('[data-email]');
      const address = document.querySelector('[data-address]');
      const zip = document.querySelector('[data-zip]');
      const country = document.querySelector('[data-country]');
      const city = document.querySelector('[data-city]');

      function validation(inputElement, name) {
        const msg = inputElement.previousElementSibling.querySelector('i');
        if (inputElement.value === "") {
          msg.style.display = "block";

          /* Adding false on objError to validate the empty elements */
         objError[name] = false;
         return;
        } else {
          msg.style.display = "none";

          /* Adding true on objError to validate the empty elements */
          objError[name] = true;
        }
      }

      function additionalValidation(element, name) {
        const msg = element.previousElementSibling.querySelector('i');


        try {
          if (element.value === "") throw `${name} cannot be empty`;
          switch(name) {
            /* For email inputs */
            case 'Email':
              if (!(/@gmail.com$/.test(element.value)) && isNaN(element.value)) throw `Invalid Email`;
            break;

            /* For Zip code */
            case 'ZIP':
              if (isNaN(element.value)) throw "Zip code must be a number";
            break;

            case 'Phone Number':
              if (isNaN(element.value)) throw "Invalid phone number";
          }
        } 
        
        catch(err) {
         msg.innerHTML = err;
         msg.style.display = "block";
         objError[name] = false;
         return;  
        }

        msg.style.display = "none";
        objError[name] = true;
      }
      

      /* Calling function to validate the input */
      validation(name, 'name');
      validation(country, 'country');
      validation(city, 'city');
      validation(address, 'address');

      /* Additional validation */
      additionalValidation(email, 'Email');
      additionalValidation(zip, 'ZIP');
      additionalValidation(phoneNumber, 'Phone Number')
      
      /* Required variables to validate the payment methods */
      const methodMsg = document.querySelector('.title-msg').querySelector('i');
      const eInput = document.querySelector('[data-eInput]');
      const codInput = document.querySelector('[data-cod-input]');

      if (!pass) {
        methodMsg.style.display = "block";
      } else {
        methodMsg.style.display = "none";
        switch(pass) {
          case 'e-money':
            objError.cod = false;
            if (eInput.value == "" && codInput.value == "") {
              methodMsg.innerHTML = "Please enter your number or PIN";
              methodMsg.style.display = "block";
              objError.eMoney = false;
            } else {
              objError.eMoney = true;
            }
            break;

            case 'cod':
              objError.cod = true;
              break;
        }
      }

      /* Validations for all input elements */
    const modalWrapper = document.querySelector('.payment-modal-container');
    const modalCard = document.querySelector('.modal-card-payment');
    
    if (
      objError.address && 
      objError.name && 
      objError["Phone Number"] && 
      objError.country && 
      objError.city &&
      objError.Email &&
      objError.ZIP &&
      (objError.eMoney || objError.cod)) {
      modalWrapper.style.display = "flex";
      modalCard.style.display = "flex";
      }

    /* Passing the first product from summary to checkout modal */
    const allProducts = document.querySelectorAll('.product > section');
    const container = document.querySelector('[data-products]');
    const divEl = container.querySelector('div');
    const numItems = divEl.querySelector('span');
    const finalTotal = document.querySelector('[data-grandTotal]');
    

  
    const arrPro = [];
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].className == 'active') {
        const clone = allProducts[i].cloneNode(true);
        arrPro.push(clone);
      }
    }
    
    if (!!numItems &&
        !!container &&
        !!finalTotal) {
          numItems.innerHTML = arrPro.length - 1;
          container.insertBefore(arrPro[0], divEl);;
          finalTotal.innerHTML = grandTotal.innerHTML;
    }
    

    })

    /* Payments Details */

    /* Label elements variables */
    const eMoney = document.querySelector('[data-e]');
    const cod = document.querySelector('[data-cod]');

    /* Payments methods */
    const eMoneyCon = document.querySelector('.results-container');
    const codContainer = document.querySelector('.cod-container');

    function listener(element, msg) {
      element.addEventListener('click', () => {
        pass = msg;
        switch(element.querySelector('input').value) {
          case 'e-money':
            eMoneyCon.style.display = "flex";
            codContainer.style.display = "none";
          break;

          case 'cod': 
            codContainer.style.display = "flex";
            eMoneyCon.style.display = "none";
            break;
        }
      })
    }

    listener(eMoney, 'e-money');
    listener(cod, 'cod');

    /* Back to home button functionality */

    const backToHome = document.querySelector('[data-back-home]');

    backToHome.addEventListener('click', () => {
      localStorage.clear();
    })

 });


console.log()
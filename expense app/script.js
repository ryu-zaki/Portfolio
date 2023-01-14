window.addEventListener('load', () => {
    //variables for inputs and button

    const NAME = document.querySelector('[data-name-value]');
    const DATE = document.querySelector('[data-date-value]');
    const AMOUNT = document.querySelector('[data-amount-value]');
    const ADDBTN = document.querySelector('[data-add-button]');

    

    //adding an event listeners in my Button

    ADDBTN.addEventListener('click', () => {

        

        //getting the values of these elements
    
        const nameValue = NAME.value;
        const dateValue = DATE.value;
        const amountValue = AMOUNT.value;

        //The validation:

       if (nameValue === "" || dateValue === "" || amountValue === "") {
        alert('Please complete the required information.');
        return;
       }

        //creating elements
        
        const tBody = document.getElementById('tbody');
        const tRow = document.createElement('tr');
        const tData1 = document.createElement('td');
        const tData2 = document.createElement('td');
        const tData3 = document.createElement('td');
        const tButton = document.createElement('button');
        tButton.classList.add('btn-cross');
        tButton.innerHTML = "&#10005;";
        tData1.innerHTML = nameValue;
        tData2.innerHTML = dateValue;
        tData3.innerHTML = amountValue
        tData3.appendChild(tButton);
        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tRow.appendChild(tData3);
        tBody.appendChild(tRow);
        
        //functionality of table Button

        tButton.addEventListener('click', () => {
            tBody.removeChild(tRow);
        })

        NAME.value = "";
        DATE.value = "";
        AMOUNT.value = "";

    })
    
})
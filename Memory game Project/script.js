window.addEventListener('load', () => {
    const data1 = document.querySelector('[data-bg1]');
    const data2 = document.querySelector('[data-bg2]');
    const data3 = document.querySelector('[data-bg3]');
    const data4 = document.querySelector('[data-bg4]');
    const data5 = document.querySelector('[data-bg5]');
    const data6 = document.querySelector('[data-bg6]');
    const score = document.getElementById('score');
    const wrong = document.getElementById('wrong');
    
    const soundEffects = new Audio();
    soundEffects.src = "https://notification-sounds.com/soundsfiles/Level-up-sound-effect.mp3";
    
    const sound = new Audio();
    sound.src = "https://notification-sounds.com/soundsfiles/Card-flip-sound-effect.mp3";
    const allcards = document.querySelectorAll('.box');
     allcards.forEach(card => {
    card.addEventListener('click', () => {
      sound.play();
    })
  })

    function myRandom(min, max) {
      return (Math.floor(Math.random() * (max - min)) + min).toString();
    }

    function myCards() {
    data1.style.order = myRandom(1, 6);
    data2.style.order = myRandom(1, 6);
    data3.style.order = myRandom(1, 6);
    data4.style.order = myRandom(1, 6);
    data5.style.order = myRandom(1, 6);
    data6.style.order = myRandom(1, 6);
    }

    myCards();

    let s = 0;
    let w = 0;

    function reset() {
        const allCards = document.querySelectorAll('[data-remove]');
        allCards.forEach(card => {
            card.removeAttribute('data-img1');
            card.removeAttribute('data-img2');
            card.removeAttribute('data-img3');
            card.removeAttribute('data-img4');
            card.removeAttribute('data-img5');
            card.removeAttribute('data-img6');
            
            card.removeAttribute('data-remove');
        })

            data1.addEventListener('click', myFunction1);
            data2.addEventListener('click', myFunction2);
            data3.addEventListener('click', myFunction3);           
            data4.addEventListener('click', myFunction4);
            data5.addEventListener('click', myFunction5);
            data6.addEventListener('click', myFunction6);
    }

    function resetGame() {
       
        const cards = document.querySelectorAll('.box');
       s = 0;
       w = 0;
       score.innerHTML = 0;
       wrong.innerHTML = 0;

        cards.forEach(card => {
            card.removeAttribute('data-img1');
            card.removeAttribute('data-img2');
            card.removeAttribute('data-img3');
            card.removeAttribute('data-img4');
            card.removeAttribute('data-img5');
            card.removeAttribute('data-img6');
        })

            data1.addEventListener('click', myFunction1);
            data2.addEventListener('click', myFunction2);
            data3.addEventListener('click', myFunction3);           
            data4.addEventListener('click', myFunction4);
            data5.addEventListener('click', myFunction5);
            data6.addEventListener('click', myFunction6);

            myCards();
    }

    function finish() {
        soundEffects.play();
        alert("Congratulations!!");

        setTimeout(resetGame, 100);

    }
     
    
    
    function myFunction1() {
        data1.setAttribute('data-img1', 'true');
        data1.setAttribute('data-remove', 'data-remove');
        
        if ((data1.hasAttribute('data-img1') === true) === (data3.hasAttribute('data-img1') === true)) {
            s++;
            score.innerHTML = s;   
            data1.removeEventListener('click', myFunction1);
            data1.removeAttribute('data-remove');
            data3.removeAttribute('data-remove');

            if (s == 3) {
                setTimeout(finish, 550);
            }
        }
        
        else if (((data1.hasAttribute('data-remove') == true) == (data2.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data2.removeEventListener('click', myFunction2);
            setTimeout(reset, 500);
            
        }

        else if (((data1.hasAttribute('data-remove') == true) == (data4.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data4.removeEventListener('click', myFunction4);
            setTimeout(reset, 500);
        }

        else if (((data1.hasAttribute('data-remove') == true) == (data5.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data5.removeEventListener('click', myFunction5);
            setTimeout(reset, 500);
        }

        else if (((data1.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }
 
        else {
            return;
        }
        
    }

    data1.addEventListener('click', myFunction1);
    



    function myFunction2() {
        data2.setAttribute('data-img3', 'true');
        data2.setAttribute('data-remove', 'data-remove');
        
        if ((data2.hasAttribute('data-img3') === true) === (data5.hasAttribute('data-img3') === true)) {
            s++;
            score.innerHTML = s;
            data2.removeEventListener('click', myFunction1);
            data2.removeAttribute('data-remove');
            data5.removeAttribute('data-remove');

            if (s == 3) {
                setTimeout(finish, 550);
            }
        } 

        else if (((data1.hasAttribute('data-remove') == true) == (data2.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data2.removeEventListener('click', myFunction2);
            setTimeout(reset, 500);
        } 

        else if (((data2.hasAttribute('data-remove') == true) == (data3.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data2.removeEventListener('click', myFunction2);
            setTimeout(reset, 500);
        }

        else if (((data2.hasAttribute('data-remove') == true) == (data4.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data2.removeEventListener('click', myFunction2);
            data4.removeEventListener('click', myFunction4);
            setTimeout(reset, 500);
        }

        else if (((data2.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data2.removeEventListener('click', myFunction2);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        else {
            return;
        }
        
    }

    data2.addEventListener('click', myFunction2)

    function myFunction3() {
        data3.setAttribute('data-img1', 'true');
        data3.setAttribute('data-remove', 'data-remove');

        if ((data1.hasAttribute('data-img1') === true) === (data3.hasAttribute('data-img1') === true)) {
            s++;
            score.innerHTML = s;
            data3.removeEventListener('click', myFunction3);
            data1.removeEventListener('click', myFunction1);
            data1.removeAttribute('data-remove');
            data3.removeAttribute('data-remove');

            if (s == 3) {
                setTimeout(finish, 550);
            }
        }

        else if (((data2.hasAttribute('data-remove') == true) == (data3.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data2.removeEventListener('click', myFunction2);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data4.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data4.removeEventListener('click', myFunction4);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data5.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data5.removeEventListener('click', myFunction5);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }
        
        else {
            return;
        }
    }

    data3.addEventListener('click', myFunction3)

    function myFunction4() {
        data4.setAttribute('data-img2', 'true');
        data4.setAttribute('data-remove', 'data-remove');

        if ((data4.hasAttribute('data-img2') === true) === (data6.hasAttribute('data-img2') === true)) {
            s++;
            score.innerHTML = s;
            data4.removeEventListener('click', myFunction4);
            data4.removeAttribute('data-remove');
            data6.removeAttribute('data-remove');

            if (s == 3) {
                setTimeout(finish, 550);
            }
        }

        else if (((data1.hasAttribute('data-remove') == true) == (data4.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data4.removeEventListener('click', myFunction4);
            setTimeout(reset, 500);
        }

        else if (((data2.hasAttribute('data-remove') == true) == (data4.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data2.removeEventListener('click', myFunction2);
            data4.removeEventListener('click', myFunction4);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data4.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data4.removeEventListener('click', myFunction4);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        else if (((data4.hasAttribute('data-remove') == true) == (data5.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data4.removeEventListener('click', myFunction4);
            data5.removeEventListener('click', myFunction5);
            setTimeout(reset, 500);
        }

        else {
            return;
        }

    }

    data4.addEventListener('click', myFunction4)

    function myFunction5() {
        data5.setAttribute('data-img3', 'true');
        data5.setAttribute('data-remove', 'data-remove');

        if ((data2.hasAttribute('data-img3') === true) === (data5.hasAttribute('data-img3') === true)) {
            s++;
            score.innerHTML = s;
            data2.removeEventListener('click', myFunction2);
            data5.removeEventListener('click', myFunction5);
            data2.removeAttribute('data-remove');
            data5.removeAttribute('data-remove');

            if (s == 3) {
                setTimeout(finish, 550);
            }
            
        }

        

        else if (((data1.hasAttribute('data-remove') == true) == (data5.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data5.removeEventListener('click', myFunction5);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data5.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data5.removeEventListener('click', myFunction5);
            setTimeout(reset, 500);
        }

        else if (((data4.hasAttribute('data-remove') == true) == (data5.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data6.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data4.removeEventListener('click', myFunction4);
            data5.removeEventListener('click', myFunction5);
            setTimeout(reset, 500);
        }

        else if (((data5.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data5.removeEventListener('click', myFunction5);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        else {
            return;
        }
        
    }

    data5.addEventListener('click', myFunction5)

    function myFunction6() {
        data6.setAttribute('data-img2', 'true');
        data6.setAttribute('data-remove', 'data-remove');

        if ((data4.hasAttribute('data-img2') === true) === (data6.hasAttribute('data-img2') === true)) {
            s++;
            score.innerHTML = s;
            data4.removeEventListener('click', myFunction4);
            data6.removeEventListener('click', myFunction6);
            data4.removeAttribute('data-remove');
            data6.removeAttribute('data-remove');

            if (s == 3) {
                setTimeout(finish, 550);
            }
        } 

        else if (((data1.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data3.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data1.removeEventListener('click', myFunction1);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        else if (((data2.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data2.removeEventListener('click', myFunction2);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        else if (((data3.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false && data5.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data3.removeEventListener('click', myFunction3);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        else if (((data5.hasAttribute('data-remove') == true) == (data6.hasAttribute('data-remove') == true)) && data1.hasAttribute('data-remove') == false && data2.hasAttribute('data-remove') == false && data3.hasAttribute('data-remove') == false && data4.hasAttribute('data-remove') == false) {
            w++;
            wrong.innerHTML = w;
            data5.removeEventListener('click', myFunction5);
            data6.removeEventListener('click', myFunction6);
            setTimeout(reset, 500);
        }

        

        else {
            return;
        }

    }

    data6.addEventListener('click', myFunction6);

    
})
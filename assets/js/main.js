//assegno a una variabile la row in cui inserirò i numeri
const elementRow = document.getElementById('row_numbers');


let elementColumn ;

//ciclo for per stampare i numeri
for (let i = 1; i <= 100; i++) {

    console.log(i);
    console.log('eccolo');
    
    // elementRow.innerHTML = elementRow.innerHTML + elementColumn;

    //se il numero è multiplo di 3 e 5 comparirà fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
        elementColumn = `
        <div class="col-auto">
            <div class="squared bg_fizzbuzz  fs-5">
            fizzbuzz
            </div>
        </div>
        `;
    }
    //se il numero è multiplo di 3 ma non di 5 comparirà fizz 
    else if (i % 3 === 0 && i % 5 !== 0) {
        elementColumn = `
        <div class="col-auto">
            <div class="squared bg_fizz fs-5">
                fizz
            </div>
        </div>
        `;
    }
    //se il numero è multiplo di 5 ma non di 3 comparirà buzz 
    else if (i % 3 !== 0 && i % 5 === 0) {
        elementColumn = `
        <div class="col-auto">
            <div class="squared bg_buzz fs-5">
            buzz
            </div>
        </div>
        `;
    }
    //se il numero non rispetta le condizioni precedenti stamperà il numero di turno 
    else {
        //console.log(document.querySelector(`.squared-${i}`).classList);
        elementColumn = `
        <div class="col-auto">
            <div class="squared bg_number fs-5">
            ${i}
            </div>
        </div>
        `;
    }

    //aggiungo l'elemento contenitore alla riga
    elementRow.insertAdjacentHTML('beforeend', elementColumn)
}



/* 
//ciclo for per stampare i numeri
for (let i = 1; i <= 100; i++) {
    elementColumn = `
    <div class="col">
        <div class="squared-${i}">
        </div>
    </div>
    `;
    console.log(i);
    console.log('eccolo');
    //aggiungo l'elemento contenitore alla riga
    //elementRow.insertAdjacentElement('beforeend', elementColumn)
    elementRow.innerHTML = elementColumn;

    //se il numero è multiplo di 3 e 5 comparirà fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
        document.querySelector(`.squared-${i}`).classList.add(bg_fizzbuzz);
        document.querySelector(`.squared-${i}`).insertAdjacentElement('beforeend', fizzBuzz);
    }
    //se il numero è multiplo di 3 ma non di 5 comparirà fizz 
    else if (i % 3 === 0 && i % 5 !== 0) {
        document.querySelector(`.squared-${i}`).classList.add(bg_fizz);
        document.querySelector(`.squared-${i}`).insertAdjacentElement('beforeend', fizz);
    }
    //se il numero è multiplo di 5 ma non di 3 comparirà buzz 
    else if (i % 3 !== 0 && i % 5 === 0) {
        document.querySelector(`.squared-${i}`).classList.add(bg_buzz);
        document.querySelector(`.squared-${i}`).insertAdjacentElement('beforeend', buzz);
    }
    //se il numero non rispetta le condizioni precedenti stamperà il numero di turno 
    else {
        //console.log(document.querySelector(`.squared-${i}`).classList);
        document.querySelector(`.squared-${i}`).classList.add('bg_number');
        document.querySelector(`.squared-${i}`).insertAdjacentElement('beforeend', `${i}`);
    }
} */
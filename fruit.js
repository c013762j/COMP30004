const machineForm = document.getElementById("slotForm");

const creditValue = document.getElementById("cvalue");

const winningsValue = document.getElementById("wvalue");

const btnCredit = document.getElementById("credit");



let creditval = 0;

let winningval = 0;


creditValue.innerText = `${creditval}`;
winningsValue.innerText = `${winningval}`;

btnCredit.addEventListener("click", calculatecredit);

function calculatecredit() {

    if (machineForm.checkValidity()) {
        event.preventDefault();

        let creditval = creditval + 1;

        

        

    }

}



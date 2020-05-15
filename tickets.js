// get html interactive elements and put them in a variable

const txtSeats = document.getElementById("seats");

const costShow = document.getElementById(type="shows");



const myForm = document.getElementById("ticketsForm");

const btnCalculate = document.getElementById("calculate");

const txtFirst = document.getElementById("first");

const txtSecond = document.getElementById("second");

const txtThird = document.getElementById("third");

const txtFourth = document.getElementById("fourth");

const txtFifth = document.getElementById("fifth");

// set up event listener for the book button

btnCalculate.addEventListener("click", calculate);

// add calculate function to calculate the output

function calculate() {
    

    if (myForm.checkValidity()) {
        event.preventDefault();

        const seatsno = parseInt(txtSeats.value);

        let showtime = parseFloat(costShow.value);

        let whichshow = costShow.options[costShow.selectedIndex].innerText;

        let overallcost = seatsno * showtime;

        

        txtFirst.innerText = `Number of tickets: ${seatsno} for ${whichshow} at £${showtime} per ticket.`;
        
        txtSecond.innerText = `Total Cost before any Discount: £${overallcost}`;

        if (seatsno <=5) {
            txtThird.innerText = `No Discount is Applicable`;
        }
        if (seatsno >= 6) {
            let discountammount = 0.1 * overallcost;
            txtThird.innerText = `Discount at 10%: £${discountammount}`;
        }
        if (seatsno >= 10) {
            let discountammount = 0.15 * overallcost;
            txtThird.innerText = `Discount at 15%: £${discountammount}`;
        }

        if (seatsno <=5) {
            let finalcost = overallcost;
            txtFifth.innerText = `Final Cost: £${finalcost}`;
        }
        if (seatsno >= 6) {
            let finalcost = overallcost * 0.9;
            txtFifth.innerText = `Final Cost: £${finalcost}`;
        }
        if (seatsno >= 10) {
            let finalcost = overallcost * 0.85;
            txtFifth.innerText = `Final Cost: £${finalcost}`;
        }


    }
}

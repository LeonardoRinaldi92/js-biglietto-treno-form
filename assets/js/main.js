let partenza = '';
let arrivo = '';
let sameCity = 'La città di partenza e quella di arrivo non possono combaciare!'
let tratta;

document.getElementById('partenza').addEventListener("change", (event) => {
    partenza = event.target.value;
});

document.getElementById('arrivo').addEventListener("change", (event) => {
    arrivo = event.target.value;
});

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (partenza === arrivo) {
        alert (sameCity)
    } else {
        if (partenza === 'roma' && arrivo === 'milano' ) {
            tratta = 1000
        }
    }
    console.log(tratta)


})







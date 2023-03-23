
let sameCity = 'La città di partenza e quella di arrivo non possono combaciare!'
let tratta;



// PRENDERE LE RISPOSTE IN DIRETTA SENZA L'USO DEL BUTTON

// document.getElementById('partenza').addEventListener("change", (event) => {
//     partenza = event.target.value;
// });

// document.getElementById('arrivo').addEventListener("change", (event) => {
//     arrivo = event.target.value;
// });

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value
    let nomeMaiuscolo = nome.charAt(0).toUpperCase() +nome.slice(1);
    let cognome = document.getElementById("cognome").value
    let cognomePuntato = (cognome.charAt(0).toUpperCase(0)) + "."
    let partenza = document.getElementById("partenza").value ;
    let arrivo = document.getElementById("arrivo").value ;


    function calcolaprezzo(tratta, sconto) {
        return ((tratta * 0.21) * sconto).toFixed(2)
    }

    if (partenza === arrivo) {
        alert (sameCity)
    } else {
        if (partenza === 'roma' && arrivo === 'milano' ){
            tratta = 579}
        else if (partenza === 'roma' && arrivo === 'torino'){
            tratta = 678}
        else if (partenza === 'roma' && arrivo === 'genova'){
            tratta = 504}
        else if (partenza === 'roma' && arrivo === 'firenze'){
            tratta = 345}
        else if (partenza === 'roma' && arrivo === 'napoli'){
            tratta = 225}
        else if (partenza === 'roma' && arrivo === 'lecce'){
            tratta = 577}
        else if (partenza === 'milano' && arrivo === 'roma' ){
            tratta = 579}
        else if (partenza === 'milano' && arrivo === 'torino'){
            tratta = 125}
        else if (partenza === 'milano' && arrivo === 'genova'){
            tratta = 120}
        else if (partenza === 'milano' && arrivo === 'firenze'){
            tratta = 382}
        else if (partenza === 'milano' && arrivo === 'napoli'){
            tratta = 772}
        else if (partenza === 'milano' && arrivo === 'lecce'){
            tratta = 1031}
        else if (partenza === 'torino' && arrivo === 'milano'){
            tratta = 125}
        else if (partenza === 'torino' && arrivo === 'napoli'){
            tratta = 888}
        else if (partenza === 'torino' && arrivo === 'genova'){
            tratta = 171}
        else if (partenza === 'torino' && arrivo === 'firenze'){
            tratta = 431}
        else if (partenza === 'torino' && arrivo === 'lecce'){
            tratta = 1147}
        else if (partenza === 'torino' && arrivo === 'roma'){
            tratta = 678}
        else if (partenza === 'genova' && arrivo === 'milano'){
            tratta = 220}
        else if (partenza === 'genova' && arrivo === 'napoli'){
            tratta = 702}
        else if (partenza === 'genova' && arrivo === 'torino'){
            tratta = 180}
        else if (partenza === 'genova' && arrivo === 'firenze'){
            tratta = 250}
        else if (partenza === 'genova' && arrivo === 'lecce'){
            tratta = 1054}
        else if (partenza === 'genova' && arrivo === 'roma'){
            tratta = 503}
        else if (partenza === 'firenze' && arrivo === 'milano'){
            tratta = 272}
        else if (partenza === 'firenze' && arrivo === 'napoli'){
            tratta = 472}
        else if (partenza === 'firenze' && arrivo === 'torino'){
            tratta = 432}
        else if (partenza === 'firenze' && arrivo === 'genova'){
            tratta = 232}
        else if (partenza === 'firenze' && arrivo === 'lecce'){
            tratta = 824}
        else if (partenza === 'firenze' && arrivo === 'roma'){
            tratta = 345}
        else if (partenza === 'napoli' && arrivo === 'milano'){
            tratta = 772}
        else if (partenza === 'napoli' && arrivo === 'firenze'){
            tratta = 472}
        else if (partenza === 'napoli' && arrivo === 'torino'){
            tratta = 888}
        else if (partenza === 'napoli' && arrivo === 'genova'){
            tratta = 702}
        else if (partenza === 'napoli' && arrivo === 'lecce'){
            tratta = 408}
        else if (partenza === 'napoli' && arrivo === 'roma'){
            tratta = 225}
        else if (partenza === 'lecce' && arrivo === 'milano'){
            tratta = 1031}
        else if (partenza === 'lecce' && arrivo === 'firenze'){
            tratta = 824}
        else if (partenza === 'lecce' && arrivo === 'torino'){
            tratta = 1147}
        else if (partenza === 'lecce' && arrivo === 'genova'){
            tratta = 1054}
        else if (partenza === 'lecce' && arrivo === 'napoli'){
            tratta = 408}
        else if (partenza === 'lecce' && arrivo === 'roma'){
            tratta = 577}   
    }

    if (document.getElementById("eta16").checked){
        document.getElementById('prezzoFinale').innerText = nomeMaiuscolo +  " " + cognomePuntato + " " + "il tuo prezzo é:" + " " + calcolaprezzo(tratta, 0.8) + " euro";
        document.getElementById('prezzoSconto').innerText = "hai risparmiato:" + " "  + (calcolaprezzo(tratta, 1) - calcolaprezzo(tratta, 0.8)).toFixed(2) + " euro, grazie alla categoria under18"    
    } else if (document.getElementById("eta65").checked){
        document.getElementById('prezzoFinale').innerText = nomeMaiuscolo +  " " + cognomePuntato + " " + "il tuo prezzo é:" + " " + calcolaprezzo(tratta, 0.6) + " euro";
        document.getElementById('prezzoSconto').innerText = "hai risparmiato:" + " " + (calcolaprezzo(tratta, 1) - calcolaprezzo(tratta, 0.6)).toFixed(2) + " euro, grazie alla categoria over65"    
    } else {
        document.getElementById('prezzoFinale').innerText = nomeMaiuscolo +  " " + cognomePuntato + " " + "il tuo prezzo é:" + " " + calcolaprezzo(tratta, 1) + " euro";
        document.getElementById('prezzoSconto').innerText = ""
    }


})







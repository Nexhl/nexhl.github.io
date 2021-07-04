// funzione che non mostra gif se "?nogif=true" nell'url AKA arrivando da altre pagine sito 
window.onload = function() { // window.onload vs document.onload
    var noGifUrl = new URLSearchParams(window.location.search);
    var GifParam = noGifUrl.get('nogif');

    if (GifParam=="true"){
        // non mostra gif immediatamente
        removeHeartbeat()

    } else {
        // lancia timeout della gif dopo caricamento pagina
        setTimeout(removeHeartbeat, 2300)
    }
}

// funzione che fa scomparire la gif 
function removeHeartbeat() { 
    var gif = document.querySelector("html"); // seleziona html AKA la gif 
    gif.style.backgroundImage = "none"; // imposta background come nullo AKA scompare la gif 

    displayHome(); // compare Homepage 
} 

// funzione che fa comparire Homepage
function displayHome() {
    var home = document.querySelector("#home");
    home.style.display = 'block';
}
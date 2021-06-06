// lancia timeout della gif dopo caricamento pagina (differenza window.onload vs document.onload)
window.onload = function() {
    setTimeout(removeHeartbeat, 2300)
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
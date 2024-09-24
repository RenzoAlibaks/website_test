// Zoek de knop en tekst op
const changeTextBtn = document.getElementById('changeTextBtn');
const dynamicText = document.getElementById('dynamicText');

// Voeg een klikgebeurtenis toe aan de knop
changeTextBtn.addEventListener('click', function() {
    dynamicText.textContent = 'De tekst is veranderd na een klik!';
});

// Zoek het datum-element op
const currentDate = document.getElementById('currentDate');

// Haal de huidige datum op en zet deze in het element
const today = new Date();
currentDate.textContent = `Vandaag is het: ${today.toLocaleDateString()}`;

// Zoek de knop op voor het veranderen van de achtergrondkleur
const changeColorBtn = document.getElementById('changeColorBtn');

// Voeg een klikgebeurtenis toe om de achtergrondkleur te veranderen
changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Functie om een willekeurige kleur te genereren
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

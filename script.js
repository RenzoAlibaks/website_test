<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mijn Moderne Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welkom op mijn moderne website</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#about">Over mij</a></li>
            <li><a href="#services">Diensten</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="about">
        <h2>Over mij</h2>
        <p>Hier kun je wat informatie over jezelf of je bedrijf zetten.</p>
        <button id="changeTextBtn">Klik om de tekst te veranderen</button>
        <button id="changeColorBtn">Verander de achtergrondkleur</button>
        <p id="dynamicText">Dit is de originele tekst.</p>
    </section>

    <section id="services">
        <h2>Diensten</h2>
        <div class="service-cards">
            <div class="card">
                <h3>Dienst 1</h3>
                <p>Korte beschrijving van de dienst.</p>
            </div>
            <div class="card">
                <h3>Dienst 2</h3>
                <p>Korte beschrijving van de dienst.</p>
            </div>
            <div class="card">
                <h3>Dienst 3</h3>
                <p>Korte beschrijving van de dienst.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Neem contact met ons op via dit formulier:</p>
        <form>
            <label for="name">Naam:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <input type="submit" value="Verzenden">
        </form>
    </section>

    <footer>
        <p id="currentDate"></p>
        <p>© 2024 Prototype Website</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

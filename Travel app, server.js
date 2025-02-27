const express = require('express');
const app = express();
const port = 3000;

// Set up static files (for CSS, images, etc.)
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Travel the World</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <header>
                <h1>Travel the World with Us</h1>
                <nav>
                    <a href="#">Flights</a>
                    <a href="#">Hotels</a>
                    <a href="#">Rentals</a>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Search and Find Dates</h2>
                    <form>
                        <label for="from">Departing from:</label>
                        <input type="text" id="from" name="from" placeholder="Enter city or airport">
                        <label for="to">Arriving at:</label>
                        <input type="text" id="to" name="to" placeholder="Enter city or airport">
                        <button type="submit">Search</button>
                    </form>
                </section>
                <section>
                    <h2>Good Offers Right Now</h2>
                    <p>Up to 60% discount!</p>
                </section>
            </main>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

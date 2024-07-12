const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/user/:id', (req, res) => {
    // Votre logique ici
    res.json({ id: req.params.id, name: "John Doe" });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

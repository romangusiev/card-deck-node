const express = require('express');
const deckRoutes = require('./routes/deckRoutes');

const app = express();

app.use('/api/deck', deckRoutes);

app.listen(process.env.PORT || 3000, () => console.log('Card-deck is started'));

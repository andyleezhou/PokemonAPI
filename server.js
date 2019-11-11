const express       = require('express');
const app           = express();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

const pokemon = require('./routes/pokemon');
app.use('/api/pokemon', pokemon)

module.exports = app;
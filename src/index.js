const express = require('express');
const app = express();
require('./config/envConfig')

const routes = require('./routes');

// Use the routes defined in routes/index.js
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
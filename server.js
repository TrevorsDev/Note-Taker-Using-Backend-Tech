const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});

//Look at mini project related to module 11 and check out the file system
// The public folder holds files that are all front end files.
// Routes folder are backend flies
// For express we mainly are focused on making a server, html routes, and api routes
// Api routes are for data manipulation or REST opperation (Put, post, delete etc).
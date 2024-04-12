const router = require('express').Router();
const path = require('path');

// WHen the router goes to http://localhost/public.notes.html it will SERVE aka display notes.html on the screen.
// These routes are just addresses that are sent to the client via the 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;


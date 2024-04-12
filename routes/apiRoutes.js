const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)))
});

router.post('/notes', (req, res) => {
  const { text, title } = req.body
  if (text && title) {
    const newNote = {
      title, text, id: uuid()
    }
    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
  } else {
    res.json('error posting note')
  }
})

module.exports = router;
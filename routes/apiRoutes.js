const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
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

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id
  console.log(id);
  readFromFile('./db/db.json').then(data => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    const filteredData = parsedData.filter(note => note.id !== id);
    console.log(filteredData);
    writeToFile('./db/db.json', filteredData);
    res.json(filteredData);
  })
})

module.exports = router;
var express = require('express');
var router = express.Router();
const db = require('../db/connector');

router.get('/', async function(req, res, next) {
  const students = await db.query('SELECT * FROM students');

  res.render('index', { students: students.rows || [] });
});

module.exports = router;

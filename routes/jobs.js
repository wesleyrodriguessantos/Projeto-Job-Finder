const express = require('express');
const  router = express.Router();
const job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send("Deu certo!!");
});

router.get('/add', (req, res) => {
    res.render('add');
});

// Add job via post
router.post('/add', (req, res) => {

    let {title, salary, description, company, email, new_job} = req.body;

    // Insert
    job.create({
        title, 
        description,
        salary, 
        company, 
        email, 
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router;
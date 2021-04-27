const express = require('express');
const router = express.Router();
const path = require('path');


router.get(`/api/internal/data/profile`, (req, res, next) => {
    res.status(200).send(
        require('../data/profile/profile_content_ptbr.json')
    );
});

router.get(`/api/internal/data/isa`, (req, res, next) => {
    res.status(200).send(
        require('../data/isa/isa_content.json')
    );
});










module.exports = router;
const express = require('express');
const router = express.Router();


router.get(`/api/internal/data/profile`, (req, res, next) => {
    res.status(200).send(
        require('../data/profile/profile_content.json')
    );
});




module.exports = router;
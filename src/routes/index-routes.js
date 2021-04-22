const express = require('express');
const router = express.Router();


router.get(`/api/internal/data/profile`, (req, res, next) => {
    res.status(200).send(
        require('../data/profile/profile_content.json')
    );
});


/* router.get('/data/profile/banner', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/banner.json')
    );
});

router.get('/data/profile/construction', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/construction.json')
    );
});

router.get('/data/profile/about', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/about.json')
    );
});

router.get('/data/profile/services', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/services.json')
    );
});

router.get('/data/profile/portfolio', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/portfolio.json')
    );
});

router.get('/data/profile/experience', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/experience.json')
    );
});

router.get('/data/profile/blog', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/blog.json')
    );
});

router.get('/data/profile/footer', (req, res, next) => {
    res.status(200).send(
        require('../data/profile/footer.json')
    );
});
*/

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', chatIO);
router.get('/mota', index);

function chatIO(req, res, next) {
    res.render('chat', {

    });
}

function index(req, res, next) {
    res.render('index', {
            title: 'mota',
        }

    )
}

module.exports = router;
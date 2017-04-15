var express = require('express');
var router = express.Router();

router.get('/', index);

function index(req, res, next) {
    res.render('index', {
            title: 'mota',
        }

    )
}

module.exports = router;
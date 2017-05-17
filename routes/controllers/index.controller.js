var express = require('express');
var router = express.Router();

router.get('/', chatIO);
router.post('/login', login);
router.get('/mota', index);

function chatIO(req, res, next) {
    if (req.session.username) {
        res.render('chat', {
            title: req.session.username,
            islogin: true
        });
    } else {
        res.render('chat', {
            title: "nologin!",
            islogin: false
        });
    }
}

function login(req, res, next) {
    if (req.body.username == "guyao" && req.body.password == "123456") {
        req.session.username = "guyao";
        res.json({ status: 1, err: "" });
        return;
    }
    if (req.body.username == "liudong" && req.body.password == "123456") {
        req.session.username = "liudong";
        res.json({ status: 1, err: "" });
        return;
    }
    res.json({ status: 0, err: "www" });
}

function index(req, res, next) {
    res.render('index', {
            title: 'mota',
        }

    )
}

module.exports = router;
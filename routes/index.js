'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var Player = require('player');
var itunes = require('playback');
var iTunesControl = require("itunescontrol");





module.exports = router;



// write your routes here. Feel free to split into multiple files if you like.
router.get('/:num', function(req, res) {

    // res.redirect('https://www.youtube.com/watch?v=WNIPqafd4As');
    // var numPpl = req.params.num;
    // if (Number(numPpl) === 1) {
    //     res.redirect('https://www.youtube.com/watch?v=WNIPqafd4As');
    // }


    // itunes.on('playing', function(data) { console.dir(data); });
    // itunes.on('paused', function(data) { console.log('paused'); });
    // itunes.play();

    var numPpl = req.params.num;
    var song;

    if (numPpl >= 0 && numPpl <= 2) {
    	song = "Someone Like You";
    } else if (numPpl > 2 && numPpl <= 5) {
    	song = "Rehab";
    } else {
    	song = "0 to 100";
    }
    

    iTunesControl.search(song, function(results) {

        iTunesControl.play(results[0].id);

    });
});

'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var Player = require('player');





module.exports = router;



// write your routes here. Feel free to split into multiple files if you like.
router.get('/:num', function(req, res) {
   
    // res.redirect('https://www.youtube.com/watch?v=WNIPqafd4As');
    // var numPpl = req.params.num;
    // if (Number(numPpl) === 1) {
    //     res.redirect('https://www.youtube.com/watch?v=WNIPqafd4As');
    // }


    // create player instance 
    var player = new Player('./music/Views.m4a');

    // play now and callback when playend 
    player.play(function(err, player) {
        console.log('playend!');
    });

    // create a player instance from playlist 
    // var player = Player([
    //     __dirname + '/music' + '/9.m4a',
    //     __dirname + '/music' + '/Controlla.m4a',
    //     __dirname + '/music' + '/Views.m4a',
    //     // play .mp3 file from a URL 
    //     'http://mr4.douban.com/blablablabla/p1949332.mp3'
    // ]);

    // play again 
    player.play();

    // play the next song, if any 
    //player.next();

    // add another song to playlist 
    //player.add('http://someurl.com/anothersong.mp3');

    // list songs in playlist 
    //console.log(player.list)

    // event: on playing 
    player.on('playing', function(item) {
        console.log('im playing... src:' + item);
    });

    // event: on playend 
    player.on('playend', function(item) {
        // return a playend item 
        console.log('src:' + item + ' play done, switching to next one ...');
    });

    // event: on error 
    player.on('error', function(err) {
        // when error occurs 
        console.log(err);
    });

    // stop playing 
    player.stop();
});

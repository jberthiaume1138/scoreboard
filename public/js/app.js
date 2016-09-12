'use strict'

var ScoreBoard = function(dataURL) {
    this.dataURL = dataURL
    this.scores = {};
};

ScoreBoard.prototype.processData = function(data) {
    this.scores = data;
    console.log(this.scores);

    var myData = data.sports[0].leagues[0].events;
    console.log(myData);
    console.log('Number of games: ' + myData.length);

    myData.forEach(function(game){
        $('#results').append('<p>' + game.id + '</p>');
    });
};

ScoreBoard.prototype.getData = function() {
    var promiseScores = $.Deferred();
    $.getJSON(this.dataURL)
        .done(this.processData.bind(this))
        .fail(function(){
            console.log('Error reading data.');
        });
};

$('document').ready(function() {
    var dataURL = 'http://127.0.0.1:8080/data/';

    var board = new ScoreBoard(dataURL);

    board.getData();
});

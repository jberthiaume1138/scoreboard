'use strict'

var ScoreBoard = function(dataURL) {
    this.dataURL = dataURL
    this.scores = {};
};

ScoreBoard.prototype.processData = function(data) {
    console.log(this.scores);

    var competitions = data.sports[0].leagues[0].events;
    console.log('Number of games: ' + competitions.length);

    competitions.forEach(function(game){
        console.log(game);
        $('#results').append('<p>' + game.id + '</p>');
    });

    var source = $('#scoreboard-template').html();
    var template = Handlebars.compile(source);

    var context = {gameID:"123456"};
    var html = template(context);

    $('#thing').html(html);
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

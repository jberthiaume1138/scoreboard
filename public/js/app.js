'use strict'

var ScoreBoard = function(dataURL) {
    this.dataURL = dataURL
    this.scores = {};
};

ScoreBoard.prototype.processData = function(data) {

    var competitions = data.sports[0].leagues[0];
    var source = $('#scoreboard-template').html();
    var template = Handlebars.compile(source);

    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    Handlebars.registerHelper('dateTimeFormat', function(date, format) {
        return moment(date).format(format);
    });

    var context = competitions;
    var html = template(context);

    $('#scoreboard').html(html);
};

ScoreBoard.prototype.getData = function() {
    $.getJSON(this.dataURL)
        .done(this.processData.bind(this))
        .fail(function(){
            console.log('Error reading data.');
        });
};

$('document').ready(function() {
    
    var dataURL = '/data/';

    var board = new ScoreBoard(dataURL);

    board.getData();
});

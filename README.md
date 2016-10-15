# scoreboard

This is a scoreboard component that displays a snapshot of a day's baseball games, some in progress, some complete, some yet to be played.

The application is responsive and adapts appropriately to window size. On a large display, the scoreboard is formatted as a 66 pixel tall by 815 pixel wide, ad sized scoreboard component. By default, 8 games are shown side to side, and the Slick jQuery plugin is used to cycle the scoreboard horizontally. On small format displays such as a smartphone, the scoreboard adapts to fill the entire viewport and the games scroll vertically using the standard scroll functions. On the small format displays, much more data is shown including the winning and losing pitchers, probable pitchers, and the current game situation including the number of outs, balls, and strikes.

In the interests of ease of use, and to demonstrate a more real world approach to accessing the data, the static JSON is exposed by a Node.js/Express API and can be  viewed at the /data route. The default route is the front end, which consumes the JSON with an AJAX call to the API. handlebars is used on the client side as a template engine as well as jQuery for optimized code.

The entire application is deployed to a dyno on Heroku. https://vast-sands-47376.herokuapp.com/

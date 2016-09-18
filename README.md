# scoreboard

This application displays a snapshot of a day's MLB games, some in progress, some complete, some yet to be played, and generates a 66px pixel tall scoreboard. The application is responsive and adapts appropriately to window size.

In the interests of ease of use, and to demonstrate a more real world approach to accessing the data, the provided JSON is exposed by a Node.js/Express API. This data can be viewed via the /data route. The default route is the front end, which consumes the JSON with an AJAX call to the API.

The entire application is deployed to a dyno on Heroku. https://vast-sands-47376.herokuapp.com/

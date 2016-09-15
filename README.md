# scoreboard

This application accepts deep JSON data which represents a snapshot of a day's MLB games, some in progress, some complete, some yet to be played, and generates a 66px pixel tall scoreboard. The application is responsive and adapts appropriately to device window size.

In the interests of completness and ease of use, the provided JSON data is exposed by a Node.js/Express API. The data can be viewed via the /data route. The default route is the front end, which consumes the JSON with an AJAX call to the API.

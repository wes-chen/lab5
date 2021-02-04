var data = require("../data.json");

exports.addFriend = function(request, response) {
	// Your code goes here
  console.log("name = " + request.query.name + " desc: " + request.query.description);
  data.friends.push(
    {
			"name": request.query.name,
			"description": request.query.description,
			"imageURL": "https://loremflickr.com/500/500/headshot"
		}
  );
  response.render('index', data);
}

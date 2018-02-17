//load data

var friendData = require("../data/friends");


// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req,res){
  
  	//logic goes here

	var thisFriend = req.body;

	//Math.abs(); is used to calculate absolute value
	
	var closestFriend;
	var closestPhoto;

	var closestFriendScore = 0;
	var finalScore = 0;
	for (i=0; i<friendData.length; i++){

		var sampleFriendToCalc = friendData[i];


		for (j=0; j<sampleFriendToCalc.scores.length; j++){

			finalScore = finalScore + Math.abs((sampleFriendToCalc.scores[j] - parseInt(thisFriend.scores[j])));

		}

		
		closestFriendScore = finalScore;

		if (closestFriendScore > finalScore){

			closestFriendScore = finalScore;


			}
			else
			{
				closestFriendScore = closestFriendScore;

				
			};
 
		
			closestFriend = friendData[i];
		
	};

	friendData.push(req.body);
	res.json(closestFriend);

  });

};
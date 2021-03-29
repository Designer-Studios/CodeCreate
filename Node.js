var unirest = require("unirest");

var req = unirest("POST", "https://githubdimashirokovv1.p.rapidapi.com/followUser");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"x-rapidapi-key": "147856336fmshc5945d5fda80e25p1caddcjsn274d7d2823a4",
	"x-rapidapi-host": "GithubdimashirokovV1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"accessToken": "<REQUIRED>",
	"user": "designer-studios"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

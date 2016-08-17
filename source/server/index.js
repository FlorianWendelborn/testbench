var Dota2Api = require('dota2-api');

var da = Dota2Api.create('');

var options = {game_mode: 1};
da.getMatchHistory(options).then((result) => {
	console.log(result);
}, (error) => {
	console.log(error);
});

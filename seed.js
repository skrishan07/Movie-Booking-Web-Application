const mongoose = require("mongoose"),
	audi = require("./models/audi"),
	screening = require("./models/screening"),
	reservation = require("./models/reservation"),
	movies = require("./models/movies");




var data = [
	{
		name: "The Wailing",
		img: "https://m.media-amazon.com/images/M/MV5BODkwMTgxNjA2NF5BMl5BanBnXkFtZTgwMDc0OTcwOTE@._V1_.jpg",
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
		ratings: "4.8",
		director: "Darren",
		release: "2016",
		duration: 120

	},
	{
		name: "Miss Bala",
		img: "https://www.joblo.com/assets/images/joblo/posters/2018/12/miss_bala_poster_thumb.jpg",
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
		ratings: "4.5",
		director: "Micheal",
		release: "2018",
		duration: 90
	},
	{
		name: "Godzilla",
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
		img: "https://www.joblo.com/assets/images/joblo/posters/2018/12/godzilla-poster-xl_thumb.jpg",
		ratings: "3.8",
		director: "Kim yong",
		release: "2018",
		duration: 90
	},
	{
		name: "Avengers Endgame",
		summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
		img: "https://www.joblo.com/assets/images/joblo/posters/2019/03/avengers-endgame-poster-xl.jpg",
		ratings: "4.5",
		director: "Ruso Brothers",
		release: "2019",
		duration: 200
	},

];
var th = [
	{
		name: "audi1",

		showTimes: [
			{
				start: 9,
				end: 12,
				available: true
			},
			{
				start: 12,
				end: 15,
				available: true
			},
			{
				start: 15,
				end: 18,
				available: true
			},
			{
				start: 18,
				end: 21,
				available: true
			}
		]
	},
	{
		name: "audi2",

		showTimes: [
			{
				start: 9,
				end: 12,
				available: true
			},
			{
				start: 12,
				end: 15,
				available: true
			},
			{
				start: 15,
				end: 18,
				available: true
			},
			{
				start: 18,
				end: 21,
				available: true
			}
		]
	},
	{
		name: "audi3",

		showTimes: [
			{
				start: 9,
				end: 12,
				available: true
			},
			{
				start: 12,
				end: 15,
				available: true
			},
			{
				start: 15,
				end: 18,
				available: true
			},
			{
				start: 18,
				end: 21,
				available: true
			}
		]
	}


]


 module.exports=function seed() {

	movies.deleteMany({}, function (err, res) {
		if (err)
			console.log(err)
		else
			console.log(res);
	});
	data.forEach(function (movie) {
		movies.create(movie, function (err, added) {
			if (err)
				console.log(err);
			else
				console.log(added);
		});

	});
	movies.updateMany({}, { $set: { "screening": false } }, function (err, Movies) {


		if (err)
			console.log(err);
		else
			console.log(Movies);

	});
	audi.deleteMany({}, function (err, res) {
		if (err)
			console.log(err)
		else
			console.log("deleted");
		th.forEach(function (th) {

			audi.create(th, function (err, newaudi) {
				if (err)
					console.log(err);
				else
					console.log("new audi created");
			});
		});

	});

	screening.deleteMany({}, function (err, res) {
		if (err)
			console.log(err);
		else
			console.log("All screens deleted");
	});

	reservation.deleteMany({}, function (err, res) {
		if (err)
			console.log(err);
		else
			console.log("all reservations deleted");
	});

	
}



var Trackster = {};
	var API_KEY = "61c48c83ab241dd92ab6e371e9934e78";
	var search = $("#search-button");
	
	search.click(function() {
		var title = $(".input").val()
		Trackster.searchTracksByTitle(title);
});


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {
	$("#results").empty();
	var mediumAlbumArt = tracks[i].image[1]["#text"];
	for (var i = 0; i < tracks.length; i++) {
		var row ="<div class=\"row results\">"+
						"<a class=\"col-md-offset-1 col-md-1 fa-2x\" href="+tracks[i].url+"><i class=\"fa fa-play-circle-o\"></i></a>"+
						"<p class=\"col-md-4\">"+tracks[i].name+"</p>"+
						"<p class=\"col-md-2\">"+tracks[i].artist+"</p>"+
						// "<p class=\"col-md-2\">"+mediumAlbumArt+"</p>"+
						"<p class=\"col-md-2\">"+tracks[i].listeners+"</p>"+
					"</div>";
		$("#results").append(row);
		// console.log(tracks[i]);
	}
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
	$.ajax({
			url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json",
			success:function(response) {
			Trackster.renderTracks(response.results.trackmatches.track);
			console.log(response)
		}
	});
};


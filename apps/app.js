$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyAzWbfHgmKTmYLdscc3FyhEDTYzHymkkJ0',
		q: searchTerm,
		maxResults: 10
	}
	url = "https://www.googleapis.com/youtube/v3/search";
	$.get(url, params, function(data, items){
		$.each(data.items, function(index, myData){
			var ID = myData.id.videoId;
			var isvideo = true;
			if (!ID){
				ID = myData.id.channelId;
				isvideo = false;
			}
			var info = myData.snippet.title;
			var thumb = myData.snippet.thumbnails.default.url;
			var nextPage = data.nextPageToken
			showResults(ID, info, thumb, isvideo);
			console.log(data);
		});
	});
}
function showResults (ID, info, thumb, isvideo){
	if (isvideo){
		var url = "https://www.youtube.com/watch?v=" + ID;
	} else {
		var url = "https://www.youtube.com/channel/" + ID;
	}
	var html = "<li><h4>\"" + info + "\"</h4><a href=\"" + url + "\"><img src=\"" + thumb + "\"></img></a></li>";
	$('#search-results').append(html);
}

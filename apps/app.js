$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	})
});

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyAzWbfHgmKTmYLdscc3FyhEDTYzHymkkJ0',
		q: searchTerm
	}
	url = "https://www.googleapis.com/youtube/v3/search";
	$.getJSON(url, params, function(data){
		console.log(data);
	});
}

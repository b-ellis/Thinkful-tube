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
		for(i=0; i < items.length; i++){
		var myData = data.items[i]
		};
		$.each(myData, function(){
			
		});
		console.log(myData);
	});
}


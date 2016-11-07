$(document).ready(function(){
	$('#wiki-search').click(() => {
    let word = $('#search-term').val();
		$.ajax({
			url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${word}&format=json&callback?`,
			type: "GET",
			dataType: 'jsonp',
			success: function(data){
				searchResult(data);
			}
		})
	});

  $('#search-term').keypress(function(e){
    if(e.which === 13){
      $('#wiki-search').click();
    }
  });

  function searchResult(data){
    $('.results-container').empty();
    let title = data[1],
        desc = data[2],
        link = data[3];
    for(let i=0; i<title.length; i++) {
      let div = document.createElement('div');
      let a = document.createElement('a');
      let pTitle = document.createElement('p');
      let pDesc = document.createElement('p');
      div = $(div).addClass('ui center aligned container results');
      pTitle = $(pTitle).text(title[i]).addClass('title');
      pDesc = $(pDesc).text(desc[i]).addClass('description');
      a = $(a).attr('href', link[i]).append(pTitle)
                                    .append(pDesc);
      div.append(a);
      div.appendTo($('.results-container'));
    }
  }
});

$(document).ready(function() {
	$(init);
	$(hideTags);
	$(showMoreOptions);
	
		
	function init() {
		var mSearch = $('#movieSearch');
		mSearch.click(f_mSearch);
		
		function f_mSearch() {
			var mTitle = $('#movieTitle').val();
						
			$.ajax({
				url:"http://www.omdbapi.com/?t=" + mTitle + "&plot=full",
				dataType:"json",				
				success:renderTables
			});
		}
		
		
		
		function renderTables(response) {
			var titleTh = new Array("Tytuł","Rok produkcji","Czas trwania","Opis","Zdjęcie");
			var responseTd = new Array(response.Title,response.Year,response.Runtime,response.Plot,response.Poster);
			var check = response.Response;
						
			//generator of th
			$('thead').find('tr').empty();
			for(var i = 0; i < titleTh.length; i++) {
				$('thead').find('tr').append("<th>" + titleTh[i] + "</th>");
			}
			
			//if find no films
			if(check == "False") {
				$('#noFilms').fadeIn(1500).delay(2000).fadeOut(1500);
			} else {
				//generator of td
				$('tbody').find('tr').empty();
				for(var j = 0; j < responseTd.length; j++) {
					if(responseTd[j] == response.Poster ) {
						$('tbody').find('tr').append("<td><img src='" + responseTd[j] + "' /></td>");
					} else {
						$('tbody').find('tr').append("<td>" + responseTd[j] + "</td>");
					}
				}
				$('#results').fadeIn(3000);
			}
		}	
	}
	
	function hideTags() {
		$('#results').hide();
		$('#noFilms').hide();
	}
});
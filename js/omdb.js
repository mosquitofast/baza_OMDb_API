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
			
			//generator of th
			$('thead').find('tr').empty();
			for(var i = 0; i < titleTh.length; i++) {
				$('thead').find('tr').append("<th>" + titleTh[i] + "</th>");
			}
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
	
	function hideTags() {
		$('#results').hide();
		$('.options').hide();
	}
	
	function showMoreOptions() {
		var addOptions = $('.opt').find('p');
		var closeOptions = $('.close').find('p');
		
		addOptions.click(function() {
			$('.options').slideDown(1500);
		});
		
		closeOptions.click(function() {
			$('.options').slideUp(1500);
		});
	}
});
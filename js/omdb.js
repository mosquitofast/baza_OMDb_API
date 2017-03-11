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
			var titleTh = new Array("Tytuł","Rok produkcji","Czas trwania","Opis","Gatunek","Zdjęcie");
			
			
			var title = response.Title;
			var yearProduction = response.Year;
			var duration = response.Runtime;
			var describe = response.Plot;
			var imgURL = response.Poster;
			
			//generator of th
			$('thead').find('tr').empty();
			for(var i = 0; i < titleTh.length; i++) {
				$('thead').find('tr').append("<th>" + titleTh[i] + "</th>");
			}
			
			$('tbody').find('tr').empty();
			
			$('tbody').find('tr').append("<td>" + title + "</td>");
			$('tbody').find('tr').append("<td>" + yearProduction + "</td>");
			$('tbody').find('tr').append("<td>" + duration + "</td>");
			$('tbody').find('tr').append("<td>" + describe + "</td>");
			$('tbody').find('tr').append("<td>" + gat + "</td>");
			$('tbody').find('tr').append("<td><img src='" + imgURL + "' /></td>");
			
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
$(document).ready(function() {
	$(init);
	$(hideTags);
	$(showMoreOptions);
	
		
	function init() {
		var mSearch = $('#movieSearch');
		mSearch.click(f_mSearch);
		
		function f_mSearch() {
			var mTitle = $('#movieTitle').val();
			//var abcd = document.getElementByID("axbc").checked;
			//alert("Variable a is: " + abcd);
			
			
			$.ajax({
				url:"http://www.omdbapi.com/?t=" + mTitle + "&plot=full",
				dataType:"json",				
				success:renderTables
			});
		}
		
		
		
		function renderTables(response) {
			var titleTh = new Array("Tytuł","Rok produkcji","Czas trwania","Opis","Zdjęcie");
			
			//var pos = 4;
			
			
			
			//titleTh.splice(pos,0,"Gatunek","Aktorzy","Nagrody");
			
			//alert("Pozycja 1 to: " + titleTh[0] + " Pozycja 2 to: " + titleTh[1] + " Pozycja 3 to: " + titleTh[2] + " Pozycja 4 to: " + titleTh[3] + " Pozycja 5 to: " + titleTh[4] + " Pozycja 6 to: " + titleTh[5] + " Pozycja 7 to: " + titleTh[6] + " Pozycja 8 to: " + titleTh[7]);
			/*
			var title = response.Title;
			var yearProduction = response.Year;
			var duration = response.Runtime;
			var describe = response.Plot;
			var imgURL = response.Poster;
			
			//optional if user check
			var gat = response.Genre;
			var actors = response.Actors;
			var rank = response.imdbRating;
			var director = response.Director;
			var awards = response.Awards;
			*/
			//generator of table
			for(var i = 0; i < titleTh.length; i++) {
				$('#proba').append("<th>" + titleTh[i] + "</th>");
			}
			
			
			/*
			for(var i in response) {
				var resp = response[i];
				$(".link").html(title);
				$(".yProduce").html(yearProduction);
				$(".last").html(duration);
				$(".post").html(describe);
				$(".poster").attr("src",imgURL);
			}	
			*/
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
$(document).ready(function() {
	$(hideTags);
	$(init);
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
						
			
			var title = response.Title;
			var yearProduction = response.Year;
			var duration = response.Runtime;
			var describe = response.Plot;
			var imgURL = response.Poster;
				
				
			for(var i in response) {
				var resp = response[i];
				$(".link").html(title);
				$(".yProduce").html(yearProduction);
				$(".last").html(duration);
				$(".post").html(describe);
				$(".poster").attr("src",imgURL);
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
$(document).ready(function() {
	$(init);
	
	function init() {
		var mSearch = $('#movieSearch');
		mSearch.click(f_mSearch);
		
		function f_mSearch() {
			var mTitle = $('#movieTitle').val();
			alert("Wpisałeś: " + mTitle);
			
			$.ajax({
				url:"http://www.omdbapi.com/?t=" + mTitle,
				dataType:"json",				
				success:renderTables
			}); //end of ajax
		}
		
		function renderTables(response) {
			alert("Film: " + response.Runtime);
		}
	}
});
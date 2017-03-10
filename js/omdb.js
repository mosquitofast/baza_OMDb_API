$(document).ready(function() {
	$(init);
	
	function init() {
		var mSearch = $('#movieSearch');
		mSearch.click(f_mSearch);
		
		function f_mSearch() {
			alert("Kliknięto przycisk");
		}
	}
});
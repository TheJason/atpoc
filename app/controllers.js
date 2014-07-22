function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	$scope.nextPage = $stateParams.pageID +1;
	$scope.prevPage = $stateParams.pageID -1;
	$scope.nextPage = function(page){
		var nextPageID = parseInt(page, 10) + 1;
	    	var url = '/page/' + nextPageID;
	    	$location.path(url);
	}
	$scope.prevPage = function(page){
		var prevPageID = parseInt(page, 10) - 1;
	    	var url = '/page/' + prevPageID;
	    	$location.path(url);
	}
}

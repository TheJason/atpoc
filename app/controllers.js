function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	$scope.nextPage = $stateParams.pageID +1;
	$scope.prevPage = $stateParams.pageID -1;
	$scope.nextPage = function(page){
		nextPageID = page +1;
	    	var url = '/page/' + nextPageID;
	    	$location.path(url);
	}
	$scope.prevPage = function(page){
		prevPageID = page -1;
	    	var url = '/page/' + prevPageID;
	    	$location.path(url);
	}
}

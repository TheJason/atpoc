function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	$scope.nextPage = $stateParams.pageID +1;
	$scope.prevPage = $stateParams.pageID -1;
	$scope.nextPage = function(){
	    	var url = '/page/' + $scope.nextPage;
	    	$location.path(url);
	}
	$scope.prevPage = function(){
	    	var url = '/page/' + $scope.prevPage;
	    	$location.path(url);
	}
}

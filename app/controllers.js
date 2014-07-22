function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	$scope.nextPage = $stateParams.pageID +1;
	$scope.prevPage = $stateParams.pageID -1;
	$scope.go = function ( path ) {
  		$location.path( path );
	};
}

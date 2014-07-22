function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	this.currentPage = this.page[$scope.pageid];
	$scope.go = function ( path ) {
  		$location.path( path );
	};
}

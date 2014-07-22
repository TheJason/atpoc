function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	this.currentPage = this.page[$stateParams.pageID];
	$scope.go = function ( path ) {
  		$location.path( path );
	};
}

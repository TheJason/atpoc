function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	book.page = $scope.pageid;
	$scope.go = function ( path ) {
  		$location.path( path );
	};
}

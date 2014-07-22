function PageDetailController($scope,$http,$location,$stateParams) {
	$scope.pageid = $stateParams.pageID;
	$scope.go = function ( path ) {
  		$location.path( path );
	};
}

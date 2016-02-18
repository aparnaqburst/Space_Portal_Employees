employeeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
	.when('/login', {
	    templateUrl: './views/login.html',
	    //controller: 'DashController'
	})
	.when('/dashboard', {
	    templateUrl: './views/dashboard.html',
	   // controller: 'UserController'
	})
    .when('/bookmeetingroom', {
        templateUrl: './views/bookmeetingroom.html',
        controller: 'BookMeetingRoomController'
    })
	
}]);

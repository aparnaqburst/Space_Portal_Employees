employeeApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Login');

    $stateProvider
        .state("Login", {
            url: '/Login',
            templateUrl: './views/Login.html',
            controller: 'LoginController',
        })
        .state("Employee", {
            url: '/Employee',
            templateUrl: './views/EmployeeMaster.html',
            //controller: 'LoginController',
        })
            // nested
            .state('Employee.Dashboard', {
                url: '/Dashboard',
                templateUrl: './views/Dashboard.html',
                controller: 'DashboardController',
            })
            .state("Employee.EmployeeDetails", {
                url: '/EmployeeDetails',
                templateUrl: './views/EmployeeDetails.html',
                controller: 'EmployeeDetailsController',
            })
        .state("Employee.BookMeetingRoom", {
            url: '/BookMeetingRoom',
            templateUrl: './views/BookMeetingRoom.html',
            controller: 'BookMeetingRoomController',
        })
         // nested level 2 employee
                .state('Employee.EmployeeDetails.Profile', {
                    url: '/Profile',
                    templateUrl: './views/EmployeeProfile.html',
                    controller: 'EmployeeProfileController',
                })
                .state('Employee.EmployeeDetails.EditProfile', {
                    url: '/EditProfile',
                    templateUrl: './views/EditEmployee.html',
                    controller: 'EditEmployeeController',
                })
                .state('Employee.EmployeeDetails.Skills', {
                    url: '/Skills',
                    templateUrl: './views/EmployeeSkills.html',
                    controller: 'EmployeeSkillsController',
                })
        .state("Admin", {
            url: '/Admin',
            templateUrl: './views/AdminMaster.html',
            //controller: 'EmployeeListController',
        })
            // nested level 1
            .state('Admin.Dashboard', {
                url: '/Dashboard',
                templateUrl: './views/Dashboard.html',
                controller: 'DashboardController',
            })
            .state("Admin.EmployeeList", {
                url: '/EmployeeList',
                templateUrl: './views/EmployeeList.html',
                controller: 'EmployeeListController',
            })
            .state("Admin.EmployeeDetails", {
                url: '/EmployeeDetails?id',
                templateUrl: './views/EmployeeDetails.html',
                controller: 'EmployeeDetailsController',
            })
             .state("Admin.BookMeetingRoom", {
                 url: '/BookMeetingRoom',
                 templateUrl: './views/BookMeetingRoom.html',
                 controller: 'BookMeetingRoomController',
             })
                // nested level 2 admin
                .state('Admin.EmployeeDetails.Profile', {
                    url: '/Profile',
                    templateUrl: './views/EmployeeProfile.html',
                    controller: 'EmployeeProfileController',
                })
                .state('Admin.EmployeeDetails.EditProfile', {
                    url: '/EditProfile',
                    templateUrl: './views/EditEmployee.html',
                    controller: 'EditEmployeeController',
                })
                .state('Admin.EmployeeDetails.Skills', {
                    url: '/Skills',
                    templateUrl: './views/EmployeeSkills.html',
                    controller: 'EmployeeSkillsController',
                });
});

//employeeApp.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider
//	.when('/login', {
//	    templateUrl: './views/login.html',
//	    //controller: 'DashController'
//	})
//	.when('/dashboard', {
//	    templateUrl: './views/dashboard.html',
//	   // controller: 'UserController'
//	})
//    .when('/bookmeetingroom', {
//        templateUrl: './views/bookmeetingroom.html',
//        controller: 'BookMeetingRoomController'
//    })
	
//}]);

employeeApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Login');

    $stateProvider
        .state("Login", {
            url: '/Login',
            templateUrl: './views/Login.html',
            controller: 'LoginController',
        })
        .state("Employee", {
            url: '/Employee?employeeId',
            templateUrl: './views/EmployeeMaster.html',
            abstract: true,
           // controller: 'EmployeeMasterController',
        })
            // nested level 1
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
                
                url: '/EmployeeDetails?employeeId',
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


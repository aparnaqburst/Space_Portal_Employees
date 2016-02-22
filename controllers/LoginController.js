
employeeApp.controller('LoginController', function ($scope,$rootScope, $location, $http, $state) {
    $scope.Login = login;
    $scope.employeeList = [];
    $scope.message = "";

    $rootScope.LoginId = 0;
    $rootScope.LoginName = "";

    function login() {
        $scope.submitted = true;

        $http.get('./assets/json/employee.json').success(function (employeeList) {
            angular.forEach(employeeList, function (employee) {
                if (employee.Email == $scope.username && employee.Password == $scope.password) {
                    $rootScope.LoginId = employee.EmployeeId;
                    $rootScope.LoginName = employee.FullName;
                    if (employee.IsAdmin == 'true') {
                        //$state.go('EmployeeDetails', { id: employee.EmployeeId });
                        $state.go('Admin.Dashboard');
                    }
                    else
                        $state.go('Employee.Dashboard');
                }
                else
                    $scope.message = "Ivalid username or password...";
            });


        }).error(function (data, status, headers, config) {
            $scope.messages = 'There was a network error. Try again later.';
        });
    }
});

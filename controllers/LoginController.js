
employeeApp.controller('LoginController', function ($scope, $rootScope, $location, $http, $state) {
    console.log('LoginController');
    localStorage.removeItem("EmployeeList");

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
                    $rootScope.LoginName = employee.FullName;
                    if (employee.IsAdmin == 'true') {
                        $state.go('Admin.Dashboard');
                    }
                    else
                        $state.go('Employee.Dashboard', { employeeId: employee.EmployeeId });
                }
                else
                    $scope.message = "Invalid username or password...";
            });


        }).error(function (data, status, headers, config) {
            $scope.messages = 'There was a network error. Try again later.';
        });
    }
});

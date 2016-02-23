
employeeApp.controller('EmployeeListController', function ($scope, $state, EmployeeDetailsService) {
    console.log('EmployeeListController');
    $scope.employeeList = [];
    $scope.getEmployees = function () {
        EmployeeDetailsService.getEmployeeList().then(
                function (response) {
                    $scope.employeeList = response;
                },
                 function (errResponse) {
                     console.error('Error');
                 }
          );
    }
    $scope.getEmployees();

    $scope.ViewProfile = function (employeeId) {
        localStorage.setItem("EmployeeId", employeeId);
        $state.go('^.EmployeeDetails');
    };
});
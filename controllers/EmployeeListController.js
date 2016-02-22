
employeeApp.controller('EmployeeListController', function ($scope, EmployeeDetailsService) {
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
});
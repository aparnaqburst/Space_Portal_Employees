
employeeApp.controller('EmployeeListController', function ($scope, $state, $http, $filter, ngTableParams, EmployeeDetailsService) {
    console.log('EmployeeListController');

    //$scope.employeeList = [];
    //$scope.getEmployees = function () {
    //    EmployeeDetailsService.getEmployeeList().then(
    //            function (response) {
    //                $scope.employeeList = response;
    //            },
    //             function (errResponse) {
    //                 console.error('Error');
    //             }
    //      );
    //}
    //$scope.getEmployees();

    var employeeList2 = []
    $scope.employeeParams = new ngTableParams({
        page: 1,
        count: 4
    }, {
        counts: [],
        getData: function ($defer, params) {
            EmployeeDetailsService.getEmployeeList().then(
                function (response) {
                    employeeList2 = response;
                    $scope.data = params.sorting() ? $filter('orderBy')(employeeList2, params.orderBy()) : employeeList2;
                    $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                    $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    params.total(employeeList2.length);

                    $scope.previousTotal = (params.page() - 1) * params.count();

                    $defer.resolve($scope.data);
                },
                function (errResponse) {
                    console.error('Error fetching employee list');
                });
        }
    });

    $scope.ViewProfile = function (employeeId) {
        localStorage.setItem("EmployeeId", employeeId);
        $state.go('^.EmployeeDetails.Profile');
    };
});
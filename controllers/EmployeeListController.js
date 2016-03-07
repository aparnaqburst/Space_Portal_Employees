
employeeApp.controller('EmployeeListController', function ($scope, $state, $http, $q, $filter, ngTableParams, EmployeeDetailsService) {
    console.log('EmployeeListController');

    var employeeList = null;
    $scope.employeeParams = new ngTableParams({
        page: 1,
        count: 4
    }, {
        counts: [],
        getData: function ($defer, params) {
            EmployeeDetailsService.getEmployeeListFromLocalStoage().then(
                function (response) {
                    employeeList = response;
                    $scope.data = params.sorting() ? $filter('orderBy')(employeeList, params.orderBy()) : employeeList;
                    $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                    $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    params.total(employeeList.length);

                    $scope.previousTotal = (params.page() - 1) * params.count();

                    $defer.resolve($scope.data);
                },
                function (errResponse) {
                    console.error('Error fetching employee list');
                });
        }
    });

    $scope.AddProfile = function () {
        $state.go('^.EmployeeDetails.EditProfile');
    };

    $scope.ConcatenateSkills = function (skills) {
        var skillsString = '';
        angular.forEach(skills, function (value, index) {
            skillsString += value + ', ';
        });

        return skillsString;
    };

});
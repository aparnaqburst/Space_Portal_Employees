employeeApp.controller('EmployeeSkillsController', function ($scope, EmployeeDetailsService) {
    console.log('Skills');
    $scope.skillSet = [];
    $scope.isEdit = false;
    $scope.fetchSkills = function () {
        EmployeeDetailsService.getSkillset().then
        (function (data) {
            $scope.skillSet = data;
        },
        function (error) {
            console.log("Error fetching skills");
        }
        );
    }
    $scope.fetchSkills();
    $scope.editProfile = function () {
        $scope.isEdit = !$scope.isEdit;
    }
    $scope.SaveSkills = function () {
        $scope.isEdit = !$scope.isEdit;
    }
    $scope.setValue = function (item) {
        if ($scope.employeeSkills.indexOf(item.name) == -1)
        {
            $scope.employeeSkills.push(item.name);
            console.log("skills added", $scope.employeeSkills);
        }
        
    }
});
employeeApp.controller('EmployeeSkillsController', function ($scope, EmployeeDetailsService) {
    console.log('EmployeeSkillsController');
    $scope.skillSet = [];
    $scope.isEdit = false;
    $scope.fetchSkills = function () {
        EmployeeDetailsService.getSkillset().then
        (function (data) {
            $scope.skillSet = data;
            $scope.selectedSkill = $scope.skillSet[2].Name; // default
        },
        function (error) {
            console.log("Error fetching skills");
        });
    }
    $scope.fetchSkills();

    $scope.editSkill = function () {
        $scope.isEdit = !$scope.isEdit;
    }
    $scope.AddSkill = function () {
        if ($scope.employeeSkills.indexOf($scope.selectedSkill) == -1) {
            $scope.employeeSkills.push($scope.selectedSkill);

            for (var i = 0; i < $scope.skillSet.length; i += 1) {
                if ($scope.skillSet[i]["Name"] == $scope.selectedSkill) {
                    $scope.skillSet.splice(i, 1);
                }
            }
        }
    }
    $scope.SaveSkills = function () {
        $scope.isEdit = !$scope.isEdit;
    }
    //$scope.setValue = function (item) {
    //    if ($scope.employeeSkills.indexOf(item.name) == -1) {
    //        $scope.employeeSkills.push(item.name);
    //        console.log("skills added", $scope.employeeSkills);
    //    }

    //}
});
employeeApp.controller('EmployeeSkillsController', function ($scope, EmployeeDetailsService) {
    console.log('EmployeeSkillsController');
    $scope.skillSet = [];
    $scope.isEdit = false;
    $scope.isNewskill = false;
    $scope.isRequired = false;
    $scope.fetchSkills = function () {
        EmployeeDetailsService.getSkillset().then
        (function (data) {
            $scope.skillSet = data;
            $scope.selectedSkill = $scope.skillSet[2].name; // default
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
                if ($scope.skillSet[i]["name"] == $scope.selectedSkill) {
                    $scope.skillSet.splice(i, 1);
                }
            }
        }
    }
    $scope.SaveSkills = function () {
        $scope.isEdit = !$scope.isEdit;
        $scope.isNewskill = false;
    }
    $scope.setValue = function (item) {
        if ($scope.employeeSkills.indexOf(item.name) == -1)
        {
            $scope.employeeSkills.push(item.name);
            console.log("skills added", $scope.employeeSkills);
        }
        
    }
    $scope.addSkill = function () {
        if (!$scope.isNewskill) {
            $scope.isNewskill = true;
        }
        else {
            if ($scope.validateForm.$valid) {
                $scope.isNewskill = false;
                $scope.isRequired = false;
                if ($scope.employeeSkills.indexOf($scope.newSkill) == -1) {
                    $scope.employeeSkills.push($scope.newSkill);
                    $scope.newSkill = "";
                }
            }
            else {
                $scope.isRequired = true;
            }
        }
        console.log("Add click fired");
    }
});
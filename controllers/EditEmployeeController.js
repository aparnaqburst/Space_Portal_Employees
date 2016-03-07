employeeApp.controller('EditEmployeeController', function ($scope, $state, $stateParams, $window, EmployeeDetailsService) {
    console.log('EditEmployeeController');
    $scope.isEditMode = $stateParams.employeeId != null;

    // Update Profile
    $scope.updateProfile = function () {
        if ($scope.profileForm.$valid) {
            $scope.$parent.fullName = $scope.fullName;
            $scope.$parent.gender = $scope.gender;
            $scope.$parent.designation = $scope.designation;
            $scope.$parent.department = $scope.department;
            $scope.$parent.stream = $scope.stream;
            $scope.$parent.experienceInYears = $scope.experienceInYears;
            $scope.$parent.experienceInMonths = $scope.experienceInMonths;
            $scope.$parent.mobile = $scope.mobile;
            $scope.$parent.residence = $scope.residence;
            $scope.$parent.skypeId = $scope.skypeId;
            $scope.$parent.address = $scope.address;

            console.log('Profile updated');
            $window.alert("Successfully updated the profile.");
            $state.go('^.Profile');
        }
    }

    // Add Profile
    $scope.addProfile = function () {
        if ($scope.profileForm.$valid) {
            var empList = JSON.parse(localStorage.getItem('EmployeeList'));
            var emp = {
                "EmployeeId": empList.length + 1,
                "IsAdmin": "false",
                "FullName": $scope.fullName,
                "Gender": $scope.gender,
                "Email": $scope.email,
                "Password": "11",
                "Designation": $scope.designation,
                "Department": $scope.department,
                "Stream": $scope.stream,
                "ExperienceInYears": $scope.experienceInYears,
                "ExperienceInMonths": $scope.experienceInMonths,
                "Mobile": $scope.mobile,
                "Residence": $scope.residence,
                "Address": $scope.address,
                "SkypeId": $scope.skypeId,
                "Skills": []
            };
            empList.push(emp);
            localStorage.removeItem("EmployeeList");
            localStorage.setItem("EmployeeList", JSON.stringify(empList));
            console.log('new employee added.');
            $window.alert("Successfully created the profile.");
            $state.go('Admin.EmployeeList');
        }
    }
});
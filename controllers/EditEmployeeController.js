employeeApp.controller('EditEmployeeController', function ($scope, $state, $stateParams, EmployeeDetailsService) {
    console.log('EditEmployee');

    // Update Profile
    $scope.updateProfile = function () {
        $scope.$parent.fullName = $scope.fullName;
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
        $state.go('Admin.EmployeeDetails.Profile');
    }
});
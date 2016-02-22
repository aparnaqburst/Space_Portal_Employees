employeeApp.controller('EmployeeProfileController', function ($scope, $state) {
    console.log('Profile');

    // Edit Profile
    $scope.editProfile = function () {
        $state.go('Admin.EmployeeDetails.EditProfile');
    }
});
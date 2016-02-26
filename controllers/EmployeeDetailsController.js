
employeeApp.controller('EmployeeDetailsController', function ($scope, $http, $stateParams, $state, EmployeeDetailsService) {
    console.log('EmployeeDetailsController');

    $scope.designationList = [
    { name: 'Senior Engineer', value: '1' },
    { name: 'Lead Engineer', value: '2' },
    { name: 'Associate Architect', value: '3' },
    { name: 'Architect', value: '4' },
    ];
    // $scope.designation = $scope.designationList[0].value; // default

    $scope.departmentList = [
            { name: 'Production', value: '1' },
            { name: 'Development', value: '2' },
            { name: 'Accounting and Finance.', value: '3' },
            { name: 'Purchasing', value: '4' },
    ];
    //$scope.department = $scope.departmentList[0].value; // default

    $scope.streamList = [
            { name: '.Net', value: '1' },
            { name: 'Php', value: '2' },
            { name: 'Java', value: '3' },
    ];
    //$scope.stream = $scope.streamList[0].value; // default

    $scope.ExperienceYears = [];
    $scope.GetExperienceYears = function() {
        for (var i = 0; i <= 50; i++) {
            $scope.ExperienceYears.push(i);
        }
    }
    $scope.GetExperienceYears();

    $scope.ExperienceMonths = [];
    $scope.GetExperienceMonths = function () {
        for (var i = 0; i <= 11; i++) {
            $scope.ExperienceMonths.push(i);
        }
    }
    $scope.GetExperienceMonths();

    $scope.employeeList = [];
    var selectedEmployeeId = localStorage.getItem("EmployeeId")//$rootScope.LoginId; //$stateParams.id; //$location.search()['id'];

    $scope.employeeSkills = [];
    $scope.getEmployee = function () {
        return EmployeeDetailsService.getEmployeeList().then(
                    function (response) {
                        $scope.employeeList = response;
                        angular.forEach($scope.employeeList, function (employee) {
                            if (employee.EmployeeId == selectedEmployeeId) {
                                $scope.fullName = employee.FullName;
                                $scope.id = employee.EmployeeId;
                                $scope.designation = employee.Designation;
                                $scope.department = employee.Department;
                                $scope.stream = employee.Stream;
                                $scope.experienceInYears = employee.ExperienceInYears;
                                $scope.experienceInMonths = employee.ExperienceInMonths;
                                $scope.mobile = employee.Mobile;
                                $scope.residence = employee.Residence;
                                $scope.skypeId = employee.SkypeId;
                                $scope.address = employee.Address;
                                $scope.employeeSkills = employee.Skills;
                            }
                        });
                    },
                     function (errResponse) {
                         console.error('Error');
                     }
              )
    };
    $scope.getEmployee();


    ////// Edit Profile
    ////$scope.editProfile = function () {
    ////    $state.go('.EditProfile');
    ////}
    //if ($state.is('Admin.EmployeeDetails') || $state.is('Employee.EmployeeDetails')) {
    //    $state.go('Employee.EmployeeDetails.Profile');
    //}
  // $state.go('.Profile');
});

    


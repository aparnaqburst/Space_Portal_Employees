
employeeApp.controller('EmployeeDetailsController', function ($scope, $http, $stateParams, $state, EmployeeDetailsService) {
    console.log('EmployeeDetailsController');

    $scope.designationList = [
    { name: 'Senior Engineer', value: '1' },
    { name: 'Lead Engineer', value: '2' },
    { name: 'Associate Architect', value: '3' },
    { name: 'Architect', value: '4' },
    ];

    $scope.departmentList = [
            { name: 'Production', value: '1' },
            { name: 'Development', value: '2' },
            { name: 'Accounting and Finance.', value: '3' },
            { name: 'Purchasing', value: '4' },
    ];

    $scope.streamList = [
            { name: '.Net', value: '1' },
            { name: 'Php', value: '2' },
            { name: 'Java', value: '3' },
    ];

    $scope.genderList = [
            { name: 'Male', value: '1' },
            { name: 'Female', value: '2' },
    ];

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
    var selectedEmployeeId = $stateParams.employeeId;
    $scope.employeeSkills = [];

    $scope.getEmployee = function () {
        return EmployeeDetailsService.getEmployeeListFromLocalStoage().then(
                    function (response) {
                        $scope.employeeList = response;
                        angular.forEach($scope.employeeList, function (employee) {
                            if (employee.EmployeeId == selectedEmployeeId) {
                                $scope.fullName = employee.FullName;
                                $scope.id = employee.EmployeeId;
                                $scope.email = employee.Email;
                                $scope.gender = employee.Gender;
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
});

    


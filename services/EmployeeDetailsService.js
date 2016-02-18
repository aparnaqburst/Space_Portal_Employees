
employeeApp.service('EmployeeDetailsService', function ($http) {
    this.getEmployeeList = function () {
        return $http.get('./assets/json/employee.json')
                .then(
                        function (response) {
                            return response.data;
                        },
                        function (errResponse) {
                            console.error('Error');
                        }
                );
    }

    this.getbookedRoomsList = function () {
        return $http.get('./assets/json/BookMeetingRoom.json')
        .then(
            function (response) {
                return response.data;
            },
            function (errResponse) {
                console.error('Error fetching booked meeting rooms');
            }
        );
    }
});

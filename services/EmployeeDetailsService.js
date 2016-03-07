
employeeApp.service('EmployeeDetailsService', function ($http, $q) {
    var deferred = $q.defer();

    this.getEmployeeList = function () {
        return $http.get('./assets/json/employee.json')
                .then(
                        function (response) {
                            console.log('service call');
                            deferred.resolve(response.data);
                            return deferred.promise;
                        },
                        function (errResponse) {
                            console.error('Error');
                            deferred.reject(errResponse);
                            return deferred.promise;
                        }
                );
    }

    this.getEmployeeListFromLocalStoage = function () {
        if (localStorage.getItem('EmployeeList') == null) {
            console.log('local storage is null');
            $http.get('./assets/json/employee.json')
                    .then(
                            function (response) {
                                console.log('get employee list from json file');
                                localStorage.setItem("EmployeeList", JSON.stringify(response.data));
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.error('Error');
                                deferred.reject(errResponse);
                            }
                    );
        }
        else {
            console.log('local storage is not null');
            var empList = localStorage.getItem('EmployeeList');
            deferred.resolve(JSON.parse(empList));
        }

        return deferred.promise;
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

    this.getSkillset = function () {
        return $http.get('./assets/json/Skills.json')
        .then(
        function (response) {
            return response.data;
        },
        function (errResponse) {
            console.error('Error fetching skills');
        }
        );
    }
});

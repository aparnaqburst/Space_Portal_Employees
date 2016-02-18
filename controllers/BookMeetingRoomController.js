employeeApp.controller('BookMeetingRoomController', function ($scope, EmployeeDetailsService, $http, ngTableParams) {
    $scope.meetingRooms = [];
    $scope.bookings = [];
    $http.get('./assets/json/MeetingRooms.json')
    .then(function (response) {
        $scope.meetingRooms = response.data;
        $scope.meetingRoom = $scope.meetingRooms[0]; // Doubt? Why this is required since we are already setting in HTML. Its not working otherwise
    });

    $scope.timeDurations = [{
        id: '1',
        name: '9:00 - 9:30'
    },
        {
            id: '2',
            name: '9:30 - 10:00'

        },
        {
            id: '3',
            name: '10:30 - 11:00'

        },
        {
            id: '4',
            name: '11:00 - 11:30'

        },
        {
            id: '5',
            name: '11:30 - 12:00'

        },
        {
            id: '6',
            name: '12:00 - 12:30'

        },
        {
            id: '7',
            name: '12:30 - 13:00'

        },
        {
            id: '8',
            name: '13:00 - 13:30'

        },
        {
            id: '9',
            name: '13:30 - 14:00'

        }
        ,
        {
            id: '10',
            name: '14:00 - 14:30'

        },
        {
            id: '11',
            name: '14:30 - 15:00'

        }
        ,
        {
            id: '10',
            name: '14:00 - 14:30'

        },
        {
            id: '11',
            name: '14:30 - 15:00'

        }
        ,
        {
            id: '12',
            name: '15:00 - 15:30'

        },
        {
            id: '13',
            name: '15:30 - 16:00'

        }
        ,
        {
            id: '14',
            name: '16:00 - 16:30'

        },
        {
            id: '15',
            name: '16:30 - 17:00'

        }]
    $scope.selectedTime = $scope.timeDurations[0];
    $scope.Save = function () {

    };
    $scope.Save();

    $scope.fetchBookings = function () {
        EmployeeDetailsService.getbookedRoomsList().then(
            function(data){
                $scope.bookings = data;

                $scope.bookingsTable = new ngTableParams({
                    page: 1,
                    count: 10
                }, {
                    total: $scope.bookings.length,
                    getData: function ($defer, params) {
                        $scope.data = $scope.bookings.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        $defer.resolve($scope.data);
                    }
                });
            },
            function (error) {
                console.log("Error while fetching meeting rooms");
            }
        )
    }

    $scope.fetchBookings();

});
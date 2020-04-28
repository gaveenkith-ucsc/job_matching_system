app.service('guideSeekerService', function ($http, loginSessionService) {
    this.viewSeekers = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'nic_no': loginSessionService.user_index
            },
            url: 'App/Backend/User/viewSeekersGuidanceApi.php'
        });
    }
});
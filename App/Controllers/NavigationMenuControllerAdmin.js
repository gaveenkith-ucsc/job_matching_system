app.controller('collapseDemoCtrlAdmin', function ($scope, $location, loginSessionService) {
    $scope.isCollapsedProfile = true;
    $scope.isCollapsedVideo = true;
    $scope.changePassword = function () {
        $location.path("/editadminprofile");
    }
    $scope.addVideo = function () {
        $location.path("/addvideo");
    }
});
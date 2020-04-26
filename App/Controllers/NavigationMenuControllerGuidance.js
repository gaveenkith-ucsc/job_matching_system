app.controller('collapseDemoCtrlGuidance', function ($scope, $location) {
    $scope.isCollapsedProfile = true;

    $scope.editProfile = function () {
        $location.path("/editguidanceprofile");
    }

    $scope.changePassword = function () {
        $location.path("/changeguidancepassword");
    }
    $scope.changePhoto = function () {
        $location.path("/changeguidancephoto");
    }

});
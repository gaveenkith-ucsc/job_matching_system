app.controller('collapseDemoCtrlSeeker', function ($scope, $location) {
    $scope.isCollapsedProfile = true;

    $scope.editProfile = function () {
        $location.path("/editgraduateseekerprofile");
    }

    $scope.changePassword = function () {
        $location.path("/changeseekerpassword");
    }
    $scope.changePhoto = function () {
        $location.path("/changeseekerphoto");
    }

});
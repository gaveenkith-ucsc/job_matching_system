app.controller('collapseDemoCtrl', function ($scope, $location) {
    $scope.isCollapsedProfile = true;

    $scope.editProfile = function () {
        $location.path("/editemployerprofile");
    }

    $scope.changePassword = function () {
        $location.path("/changeemployerpassword");
    }

});
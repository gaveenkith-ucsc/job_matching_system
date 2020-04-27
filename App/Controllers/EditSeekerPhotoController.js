app.controller("editSeekerPhotoController", function ($scope, seekerProfileService, loginSessionService, $location, $window) {
    $scope.name = "Select Files to Upload";
    $scope.images = [];
    $scope.display = $scope.images[$scope.images.length - 1];
    $scope.setImage = function (ix) {
        $scope.display = $scope.images[ix];
    }
    $scope.clearAll = function () {
        $scope.display = '';
        $scope.images = [];
    }
    $scope.random = 1;
    $scope.showimg = false;
    seekerProfileService.getPhoto(loginSessionService.user_index).then(function (obj) {
        console.log(obj);
        $scope.cphoto = "App/Backend/" + obj.data.records[0].photo + "?" + Math.random;
        $scope.showimg = true;
    });
    $scope.upload = function (obj) {
        var elem = obj.target || obj.srcElement;
        var file = elem.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            $scope.images[0] = e.target.result;
            $scope.display = e.target.result;
            $scope.$apply();
        }
        reader.readAsDataURL(file);
    }
    $scope.savePhoto = function () {
        seekerProfileService.savePhoto($scope.display).then(function (obj) {
            console.log(obj);
            if (obj.data.records[0].status == 'ok') {
                seekerProfileService.getPhoto(loginSessionService.user_index).then(function (obj) {
                    $scope.random = $scope.random + 1;
                    $scope.cphoto = "App/Backend/" + obj.data.records[0].photo + "?" + Math.random;
                    alert("Profile photo has been changed successfully.");
                    $location.path("/editseekerprofile");
                });
            }
        });
    }
});
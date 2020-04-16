app.controller('StudentReg2Controller', function ($scope, $location) {

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
});
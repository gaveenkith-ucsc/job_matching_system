app.controller('addVideoController', function ($scope, $location, loginSessionService, videoGalleryService) {
    $scope.saveVideo = function () {
        videoGalleryService.addVideo($scope.vname, $scope.link, $scope.description, $scope.author).then(function (obj) {
            console.log(obj);
            if (obj.data.records[0].status == 'ok') {
                alert("Video has been added successfully.");
                $scope.vname = "";
                $scope.link = "";
                $scope.description = "";
                $scope.author = "";
            } else {
                alert("Something went wrong. Please try again.");
                $scope.vname = "";
                $scope.link = "";
                $scope.description = "";
                $scope.author = "";
            }
        });
    }
});
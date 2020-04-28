app.controller('videoListController', function ($scope, $location, loginSessionService, videoGalleryService) {
    $scope.videolist = [];
    $scope.viewVideoList = function () {
        videoGalleryService.viewVideoList().then(function (obj) {
            $scope.videolist = obj.data.records;
            console.log($scope.videolist);
        });
    }
    $scope.viewVideoList();
});
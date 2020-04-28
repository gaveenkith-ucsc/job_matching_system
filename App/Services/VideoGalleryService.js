app.service('videoGalleryService', function ($http) {
    this.addVideo = function (name, link, description, author) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'name': name,
                'link': link,
                'description': description,
                'author': author
            },
            url: 'App/Backend/User/addVideoApi.php'
        });
    }

    this.viewVideoList = function () {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {

            },
            url: 'App/Backend/User/viewVideoListApi.php'
        });
    }

    this.viewSingleVideo = function (video_id) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'video_id':video_id
            },
            url: 'App/Backend/User/viewSingleVideoApi.php'
        });
    }

    this.updateVideo = function (video_id,link,description,author) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'video_id':video_id,
                'link': link,
                'description': description,
                'author': author
            },
            url: 'App/Backend/User/updateVideoApi.php'
        });
    }

    this.deleteVideo = function (video_id) {
        return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            data: {
                'video_id':video_id
            },
            url: 'App/Backend/User/deleteVideoApi.php'
        });
    }

});
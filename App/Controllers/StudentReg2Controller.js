app.controller('StudentReg2Controller', function ($scope, $location, $routeParams) {
    $scope.nextbuttonvalue = "";
    $scope.showadd1 = false;
    $scope.showadd2 = false;
    $scope.showadd3 = false;
    $scope.showmobile = false;
    $scope.showdob = false;
    $scope.showgender = false;
    $scope.showprofilephoto = false;
    $scope.showexperience = false;
    $scope.showaboutorganization = false;
    $scope.user_type = $location.search().usertype;

    if ($scope.user_type == "Job Seeker") {
        $scope.showadd1 = true;
        $scope.showadd2 = true;
        $scope.showadd3 = true;
        $scope.showmobile = true;
        $scope.showdob = true;
        $scope.showgender = true;
        $scope.showprofilephoto = true;
        $scope.nextbuttonvalue = "Next";
    }
    if ($scope.user_type == "Career Guidance Officer") {
        $scope.showadd1 = true;
        $scope.showadd2 = true;
        $scope.showadd3 = true;
        $scope.showmobile = true;
        $scope.showdob = true;
        $scope.showgender = true;
        $scope.showprofilephoto = true;
        $scope.showexperience = true;
        $scope.nextbuttonvalue = "Submit";
    }
    if ($scope.user_type == "Employer") {
        $scope.showadd1 = true;
        $scope.showadd2 = true;
        $scope.showadd3 = true;
        $scope.showmobile = true;
        $scope.showaboutorganization = true;
        $scope.nextbuttonvalue = "Submit";
    }

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
    $scope.back = function () {
        $location.path("/login");
    }
    $scope.next = function () {
        if ($scope.user_type == "Job Seeker") {
            $location.path("/regstep3");
        } else {
            alert("ok");
        }

    }
    $scope.prop = {
        "type": "select",
        "name": "Service",
        "value": "Select from here",
        "values": ["Select from here", "Male", "Female"]
    };
});
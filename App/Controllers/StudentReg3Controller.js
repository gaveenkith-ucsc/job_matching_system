app.controller('StudentReg3Controller', function ($scope, $location, $filter) {
    $scope.institute = "";
    $scope.certificateno = "";
    $scope.completedyear = "";
    $scope.showerrormsg = false;
    $scope.errormsg = "";
    $scope.showerrormsg2 = false;
    $scope.errormsg2 = "";
    $scope.sector = {
        "type": "select",
        "name": "Service",
        "value": "Select from here",
        "values": ["Select from here", "Agriculture,Hunting and Forestry", "Fishing", "Mining and Quarrying", "Manufactory",
            "Electricity, Gas and Water Supply", "Construction", "Wholesale and Retail Trade", "Hotel and Restaurants",
            "Transport,Storage and Communications", "Financial Inter-mediation", "Real Estate and Renting", "Public Administration",
            "Education", "Health", "Computing"]
    };

    $scope.qtype = {
        "type": "select",
        "name": "Service",
        "value": "Select from here",
        "values": ["Select from here", "Higher Diploma", "Diploma", "Certificate"]
    };
    $scope.qualifications = [];

    $scope.addQualification = () => {
        $scope.qualifications.push({
            sector: $scope.sector.value,
            type: $scope.qtype.value,
            institute: $scope.institute,
            certificateno: $scope.certificateno,
            completedyear: $scope.completedyear
        });

        console.log($scope.qualifications);
    }
    $scope.back = function () {
        $location.path("/regstep2");
    }
    $scope.next = function () {
        $scope.showerrormsg = false;
        console.log($scope.qualifications);
        if ($scope.qualifications.length > 0) {
            $scope.showerrormsg2 = false;
            $location.path("/endregistration");
        } else {
            $scope.showerrormsg2 = true;
            $scope.errormsg2 = "Please add at least one qualification to the list.";
        }

    }
    $scope.formValidation = function () {
        $scope.showerrormsg2 = false;
        if ($scope.institute.length == 0 || $scope.certificateno.length == 0 || $scope.completedyear.length == 0
            || $scope.sector.value == "Select from here" || $scope.qtype.value == "Select from here") {
            $scope.showerrormsg = true;
            $scope.errormsg = "Please fill all required fields";
        } else {
            $scope.addQualification();
        }
    }
});

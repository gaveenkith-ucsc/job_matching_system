app.controller('StudentReg3Controller', function ($scope, $location, $filter) {

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
        $location.path("/endregistration");
    }
});

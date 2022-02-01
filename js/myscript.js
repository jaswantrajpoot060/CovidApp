//https://www.pay2all.in/web-api/get-circle?api_token=11iKdqQ00tbKRHpsNdseblf3wSuYnN24OTmDNVwb96XPRMyZEmGu2OumdOKk

const URL = "https://covid19.mathdro.id/api";
//const URL ="https://api.covidtracking.com/v1/us/daily.json";

let app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http) => {
    //this is controlle 
    $scope.title = "Stay Home Stay Safe";

    $scope.changeValue = () => {
        $scope.title = "This is home time";
    };
    console.log("APP Loaded");

    //calling api

    $http.get(URL).then(
        (response) => {
            //success
            console.log(response.data);

            $scope.all_data = response.data;
        },
        (error) => {
            //error
            console.log(error);
        }
    );
    // get country

    $scope.get_c_data = () => {
        // console.log($scope.c);
        let country = $scope.c;
        if (country == "") {
            $scope.c_data = undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`).then(
            (response) => {
                console.log(response.data);
                $scope.c_data = response.data;
            },
            (error) => {
                console.log(error);
            }
        );
    };
    
});


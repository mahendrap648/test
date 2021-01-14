
(() =>{
    const app = angular.module('SPStudentApp', ["ngRoute"]);
    app.config(function ($routeProvider) {
        // .when("/", {
        //     templateUrl: "./index.html"
        // })
        $routeProvider
        .when("/attandance", { 
            templateUrl: "./template/attendance/attendance.html"
        })
        .when("/result", {
            templateUrl: "./template/result/result.html"
        })

        .when("/notice", {
            templateUrl: "./template/notice/notice.html"
        })
        .when("/rollno", {
            templateUrl: "./template/rollno/rollno.html"
        })
        .when("/fee", {
            templateUrl: "./template/fee/fee.html"
        })
        .when("/acadmic", {
            templateUrl: "./template/acadmic/acadmic.html"
        })
    });   
    })();
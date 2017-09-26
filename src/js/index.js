angular.module("myApp",
  [
    "ngRoute",
    "in_theaters",
    "coming_soon",
    "search",
    "service"
  ])
  .config(["$routeProvider",function($routeProvider){
    $routeProvider
      //正在热映
      .when("/in_theaters/:page",{
        templateUrl:"views/in_theaters/in_theaters.html",
        controller:"in_theatersCtrl"
      })
      //即将上映
      .when("/coming_soon/:page",{
        templateUrl:"views/coming_soon/coming_soon.html",
        controller:"coming_soonCtrl"
      })
      //搜索页面
      .when("/search/:page/:keyword",{
        templateUrl:"views/search/search.html",
        controller:"searchCtrl"
      })
      .otherwise("/in_theaters/1");
  }])
  // 公共搜索跳转
  .controller("commonCtrl",["$scope","$location","$routeParams",function($scope,$location,$routeParams){
    $scope.search = function(){
      $location.path("/search/1/"+$scope.keyword);
    }
  }])







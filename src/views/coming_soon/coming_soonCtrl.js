angular.module("coming_soon",[])
//即将上映
  .controller("coming_soonCtrl",["$scope","myService","$routeParams","$location",function($scope,myService,$routeParams,$location){

    ////$routeParams为传入参数的集合
    //console.log($routeParams);

    var page = Number($routeParams.page);
    var count = 10;
    var start = (page-1)*count;
    //最大页数
    var maxPage = 0;
    myService.jsonp("https://api.douban.com/v2/movie/coming_soon",{count:count,start:start},function(data){
      //console.log(data);
      $scope.result = data;
      maxPage = Math.ceil($scope.result.total/$scope.result.count);
      //使用原生js操作DOM后，需要调用$scope.$apply()方法告知angularJs
      $scope.$apply();
    });
    //分页
    //根据传入的参数不同,page对应增减
    $scope.changePage = function(type){
      if(type == "prev"){
        //上一页
        page--;
        if(page < 1){
          page = 1;
        }
      }else if(type == "next"){
        //下一页
        page++;
        if(page > maxPage){
          page = maxPage;
        }
      }
      $location.path("/coming_soon/"+ page);

    }

  }])

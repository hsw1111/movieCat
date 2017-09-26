angular.module("service",[])
  //抽象公共代码
  .service("myService",[function(){

    //封装jsonp方法
    this.jsonp = function(url,data,callback){
      var fnName = 'myJsonp_'+ Math.random().toString().replace(".","");
      window[fnName] = callback;
      var str = "";
      for (var key in data) {

        str += key + "=" + data[key] + "&"
      };
      var script = document.createElement("script");
      script.src= url + "?" + str + "callback=" + fnName;
      document.body.appendChild(script);
      script.onload = function(){
        document.body.removeChild(script);
      }
    }
  }])

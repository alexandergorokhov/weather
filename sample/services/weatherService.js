angular.module('adf.widget.weatherService', ['adf.provider','adf.widget.weather'])
  .service('weatherService', function($q, $http, weatherServiceUrl, weatherApiKey){
  return {
    get: function(location){
      var deferred = $q.defer();
      var url = weatherServiceUrl + location + '&appid=' + weatherApiKey;
      $http.jsonp(url)
        .success(function(data){
          if (data && data.cod === 200){
            deferred.resolve(data);
          } else {
            deferred.reject();
          }
        })
        .error(function(){
          deferred.reject();
        });
      return deferred.promise;
    }
  };
})

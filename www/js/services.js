angular.module('StockWatcher.services', [])

.factory('stockDataService', function($q, $http){

var getPriceData = function(ticker){

    var deferred = $q.defer(),
    url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22"+ ticker +"%22)&format=json&env=http://datatables.org/alltables.env";

    console.log("attempting to get data for ticker: " + ticker );

 $http.get(url)
    .success(function(json){
      console.log("success getting json");
      //console.log(json);
      var jsonData = json.query.results.quote;
      deferred.resolve(jsonData);
    })
    .error(function(){
      console.log("error getting json" + error);  
      deferred.reject();
    });

    return deferred.promise;
};

return { 
    getPriceData: getPriceData
};

});


;
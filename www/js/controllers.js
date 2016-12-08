angular.module('StockWatcher.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

   $scope.playlists = [
    { title: 'test1', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  console.log("app ctrl");
})

.controller('MyStocksCtrl', ['$scope', 
function($scope) {
  $scope.myStocksArray = [
    {ticker: "FBS"},
    {ticker: "NFLX"},
    {ticker: "GPRO"},
    {ticker: "GOOG"},
    {ticker: "APL"},
    {ticker: "NKE"},
    {ticker: "TSLA"},
    {ticker: "ION"},
    {ticker: "IBM"},
    {ticker: "RASP"}
  ];
  console.log("my stocks ctrl");
}])

.controller('StockCtrl', [
  '$scope',
  '$stateParams',
  '$http',
   function($scope, $stateParams, $http) {

   // http://finance.yahoo.com/webservice/v1/symbols/YHOO/quote?bypass=true&format=json&view=detail
   console.log("trying to get json");
   
   $http.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22)&format=json&env=http://datatables.org/alltables.env", '')
    .then(function(jsonData){
      console.log("getting json");
      console.log(jsonData);

    });


  $scope.ticker = $stateParams.stockTicker;
  console.log("stock ctrl");
  
}]);

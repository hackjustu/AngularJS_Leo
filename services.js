// Services
weatherApp.service('cityService', function() {
    
    this.city = 'New York, NY';
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=6f169dc7575003b0e9803c1be4209fd2", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
        
        return weatherAPI.get({ q: city, cnt: days });
    };
    
}]);
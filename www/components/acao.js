
var longitude, latitude;
$(document).on("click","#click-map",function(){
   var onSuccess = function(position) {
     longitude = position.coords.longitude;
     latitude = position.coords.latitude; 
     L.mapquest.key = '	3xGFm0AXZ6RqTWt6AFFGLeJ061cHjG3U';
     var map = L.mapquest.map('map', {
       center: [latitude, longitude],
       layers: L.mapquest.tileLayer('dark'),
       zoom: 12
     });
     map.addControl(L.mapquest.control());
 
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        navigator.notification.alert('codigo: '    + error.code    + '\n' +
              'menssagem: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

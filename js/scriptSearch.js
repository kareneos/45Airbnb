$(document).ready(function(){
    $('#serchNavbar').css({"display":"inline"});
    //calendar
    $('input[name="dayTrip"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    }, 
    function(start, end, label) {
        
    });
    //map
    var mapOptions = {
        center: new google.maps.LatLng(37.7831, -122.4039),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    new google.maps.Map(document.getElementById('map'), mapOptions);
})
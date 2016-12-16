$(document).ready(function(){
    $('#serchNavbar').css({"display":"inline"});
    //calendar
    $('input[name="dayTrip"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    }, 
    function(start, end, label) {
        
    });
})
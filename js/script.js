$(document).ready(function(){
    //calendar
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker)   {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
    //search in navbar
    var a = $("#experiences").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > a)
        {   
           $('#serchNavbar').css({"display":"inline"});
        } else {
           $('#serchNavbar').css({"display":"none"});
        }
    });
    //send to serch page
    $('#textbox').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            window.open("search.html");
        }
    });
})
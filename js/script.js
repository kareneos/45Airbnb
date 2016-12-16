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
    //
    var a = $(".nav").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > a)
        {   
           $('.nav').css({"background":"red"});
        } else {
           $('.nav').css({"background":"transparent"});
        }
    });
})
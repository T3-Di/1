$(document).ready(function() {
    $('.datepicker1').datepicker({
        uiLibrary: 'bootstrap4'
    });

    $('.datepicker2').datepicker({
        uiLibrary: 'bootstrap4'
    });

    var imgs = $('.imageZoom');
    $.each(imgs, function() {
        $(this).imageZoom(); 
    });
});
$(document).ready(function () {
    $(".show-modal").click(function () {
        $("#form-modal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });
});

$('.btn-process').on('click', function () {
    var $this = $(this);
    $this.button('loading');
});

$(document).ready(function () {
    try {
        $("input[type='text']").each(function () {
            $(this).attr("autocomplete", "off");
        });
    }
    catch (e) { }
});

setTimeout(function () {
    $('#myAlertDiv').fadeOut('slow');
}, 3000); // <-- time in milliseconds

$('.btn-process').on('click', function () {
    var $this = $(this);
    $this.button('loading');
});
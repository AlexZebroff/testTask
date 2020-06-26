$(document).ready(function () {
    $(".lookMap").hover(function (params) {
        $("#map").fadeIn();
        $("#map").mouseout(function (params) {
            $(this).fadeOut(2000)
        })
    })
    $(".hint").click(function (params) {
        $(".hintMessage").toggleClass("hintMessageActive");
   });

})
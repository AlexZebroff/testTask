$(document).ready(function () {
    $(".mapContainer").hover(function () {
        $(".map").stop().fadeIn(200);
    });

    $(".mapContainer").mouseleave(function () {
        $(".map").stop().fadeOut(500);
    })

    $(".hint").hover(function () {
        $(".hintMessage").toggleClass("hintMessageActive");
   });

    $(".openPopup").click(function () {
        $(".generalWrap").css("filter", "blur(5px)");
        $(".popupWindow").fadeIn(500);
    });

    $("#popupForm").submit(function (event) {
        event.preventDefault();
    })

    $(".close1").click(function () {
        $(".popupWindow").fadeOut(200);
        $(".generalWrap").css("filter", "none");
    });

    $("#popupForm").submit(function (event) {
        event.preventDefault();
        $(".popupWindow").fadeOut(100);
        $(".recievedWindow").fadeIn(500);
        $(".close2").click(function () {
            $(".recievedWindow").fadeOut(500);
            $(".generalWrap").css("filter", "none");
        })   
    })

    $(".burger").click(function () {
        $(this).toggleClass("burger_active");
       $(".mainMenu").toggleClass("active");
   });

    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        scale: 3,
        overflow: true
    });

    var image2 = document.getElementsByClassName('thumbnail2');
    new simpleParallax(image2, {
        scale: 3,
        overflow: true
    }); 

})
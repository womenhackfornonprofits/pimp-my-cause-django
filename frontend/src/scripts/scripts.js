$(window).on("load", function() {


 //**********
 //HERO PANEL
 //**********

    //rotating the cubes on the front hero panel using a timer

    //THIS IS CAUSING BUGS


    var topLeft = $(".cube").eq(0);
    var topRight = $(".cube").eq(1);
    var bottomLeft = $(".cube").eq(2);
    var bottomRight = $(".cube").eq(3);

    setInterval(function () {

        topLeft.toggleClass("active");
        bottomRight.toggleClass("active");
        topRight.toggleClass("active");
        bottomLeft.toggleClass("active");

    }, 2500);



    //*******************************
    //REGISTRATION - FORM VALIDATION
    //*******************************

    //validate city or postcode field - when none of these two fields is populated give an error

    $( "#registrationform" ).submit(function() {
      if ( $(".js-city").val().length == 0 && $(".js-postcode").val().length == 0 ) {
        $("#cp-error-msg").show();
        return false;
      }
    });


// //  *******************************
// //  FEATURED CAUSES/MARKETERS PANEL
// //  *******************************

// // Fade Responsive Slider

//     $('.fade').slick({
//         autoplay: true,
//         autoplaySpeed: 800,
//         pauseOnHover: true,
//         pauseOnFocus: true,
//         arrows: false,
//         dots: true,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear'
//     });

});

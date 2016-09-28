$(window).on("load", function() {
    document.documentElement.classList.add('js');
    
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

    }, 2000); 

    // Input File
    var inputs = document.querySelectorAll( '.js-input-file' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label    = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
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

    

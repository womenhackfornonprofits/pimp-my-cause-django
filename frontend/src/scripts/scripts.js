$(window).on("load", function() {
    
    
//  ********** 
//  HERO PANEL 
//  ********** 
    
// LHS - Register - Join for Free
    
    // hide first item in select - duplicate
    $(".selectBox-dropdown-menu").find("li:first-child").remove();
    
    // rotating the cubes on the front hero panel using a timer
        
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
    
    
//  ******************************* 
//  SUMMARY - HAVE YOU SEEN - PANEL 
//  ******************************* 
    
//  toggle click-event class to element to perform slide up functionality displaying summary info on click
      
    $('.summary-title').on('click', function () {
        $(this).toggleClass('click-event');
    });
    
    $('.summary-info').on('click', function () {
        $(this).toggleClass('click-event');
    });
    

//  *******************************
//  FEATURED CAUSES/MARKETERS PANEL 
//  ******************************* 
        
// Fade Responsive Slider
    
    $('.fade').slick({
        autoplay: true,
        autoplaySpeed: 800,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
});


// **************** 
// TALK ABOUT PANEL 
// **************** 
 
// Twitter widget

// Tweets from pimp my cause

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// dynamically insert stylesheet

CustomizeTwitterWidget = function() {
    var timeout = 300; // check every 300ms to see if iFrame is loaded => 1sec = 1000ms
    var max = 10000;   // gives up checking for iFrame after 10000ms => 10 seconds
    
    var waitForTwitterFrame = function(timeSoFar) {
        var found = false;
        
        // keep looping until found twitter widget iFrame found - window.frames
        // loops every 300ms check frames been loaded in - timeout in 10 sec
        for (var i = 0; i < frames.length && !found; i++) {
            try {
                var frame = frames[i], doc = frame.document;
                if (frame.frameElement.id.indexOf('twitter-widget') >= 0 && doc.body) {
                    var link = doc.createElement("link");
                    link.href = '/styles/styles.css';
                    link.rel = "stylesheet";
                    link.type = "text/css";
                    doc.getElementsByTagName("head")[0].appendChild(link);
                    found = true;
                }
            } catch (err) {

            }
        }
        if (!found && timeSoFar < max) { 
            timeSoFar += timeout;
            setTimeout(function() { waitForTwitterFrame(timeSoFar); }, timeout);
        }
    }
    setTimeout(function() { waitForTwitterFrame(timeout); }, timeout);
};
// call function
CustomizeTwitterWidget();
    

// Twitter widget - this needs a refactor/moving to backend even as it is injecting css.
//
//
//    TO DO
//
//
//

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
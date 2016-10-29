$(window).on("load", function() {
    document.documentElement.classList.add('js');
    
    //********** 
    //HERO PANEL 
    //********** 
    //rotating the cubes on the front hero panel using a timer

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

    //navigatin toggle

    const navigation = document.getElementsByClassName('js-header-nav')[0];
    const menuEl = document.getElementsByClassName('js-header-list')[0]

    navigation.addEventListener('click', function (event) {
        const srcElementClass = event.target.className;
        if (srcElementClass.match('js-nav-toggle')) {
            menuEl.classList.toggle('navigation__menu--mobile')
        } else {
            menuEl.classList.remove('navigation__menu--mobile')
        }
    });

});

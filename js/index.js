$('a').click(function(){
    $('body > div').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.people li').click( function() {
  var $p = $( this ).children( 'p' );
  if( $p.hasClass( 'hidden' ) ) {
    $p.removeClass( 'hidden' );
    $( this ).addClass( 'clearfix' );
  } else {
    $p.addClass( 'hidden' );
    $( this ).removeClass( 'clearfix' );
  }
});
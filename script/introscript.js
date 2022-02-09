var vid = document.getElementById( 'bgvid' ),
    vid2 = document.getElementById( 'content' );

vid.onended = function() {
   vid2.style.display = "block"
    document.getElementById( 'headline2' ).innerHTML = 'stuff';
    document.getElementById( 'headline3' ).innerHTML = 'stuff';
}
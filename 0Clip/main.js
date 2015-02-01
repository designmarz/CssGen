var clientText = new ZeroClipboard( $("#text-to-copy"), {
    moviePath: "ZeroClipboard.swf",
    debug: false
} );

clientText.on( "load", function(clientText)
{
    $('#flash-loaded').fadeIn();

    clientText.on( "complete", function(clientText, args) {
        clientText.setText( args.text );
        $('#text-to-copy-text').fadeIn();
    } );
} );
$(document).ready(function() {


// hex to RGB converter //


hexToRgb = function(hex) {
    // Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

// hex to RGB converter //

// Set defualt CSS values //
setStart = function(){
		$('#longShad').css('text-shadow', '#000000 10px 10px 10px');
		};

// set longShd to 
longShadow = function(){
	var	 leftRight = $('#longShd1').val();
	var	 topDown = $('#longShd2').val();
	var	 gradValue = $('#longShd3').val();
	var	 shadowColor = '#'+$('#longShd4').val();
	var  GradCheck = shadowColor;
	var	 gradYesNo = $('#insetBox').prop('checked');
	var outCode = $('#longShad');
	$('#longShad').css({'text-shadow': shadowColor+' '+leftRight+' '+topDown+' '+ gradValue });
	
	
	liveCodeOut = function(){
	$('#codeOut4').html( '<p>{<br>text-shadow: '+ leftRight+'px' +' '+ topDown+'px' +' '+ gradValue +
		' '+ shadowColor + ';<br> }</p>');
	};
};
	




longShadowGenerator = function(){
	loopTimes = $('#longShd3').val();
	var x = parseInt(loopTimes,10);
for (var i = 0; i < x; i++) {
	// console.log(loopTimes );
	console.log(x);
	console.log("----------- Next Batch -----------");
	// console.log(x +2);
	// console.log(x +5);
	// console.log(('#longShd1').val());
	// console.log(('#longShd1').val()+4);
	// gradLength[i];
}
};

$('body').change(shadowApply = function(){
	$( '#longShd1' ).change(function() {
		// leftRight = $('#longShd1').val()+'px';
		console.log( 'Handler for .change() called. ' + leftRight );
		
	});
	$( '#longShd2' ).change(function() {
		// topDown = $('#longShd2').val()+'px';
		console.log( 'Handler for .change() called. ' + topDown );
		
	});
	$( '#longShd3' ).change(function() {
		// gradValue = $('#longShd3').val()+'px';	
		console.log( 'Handler for .change() called. ' + gradValue );
		
	});
	$( '#longShd4' ).change(function() {
		shadowColor = '#'+ $('#longShd4').val();	
		console.log( 'Handler for .change() called. ' + shadowColor );
		
	});
	$( '#insetBox' ).change(function() {
		var	 gradYesNo = $('#insetBox').prop('checked');	
		console.log( 'Handler for .change() called. ' + gradYesNo );
		console.log('hex to rgb '+	shadowColor);
		
	});
	longShadow();
	liveCodeOut();
	longShadowGenerator();
});

setStart();
shadowApply();

});
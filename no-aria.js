var MATCH_TICKER_INTERVAL = 1;  // in seconds
var SCORE_UPDATE_INTERVAL = 10; // in seconds

var $minElapsed = $( ".minutes-elapsed" );
var $matchScore = $( ".match-score" );
var $homeScore  = $( ".score--home div" ).eq( 1 )

var matchInterval = setInterval( function() {

	var curr = $minElapsed.text();
	var next = parseInt( curr, 10 ) + 1;

	if( next === 91 ) {
		clearInterval( matchInterval );
		$minElapsed.parent().text( "Match ended!" );
	}
	else {
		$minElapsed.text( next );
	}

}, MATCH_TICKER_INTERVAL * 1000 );


setTimeout( function() {

	var curr = $homeScore.text();
	var next = parseInt( curr, 10 ) + 1;
	$homeScore.text( next );

}, SCORE_UPDATE_INTERVAL * 1000 );
'use strict';

$(document).ready(function() {

	var stateFlag = true;
	var step = 0;

	// previous random glyph
	var prev;

	var sentences = [
		"You mean the world to me\u2E43", // love point
		"God damn it you've got to be kind\u2E44", // certitude point
		"Inertia is a property of matter\u2E45", // authority point
		"This is so much fun\u2E46", // irony point
		"Congratulations\u2E47", // acclamation point
		"It all seems very dubious\u2E48" // doubt point
	];
	var sIdx = 0 | (Math.random() * sentences.length);
	var cIdx = 0;

	setInterval(function () {
		if (stateFlag) {
			// display a random glyph without repeating consecutively
			var unicode;
	        while ((unicode = 0 | (Math.random() * 6) + 0x2E43) == prev);
	        var ch = String.fromCharCode(unicode);
	        $("#delta").html(ch);
	        prev = unicode;
	        if (++step == 15) {
	        	stateFlag = !stateFlag;
	        	step = 0;
	        }
		}
        else {
        	// display the next sentence with associated glyph
        	if (sentences[sIdx].charAt(cIdx) == ' ') {
        		// don't waste time on spaces
        		cIdx++;
        	}
        	$("#delta").html(sentences[sIdx].substring(0, cIdx + 1));
        	cIdx++;
        	if (cIdx == sentences[sIdx].length) {
        		// hold the full sentence for 3 steps
        		if (step == 3) {
	        		cIdx = 0;
	        		sIdx++;
	        		stateFlag = !stateFlag;
	        		step = 0;
        		}
        		else {
        			cIdx--;
        			step++;
        		}
        	}
        	if (sIdx == sentences.length) {
        		sIdx = 0;
        	}
        }
    }, 150);
});
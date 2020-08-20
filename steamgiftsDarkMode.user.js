// ==UserScript==
// @name        steamgiftsDarkTheme
// @namespace   Violentmonkey Scripts: steamgiftsDarkTheme
// @match       https://www.steamgifts.com/*
// @match       https://www.steamgifts.com/discussion/jj5RA/why-there-are-no-dark-theme-in-steam-gifts
// @grant       none
// @version     ¯\_(ツ)_/¯
// @author      me
// @description poor man's dark mode for steamgifts. i offer no support whatsoever. dont liek it? fix it yourself :-P
// @run-at      document-end
// @grant       metadata
// @icon		data:image/jpeg;base64,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
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

/* Color guide:
 *		'#fcfdfd' - lighter color stolen from original page header bg
 *		'#677081' - medium dark color stolen from original navbar buttons
 * 		'#4a505c' - darker color stolen from original navbar bg
 */
var userSettings = {
    enableDebugLogging: true,
    initialDelayMs: 1,
	dontMessWithEnterGiveawayButton: true,
	dontMessWithRemoveGiveawayButton: false,
	styles: {
		// this is the only one you can safely delete:
		winningPollOptionOverrides: "background-color:#0f5 !important;background-image:none !important;border: 1px solid #fff;",
		
		//all of these are required:
    	textOverrides: "color: #fcfdfd !important",
    	backgroundOverrides: "background-color: #4a505c !important",
		buttonOverrides: "background-color:#677081 !important;background-image:linear-gradient(#8a92a1 0px, #757e8f 8px, #4e5666 100%)  !important;"
	}
};

if('object' !== typeof userSettings.styles) {
	console.error("steamgiftsDarkTheme: What the capital FUCK did you do?! The userSettings.style object is missing! Aborting ...");
	return;
}
var styles = userSettings.styles;
if('string' !== typeof styles.textOverrides) {
	console.error("steamgiftsDarkTheme: You deleted userSettings.style.textOverrides. Way to go, genius. Aborting ...");
	return;
}
if('string' !== typeof styles.backgroundOverrides) {
	console.error("steamgiftsDarkTheme: You deleted userSettings.style.backgroundOverrides. You fucking donkey. Aborting ...");
	return;
}
if('string' !== typeof styles.buttonOverrides) {
	console.error("steamgiftsDarkTheme: You deleted userSettings.style.buttonOverrides. Ok. Seriously. The fuck is wrong with you? Aborting ...");
	return;
}

// jQuery doesn't understand the css override directive "!important" and some site elements use this so only way to
// override is to either inject styles or append it to each and every in-line styles... so injecting styles it is.
var customHeaderStyles = '<style>\n';
customHeaderStyles += '   .userTextColorOverride, #thatOneAssholeButton {'+styles.textOverrides+'}\n';
customHeaderStyles += '   .userOppositeOfPatronus {'+styles.backgroundOverrides+'}\n';
customHeaderStyles += '   .userButtonOverride, #thatOneAssholeButton {'+styles.buttonOverrides+'}\n';

if('string' == typeof styles.winningPollOptionOverrides) {
	customHeaderStyles += '   #andTheWinrarIs {'+styles.winningPollOptionOverrides+'}\n';
}
customHeaderStyles += '</style>';
jQuery('head').append(customHeaderStyles);

// Make sure text is changed first
var textOverrides = jQuery('div, p, a, span, i, b, h3, li, .fa fa-bookmark, .page__heading__button--green');
textOverrides.addClass('userTextColorOverride');

// handle that one asshole button that refuses to be overridden by anything sort of assigning it an id
jQuery('.page__heading__button--green').attr('id', 'thatOneAssholeButton');

// handle all the other buttons that aren't such assholes... and other shit that we'll color the same as buttons
var buttonsAndShit = jQuery('.sidebar__action-button, .page__heading > div, .page__heading > a, .page__heading__button--green, .sidebar__search-container, .sidebar__search-container > input, .table__heading, .comment__description textarea, .comment__submit-button, .poll__vote-button, .pinned-giveaways__inner-wrap');
if('boolean' !== typeof userSettings.dontMessWithEnterGiveawayButton || !userSettings.dontMessWithEnterGiveawayButton) {
	buttonsAndShit = buttonsAndShit.add(jQuery('.sidebar__entry-insert'));
}
if('boolean' !== typeof userSettings.dontMessWithRemoveGiveawayButton || !userSettings.dontMessWithRemoveGiveawayButton) {
	buttonsAndShit = buttonsAndShit.add(jQuery('.sidebar__entry-delete'));
}
buttonsAndShit.addClass('userTextColorOverride');
buttonsAndShit.addClass('userButtonOverride');

// if there are polls, then handle the winner
jQuery('.poll__answer-container--positive .poll__vote-graph').attr('id', 'andTheWinrarIs');

// queue up the stones and paint it black
jQuery('.page__outer-wrap').addClass('userOppositeOfPatronus');

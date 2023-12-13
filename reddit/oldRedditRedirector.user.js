// ==UserScript==
// @name         oldRedditRedirector
// @namespace    oldRedditRedirector
// @version      2023-11-04.1854
// @description  Redirects any links from shitty new reddit to the old reddit site
// @match        https://www.reddit.com/
// @match        https://www.reddit.com/r/*
// @grant        none
// @run-at       document-start
// @icon        data:image/jpeg;base64,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
// ==/UserScript==
var oldRedditUrl = location.href.replace(/\/\/(www\.)?reddit.com/g, '//old.reddit.com');

// redirect
location.href = oldRedditUrl;

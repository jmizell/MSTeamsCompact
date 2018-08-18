// ==UserScript==
// @name         Microsoft Teams Compact
// @namespace    MSTeamsCompact
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/jmizell/MSTeamsCompact/master/script.user.js
// @description  Making Microsoft Teams UI just a little more compact
// @author       mizellj@ottercove.net
// @match        https://teams.microsoft.com/*
// @grant        GM_addStyle
// @license      GPL-3.0
// @homepageURL  https://github.com/jmizell/MSTeamsCompact
// @source       https://github.com/jmizell/MSTeamsCompact
// @supportURL   https://github.com/jmizell/MSTeamsCompact/issues
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
/* Base fonts sizes */
/* ====================================================== */
body .h1,body .h2,body .h3,body .h4,body .ts-large-font,body h1,body h2,body h3,body h4{
    font-size:1.5rem  !important;
}
body .h5,body .h6,body h5,body h6{
    font-size:1rem !important;
}


/*Team Title Bar */
/* ====================================================== */
.ts-title-bar .icons-patharrow {
	margin: 0 0 -.2rem -.2rem;
}
.app-svg, .ts-svg {
	height: 2.2rem;
	width: 2.2rem;
}


/* Chat Message Tweaks */
/* ====================================================== */
.ts-message-list-container{
    max-width:100% !important;
    width:100% !important;
}
.chat-style thread .ts-message{
    padding:0.5rem !important;
}
.app-font-base-regular,.app-font-base-semibold{
    font-size:1rem !important;
    line-height:1.1 !important;
}
virtual-repeat > .list-wrap > .item-wrap {
    max-width: 100% !important;
    width: 100% !important;
}
message-list.chat-style .thread-body:not(.self) .media-left ~ .ts-message-thread-body {
	margin-right: 1rem !important;
}
message-list.chat-style .self .media-left ~ .ts-message-thread-body {
	padding-left: 1rem !important;
}


/*Team Message Tweaks*/
/* ====================================================== */
.message-list-common:not(.chat-style) thread .ts-message {
	padding: .45rem .45rem .45rem 0 !important;
}
.ts-message-list-container .ts-message-list-item {
	padding-left: 0.45rem;
}
//tabs
.ts-messages-header .ts-tab-bar-wrapper {
	display: flex;
	margin-top: 1.1rem;
	height: 2.9rem;
	margin-bottom: 1.2rem;
}
.btn {
	display: inline-block;
	margin-bottom: 0;
	font-weight: 400;
	text-align: center;
	touch-action: manipulation;
	cursor: pointer;
	border: 1px solid transparent;
	white-space: nowrap;
	padding: 6px 12px;
	font-size: 1.5rem !important;
	line-height: 1.4286;
	border-radius: .3rem;
	user-select: none;
}


/* Github Enterprise Notification Cards */
/* ====================================================== */
.ts-o365-connector-card .o365-card-title {
	font-weight: normal !important;
	font-size: 1.4rem !important;
	line-height: 1.1 !important;
	margin: 0 !important;
}
.ts-o365-connector-card-section .o365-card-activity-container {
	display: flex;
	overflow: hidden;
	margin: 0 !important;
}
.ts-o365-connector-card-section .card-facts {
	margin: 0 !important;
}
.ts-o365-connector-card-section .card-facts .card-fact-key {
	overflow: hidden !important;
	text-overflow: ellipsis !important;
	white-space: nowrap !important;
	font-size: 1.2rem !important;
	line-height: 1 !important;
	font-weight: 600 !important;
	padding: 2px !important;
	max-width: 100% !important;
	vertical-align: top !important;
}
.ts-o365-connector-card-section .card-facts .card-fact-value {
	font-size: 1.2rem !important;
	line-height: 1 !important;
	padding: 0 !important;
	max-width: 100% !important;
	word-break: break-all !important;
}
.ts-o365-connector-card * + .card-actions-container .card-action, .ts-o365-connector-card * + o365-action-pane > .card-actions-container .card-action {
	overflow: visible !important;
	text-overflow: clip !important;
	white-space: normal !important;
	height: auto !important;
    max-width: none !important;
    min-width: none !important;
    font-size: 1.3rem !important;
	padding: 0.2rem !important;
	width: auto !important;
	margin: .4rem !important;
}
.ts-o365-connector-card-section .o365-card-activity-container .card-image-error.avatar {
	width: 4rem !important;
	height: 4rem !important;
}
.ts-o365-connector-card-section .o365-card-activity-title {
	font-size: 1.3rem !important;
	line-height: 1.1 !important;
	font-weight: 600 !important;
}
` );

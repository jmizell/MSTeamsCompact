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
	font-weight: normal;
	font-size: 1.4rem;
	line-height: 1.1;
	margin: 0;
}
.ts-o365-connector-card-section .o365-card-activity-container {
	display: flex;
	overflow: hidden;
	margin: 0;
}
.ts-o365-connector-card-section .card-facts {
	margin: 0;
}
.ts-o365-connector-card-section .card-facts .card-fact-key {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.2rem;
	line-height: 1;
	font-weight: 600;
	padding: 2px;
	max-width: 100%;
	vertical-align: top;
}
.ts-o365-connector-card-section .card-facts .card-fact-value {
	font-size: 1.2rem;
	line-height: 1;
	padding: 0;
	max-width: 100%;
	word-break: break-all;
}
.ts-o365-connector-card * + .card-actions-container .card-action, .ts-o365-connector-card * + o365-action-pane > .card-actions-container .card-action {
	overflow: visible;
	text-overflow: clip;
	white-space: normal;
	height: auto;
    max-width: none;
    min-width: none;
    font-size: 1.3rem;
	padding: 0.2rem;
	width: auto;
	margin: .4rem;
}
.ts-o365-connector-card-section .o365-card-activity-container .card-image-error.avatar {
	width: 4rem;
	height: 4rem;
}
.ts-o365-connector-card-section .o365-card-activity-title {
	font-size: 1.3rem;
	line-height: 1.1;
	font-weight: 600;
}
` );

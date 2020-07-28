import $ from "jquery";
import Glide from "@glidejs/glide";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "@fortawesome/fontawesome-free/css/all.css";
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../css/drtStyles.css";

const CTA_TIMEOUT = 10 * 1000;
const MAX_MOBILE_VIDEO_WIDTH = 768;
const NEWS_SLIDER_TIME = 3000;
let playingMobile = false;
let playing = false;
const debugText = $("#DebugText");

// Resize events
window.addEventListener("resize", playShowReel);

$(document).ready(() => {
	playShowReel();

	const glide = new Glide("#newsCarousel", {
		type: "carousel",
		perView: 3,
		breakpoints: {
			640: {
				perView: 1,
			},
			992: {
				perView: 2,
			},
		},
		autoplay: NEWS_SLIDER_TIME,
	});

	glide.mount();
});

function playShowReel() {
	const videoElem = document.getElementById("showReel");
	const vidContainer = document.getElementById("vidContainer");
	const videoMobile = "./showReelMobilev5.webm";
	const videoDesktop = "./showReel3-1.mp4";
	if (process.env.NODE_ENV !== "production") {
		videoElem.onerror = function () {
			console.log("Error in video");
		};
		videoElem.onplay = function () {
			console.log("Video is playing");
		};
		videoElem.onabort = function () {
			console.log("Video aborted");
		};
		videoElem.onwaiting = function () {
			console.log("Video waiting...");
		};
		videoElem.onpause = function () {
			console.log("Video paused");
		};
		videoElem.onstalled = function () {
			console.log("Video stalled");
		};
		videoElem.onsuspend = function () {
			console.log("Video suspended");
		};
	}

	if (window.innerWidth < MAX_MOBILE_VIDEO_WIDTH) {
		if (!playingMobile) {
			videoElem.src = videoMobile;
			videoElem.load();
			playingMobile = true;
			playing = true;
		}
	} else {
		if (playingMobile || !playing) {
			videoElem.src = videoDesktop;
			videoElem.load();
			playingMobile = false;
			playing = true;
		}
	}
}

import $ from "jquery";
import Glide from "@glidejs/glide";
import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
//import '@fortawesome/fontawesome-free/css/all.css';

const CTA_TIMEOUT = 10 * 1000;
const MAX_MOBILE_VIDEO_WIDTH = 768;
const NEWS_SLIDER_TIME = 3000;
let playingMobile = false;

$(document).ready( () => {
    const glide = new Glide("#newsCarousel", {
        type: "carousel",
        perView: 3,
        breakpoints: {
            640: {
                perView: 1
            },
            992: {
                perView: 2
            }
        },
        autoplay: NEWS_SLIDER_TIME
    });

    glide.mount();

    let forcePlay = true;
    playShowReel(forcePlay);

    // Resize events
    window.addEventListener("resize", playShowReel);
});

function playShowReel(forcePlay) {
    const videoElem = document.getElementById("showReel");
    const videoMobile = "./showReelMobile3.mp4";
    const videoDesktop = "./showReel3.mp4";
    if (window.innerWidth < MAX_MOBILE_VIDEO_WIDTH) {
        if (!playingMobile) {
            videoElem.src = videoMobile;
            videoElem.load();
            videoElem.play();
            playingMobile = true;
        }
    } else {
        if (playingMobile || forcePlay) {
            videoElem.src = videoDesktop;
            videoElem.load();
            videoElem.play();
            playingMobile = false;
        }
    }
}
import $ from "jquery";
import Glide from "@glidejs/glide";

const CTA_TIMEOUT = 10 * 1000;
const MAX_MOBILE_VIDEO_WIDTH = 768;
let playingMobile = false;

$(document).ready( () => {
    const glide = new Glide("#newsCarousel", {
        type: "carousel",
        perView: 3,
        breakpoints: {
            768: {
                perView: 1
            }
        },
        autoplay: 4000
    });

    glide.mount();

    let forcePlay = true;
    playShowReel(forcePlay);

    // Resize events
    window.addEventListener("resize", playShowReel);
});

function playShowReel(forcePlay) {
    const videoElem = document.getElementById("showReel");
    const videoMobile = "./showReelMobile.mp4";
    const videoDesktop = "./showReel2.mp4";
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
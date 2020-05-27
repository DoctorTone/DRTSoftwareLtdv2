import $ from "jquery";
import bootstrap from "bootstrap";
import Glide from "@glidejs/glide";

const CTA_TIMEOUT = 10 * 1000;

$(document).ready( () => {
    const glide = new Glide("#newsCarousel", {
        type: "carousel",
        perView: 3
    });

    glide.mount();
});
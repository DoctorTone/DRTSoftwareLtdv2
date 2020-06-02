import $ from "jquery";

$(document).ready( () => {
    // Elements
    const contactForm = $("#contactForm");
    const service = $("#service");

    contactForm.submit( () => {
        if (service.val() === "0") {
            alert("Please select a service");
            return false;
        }

        return true;
    })
});
// Change color of active page link navigation text
document.querySelectorAll("#navbar a").forEach(
    link => {
        if(link.href == window.location.href){ // check if link href equal to current link page
            link.style.color = "#00A3FF";
        }
    }
)
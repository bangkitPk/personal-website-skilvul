// Change color of active page link navigation text
const navLinks = document.querySelectorAll("#navbar a");
if(window.location.href == "https://bangkitpk-personal-website.vercel.app/"){
    navLinks[0].style.color = "#00A3FF";
}else {
    navLinks.forEach(
        link => {
            if(link.href == window.location.href){ // check if link href equal to current link page
                link.style.color = "#00A3FF";
            }
        }
    )
}

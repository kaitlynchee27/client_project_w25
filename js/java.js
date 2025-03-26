const slideInElements = document.querySelectorAll('h2');

window.addEventListener('scroll', () => {
    slideInElements.forEach(element => {
        // iterate over all h2s
        const rect = element.getBoundingClientRect();
        // get current position
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
            // check if within visible part of browser
        }
    });
});

// source, event listener: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// source, for each: https://www.w3schools.com/jsref/jsref_foreach.asp
// source, get bound: https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
// source, inner height: https://www.w3schools.com/jquery/html_innerheight.asp#:~:text=Definition%20and%20Usage,the%20width%20of%20an%20element 
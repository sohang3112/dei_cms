const main = document.querySelector('main');

enableLinkSelection('.sidebar');

function enableLinkSelection(elementCss) {
    const sidebarLinks = document.querySelectorAll(elementCss + ' a[href="#"]');
    let selectedLink = sidebarLinks[0];
    sidebarLinks[0].classList.add('selected-link');

    for (const curr of sidebarLinks) 
        curr.addEventListener('click', function() {
            if (curr !== selectedLink) {
                selectedLink.classList.remove('selected-link');
                curr.classList.add('selected-link');
                selectedLink = curr;
            }
            return false;           // prevent default action
        });
}


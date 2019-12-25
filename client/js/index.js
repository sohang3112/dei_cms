const main = document.querySelector('main');

enableLinkSelection('.sidebar');

function enableLinkSelection(elementCss) {
    const sidebarLinks = document.querySelectorAll(elementCss + ' a[href="#"]');
    sidebarLinks[0].classList.add('selected-link');

    for (const curr of sidebarLinks) 
        curr.addEventListener('click', function() {
            for (const link of sidebarLinks)
                link.classList.remove('selected-link');
            curr.classList.add('selected-link');
            return false;           // prevent default action
        });
}


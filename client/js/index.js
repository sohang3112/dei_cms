const main = document.querySelector('main');
const sidebarLinks = document.querySelectorAll('[role="sidebar"] a[href="#"]');

for (const curr of sidebarLinks) 
    curr.addEventListener('click', function() {
        for (const link of sidebarLinks)
            link.classList.remove('selected-link');
        curr.classList.add('selected-link');
        return false;           // prevent default action
    });


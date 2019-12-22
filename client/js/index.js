const main = document.querySelector('main');
const sidebarLinks = document.querySelector('[role="sidebar"]').children;

for (const curr of sidebarLinks) 
    curr.addEventListener('click', function() {
        for (const link of sidebarLinks)
            link.classList.remove('selected-link');
        curr.classList.add('selected-link');
        return false;           // prevent default action
    });


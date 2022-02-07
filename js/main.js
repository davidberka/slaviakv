function menuHandler() {
    const burgerMenu = document.querySelector(".burger");
    const slideNav = document.querySelector(".header_nav");

    burgerMenu.addEventListener("click", () => {
        slideNav.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });

    if (window.innerWidth < 1024) {
    const navLinks = document.querySelectorAll(".nav_links > li > a");
    const dropdownMenus = document.querySelectorAll(".dropdown_menu");
    
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
        // remove active className
        dropdownMenus.forEach((menu) => {
            if (link.parentNode != menu.parentNode) {
            menu.classList.remove("active");
            }
        });
        // add active className to current dropdown
        const dropdownMenu = link.nextElementSibling;
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("active");
        }
        });
    });
    }
}

function playerTabsHandler() {
    const tabLinks = document.querySelectorAll('.player_menu li');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            let current = document.querySelector(".player_menu li.active");
            current.className = current.className.replace("active", "");
            this.classList.add("active");
            
            linkId = link.getAttribute('data-id');
            
            let currentContainer = document.querySelector(".player_tab.active");
            currentContainer.className = currentContainer.className.replace("active", "");
            document.querySelector(`.player_tab[id="${linkId}"]`)?.classList.add('active');
        })
    })
}

menuHandler();
playerTabsHandler();
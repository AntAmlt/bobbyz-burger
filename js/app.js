window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

function myFunction() {
    var networks = document.getElementById("networks");
    var menu = document.getElementById("header-menu");
    var toggle = document.getElementById("menu-toggle-icon");
    if (networks.style.display == "none") {
      networks.style.display = "initial";
      menu.style.display = "initial";
      toggle.setAttribute("data-icon", "akar-icons:cross");
    } else {
      networks.style.display = "none";
      menu.style.display = "none";
      toggle.setAttribute("data-icon", "dashicons:menu-alt3");
    }
  }
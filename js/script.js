// We'll initialize interactive pieces after the header/footer are inserted
function initPage() {
  // hamburger/mobile menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    // Close navbar when link is clicked
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }

  // theme switcher
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", switchTheme, false);

    // apply stored theme
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
  }

  //Adding date
  const myDate = document.querySelector("#datee");
  if (myDate) {
    const yes = new Date().getFullYear();
    myDate.innerHTML = yes;
  }
}

// call on DOMContentLoaded in case components are already present
document.addEventListener("DOMContentLoaded", initPage);

// expose the initializer so import.js can invoke it later
window.initPage = initPage;

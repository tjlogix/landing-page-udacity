/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sections = Array.from(document.querySelectorAll('section')); // get all the sections in the document
const navbar = document.querySelector('.navbar__menu'); // get the navbar  
const menu = document.createElement('li'); // create a li element
const id = section.getAttribute('id'); // get the id of the section
const name = section.getAttribute('data-nav'); // get the name of the section
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */



// build the nav
function buildNav() {
    sections.forEach(section => { // for each section in the document
        menu.innerHTML = `<a class="menu__link navbar__menu" href="#${id}">${name}</a>`; // set the innerHTML of the li element to the id of the section
        navbar.appendChild(menu); // append the li element to the navbar

    });
}


// Add class 'active' to section when near top of viewport
function activeSection() {
    sections.forEach(section => { // for each section in the document
        const id = section.getAttribute('id'); // get the id of the section
        const rect = section.getBoundingClientRect(); // get the bounding rectangle of the section
        if (rect.top <= 150 && rect.bottom >= 150) { // if the section is in the viewport
            section.classList.add('your-active-class'); // add the class 'active' to the section
            section.style.cssText = `border: 10px solid white;`; // add a border to the section
            navbar.querySelector(`a[href="#${id}"]`).style.cssText = ' color:white; background-color: black;'; // add the style to the navbar
        } else {
            section.classList.remove('your-active-class'); // remove the class 'active' from the section
            section.style.cssText = ``; // remove the style from the section
            navbar.querySelector(`a[href="#${id}"]`).style.cssText = ''; // remove the style from the navbar
        }
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNav();
// Scroll to section on link click
document.querySelectorAll('.navbar__menu').forEach(link => { // for each link in the navbar
        link.addEventListener('click', (e) => { // add an event listener to the link
            e.preventDefault(); // prevent the default action of the link
            const target = document.querySelector(e.target.hash); // get the section that the link points to
            target.scrollIntoView({ behavior: 'smooth' }); // scroll to the section
        });
    }

);

// Set sections as active
window.addEventListener('scroll', activeSection);

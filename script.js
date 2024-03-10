document.addEventListener('DOMContentLoaded', function () {
    const roles = ['Web Developer', 'Coder', 'Guitarist'];
    let roleIndex = 0;
    let charIndex = 0;
    const roleSpan = document.getElementById('role');
    const cursorSpan = document.createElement('span');
    cursorSpan.classList.add('typing-cursor');
    roleSpan.appendChild(cursorSpan);

    function type() {
        if (charIndex < roles[roleIndex].length) {
            roleSpan.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            roleSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex++;
            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
            setTimeout(type, 500);
        }
    }

    type();

    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Gravity effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fall-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Select the button element
    const downloadCVBtn = document.getElementById('downloadCVBtn');

    // Add an event listener for the click event
    downloadCVBtn.addEventListener('click', function () {
        // Specify the URL of your CV file
        const cvURL = 'path_to_your_cv_file.pdf'; // Update this with the correct file path

        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = cvURL;
        link.download = 'Vishal_Nandy_CV.pdf'; // Change the filename as needed
        link.target = '_blank'; // Open in a new tab
        link.click();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var skills = document.querySelectorAll('.skill');
    var container = document.querySelector('.container-skill');

    container.addEventListener('scroll', function() {
        skills.forEach(skill => {
            if (isElementInViewport(skill)) {
                skill.classList.add('float');
            } else {
                skill.classList.remove('float');
            }
        });
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            var progressBar = skill.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.display = 'block';
            }
        });

        skill.addEventListener('mouseleave', function() {
            var progressBar = skill.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.display = 'none';
            }
        });
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add classes to projects based on their visibility
function handleScroll() {
    var projects = document.querySelectorAll('.project');
    
    projects.forEach(function(project) {
        if (isInViewport(project)) {
            project.classList.add('visible');
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
            project.classList.remove('visible');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();



const text = "About Me";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000); // Delay typing for 1 second after page load
});


// Function to create the typing effect
function typeSkills() {
    const text = " Abilities";
    let index = 0;

    function type() {
        if (index < text.length) {
            document.getElementById('skills-typed-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Decreased the time duration to 100 milliseconds
        }
    }

    type(); // Call the type function to start typing
}

document.addEventListener("DOMContentLoaded", function() {
    typeSkills(); // Start typing when the DOM content is loaded
});

// const skillsObserver = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             typeSkills(); // Start typing when the section is in view
//             observer.unobserve(entry.target); // Stop observing once the typing starts
//         }
//     });
// }, options);

// skillsObserver.observe(skillsSection); // Start observing the skills section


document.addEventListener('DOMContentLoaded', function() {
    var starsContainer = document.querySelector('.stars');
  
    // Function to create a star element
    function createStar() {
      var star = document.createElement('div');
      star.classList.add('star');
      var size = Math.random() * 2 + 1; // Random size between 1 and 3 pixels
      var x = Math.random() * window.innerWidth; // Random horizontal position
      var y = Math.random() * window.innerHeight; // Random vertical position
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.backgroundColor = 'white';
      star.style.top = y + 'px';
      star.style.left = x + 'px';
      starsContainer.appendChild(star);
    }
  
    // Create stars
    for (var i = 0; i < 1000; i++) { // You can adjust the number of stars here
      createStar();
    }
});
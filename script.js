// Define blogPosts at the top of the script (global scope)
const blogPosts = {
    1: {
      title: "5 Tips for Writing Clean CSS",
      date: "April 10, 2024",
      content:
        "<p>Writing clean and maintainable CSS is essential for any web developer. Here are five tips to help you improve your CSS skills:</p><ol><li>Use meaningful class names.</li><li>Avoid inline styles.</li><li>Organize your stylesheets logically.</li><li>Use CSS preprocessors like SASS or LESS.</li><li>Comment your code for clarity.</li></ol>",
    },
    2: {
      title: "Getting Started with JavaScript Frameworks",
      date: "March 25, 2024",
      content:
        "<p>JavaScript frameworks like React and Vue have revolutionized web development. Here's how to get started:</p><ol><li>Learn the basics of JavaScript.</li><li>Choose a framework (React, Vue, Angular).</li><li>Follow official documentation and tutorials.</li><li>Build small projects to practice.</li><li>Join online communities for support.</li></ol>",
    },

    3: {
        title: "10 Essential Tools for Web Developers",
        date: "May 5, 2024",
        content:
            "<p>As a web developer, having the right tools can significantly improve your productivity and workflow. Here are 10 essential tools that every web developer should know about:</p><ol><li><strong>Visual Studio Code</strong> - A powerful and lightweight code editor with built-in Git support and extensions.</li><li><strong>Git and GitHub</strong> - Version control system for tracking changes and collaborating with others.</li><li><strong>Chrome DevTools</strong> - Built-in browser tools for debugging and optimizing web applications.</li><li><strong>Figma</strong> - A design tool for creating and prototyping user interfaces.</li><li><strong>Postman</strong> - A tool for testing and documenting APIs.</li><li><strong>Webpack</strong> - A module bundler for optimizing and managing JavaScript assets.</li><li><strong>ESLint</strong> - A linter for identifying and fixing problems in JavaScript code.</li><li><strong>Tailwind CSS</strong> - A utility-first CSS framework for rapid UI development.</li><li><strong>Netlify</strong> - A platform for deploying and hosting static websites.</li><li><strong>Notion</strong> - A productivity tool for organizing tasks, notes, and documentation.</li></ol>",
    },
    4: {
        title: "Mastering Responsive Web Design",
        date: "June 15, 2024",
        content:
            "<p>Responsive web design is crucial for creating websites that work seamlessly on all devices. Here are some best practices to master responsive design:</p><ol><li>Use a mobile-first approach to design and development.</li><li>Leverage CSS Flexbox and Grid for flexible layouts.</li><li>Use media queries to adapt styles for different screen sizes.</li><li>Optimize images and assets for faster loading on mobile devices.</li><li>Test your website on multiple devices and browsers to ensure compatibility.</li></ol>",
    },
  };
  
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    // Handle "Read More" Button Clicks
    document.querySelectorAll(".read-more").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const postId = button.getAttribute("data-post-id");
        const post = blogPosts[postId]; // Access blogPosts after it is initialized
  
        if (post) {
          document.getElementById("blog-content").innerHTML = `
            <div class="blog-full-post">
                <h1>${post.title}</h1>
                <p class="date">${post.date}</p>
                ${post.content}
                <a href="#blog" class="btn close-blog">Back to Blog</a>
            </div>
          `;
  
          document.querySelector(".blog-grid").style.display = "none";
          document.getElementById("blog-content").style.display = "block";
        } else {
          console.error("Post not found for ID:", postId);
        }
      });
    });
  
    // Handle "Back to Blog" Button Clicks
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("close-blog")) {
        document.getElementById("blog-content").style.display = "none";
        document.querySelector(".blog-grid").style.display = "grid";
      }
    });
  });




// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const postId = button.getAttribute("data-post-id"); // Line 5
      const post = blogPosts[postId];
  
      if (post) {
        document.getElementById("blog-content").innerHTML = `
          <div class="blog-full-post">
              <h1>${post.title}</h1>
              <p class="date">${post.date}</p>
              ${post.content}
              <a href="#blog" class="btn close-blog">Back to Blog</a>
          </div>
        `;
  
        document.querySelector(".blog-grid").style.display = "none";
        document.getElementById("blog-content").style.display = "block";
      }
    });
  });


  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const postId = button.getAttribute("data-post-id");
      console.log("Post ID:", postId); // Debugging log
  
      const post = blogPosts[postId];
      console.log("Post Content:", post); // Debugging log
  
      if (post) {
        document.getElementById("blog-content").innerHTML = `
          <div class="blog-full-post">
              <h1>${post.title}</h1>
              <p class="date">${post.date}</p>
              ${post.content}
              <a href="#blog" class="btn close-blog">Back to Blog</a>
          </div>
        `;
  
        document.querySelector(".blog-grid").style.display = "none";
        document.getElementById("blog-content").style.display = "block";
      } else {
        console.error("Post not found for ID:", postId); // Debugging log
      }
    });
  });
// Scroll animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.textContent = body.classList.contains("light-mode") ? "🌙" : "☀️";
});

// Form validation
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (messageInput.value.trim() === "") {
    alert("Please enter a message.");
    return;
  }
  alert("Form submitted successfully!");
  form.reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Testimonials carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-card");
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Show the first testimonial initially
showTestimonial(currentTestimonial);

// Dynamic year in footer
const year = new Date().getFullYear();
document.getElementById("current-year").textContent = year;

// Lazy loading for images
const images = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  },
  { threshold: 0.1 }
);

images.forEach((img) => {
  imageObserver.observe(img);
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Send message to WhatsApp
  const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappLink = `https://wa.me/your-whatsapp-number?text=${whatsappMessage}`;

  // Open WhatsApp link in a new tab
  window.open(whatsappLink, "_blank");

  // Clear the form
  contactForm.reset();
});

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Animate the hero section
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero .btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

// Animate Skills Progress Bars
const skillProgressBars = document.querySelectorAll(".skill .progress");

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillProgressBars.forEach((bar) => {
          const targetWidth = bar.style.width; // Get the target width from inline style
          bar.style.width = "0%"; // Reset width to 0%
          setTimeout(() => {
            bar.style.width = targetWidth; // Animate to target width
          }, 100);
        });
        skillsObserver.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  { threshold: 0.5 }
);

const skillsSection = document.getElementById("skills");
skillsObserver.observe(skillsSection);


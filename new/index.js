const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterMessage = document.getElementById("newsletter-message");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');

      // Simple validation
      if (emailInput.value && emailInput.value.includes("@")) {
        newsletterMessage.textContent = "Thank you for subscribing!";
        newsletterMessage.classList.remove("hidden", "text-red-400");
        newsletterMessage.classList.add("text-green-400");
        emailInput.value = ""; // Clear the input
      } else {
        newsletterMessage.textContent = "Please enter a valid email address";
        newsletterMessage.classList.remove("hidden", "text-green-400");
        newsletterMessage.classList.add("text-red-400");
      }
      newsletterMessage.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        newsletterMessage.classList.add("hidden");
      }, 5000);
    });
  }

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Smooth Scrolling for Anchor Links

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    // Change icon based on menu state
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenuButton.innerHTML = isOpen
      ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                       </svg>`
      : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                       </svg>`;
  });

  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterMessage = document.getElementById("newsletter-message");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');

      // Simple validation
      if (emailInput.value && emailInput.value.includes("@")) {
        newsletterMessage.textContent = "Thank you for subscribing!";
        newsletterMessage.classList.remove("hidden", "text-red-400");
        newsletterMessage.classList.add("text-green-400");
        emailInput.value = ""; // Clear the input
      } else {
        newsletterMessage.textContent = "Please enter a valid email address";
        newsletterMessage.classList.remove("hidden", "text-green-400");
        newsletterMessage.classList.add("text-red-400");
      }
      newsletterMessage.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        newsletterMessage.classList.add("hidden");
      }, 5000);
    });
  }

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

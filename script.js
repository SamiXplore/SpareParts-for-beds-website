// script.js

// Example: Show an alert when search button is clicked
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector(".search-container button");

  if (searchButton) {
    searchButton.addEventListener("click", function() {
      alert("Search functionality coming soon!");
    });
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle && navList) {
  mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('active');
  });
}

// Animate progress bars when they come into view
const animateProgressBars = () => {
  const bars = document.querySelectorAll('.bar-fill');
  
  bars.forEach(bar => {
    const years = bar.getAttribute('data-years');
    const percentage = bar.getAttribute('data-percentage');
    
    if (years) {
      bar.style.width = `${(years / 6) * 100}%`;
    } else if (percentage) {
      bar.style.width = `${percentage}%`;
    }
  });
};

// Intersection Observer for progress bars
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.feature-card, .spec-item').forEach(card => {
  observer.observe(card);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add hover effect to cards
document.querySelectorAll('.bed-card, .part-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Form submission handling
const searchForm = document.querySelector('.search-container');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = searchForm.querySelector('input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
      // Here you would typically handle the search
      console.log('Searching for:', searchTerm);
      // You can add your search logic here
    }
  });
}

// Order button handling
document.querySelectorAll('.order-button').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.add('loading');
    this.textContent = 'Processing...';
    
    // Simulate order processing
    setTimeout(() => {
      this.classList.remove('loading');
      this.textContent = 'Order Now';
      alert('Order placed successfully!');
    }, 1500);
  });
});

// Add loading state to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.add('loading');
    setTimeout(() => {
      this.classList.remove('loading');
    }, 1000);
  });
});

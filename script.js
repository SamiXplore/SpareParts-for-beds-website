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

// Initialize visual indicators
document.addEventListener('DOMContentLoaded', function() {
  // Durability circular progress
  const durabilityProgress = document.querySelector('.circular-progress');
  if (durabilityProgress) {
    const value = durabilityProgress.dataset.value;
    durabilityProgress.style.setProperty('--value', value);
  }

  // Repairability percentage ring
  const repairabilityRing = document.querySelector('.percentage-ring');
  if (repairabilityRing) {
    const percentage = repairabilityRing.querySelector('.percentage-ring').dataset.percentage;
    repairabilityRing.style.setProperty('--percentage', percentage);
  }

  // Animate elements when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });

  // Add tooltips for part icons
  document.querySelectorAll('.part-icon').forEach(icon => {
    const title = icon.getAttribute('title');
    const tooltip = document.createElement('div');
    tooltip.className = 'part-tooltip';
    tooltip.textContent = title;
    icon.appendChild(tooltip);
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animation observer for elements
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation classes when element is in view
      if (entry.target.classList.contains('durability-bar')) {
        const years = entry.target.querySelector('.bar-fill').dataset.years;
        entry.target.querySelector('.bar-fill').style.setProperty('--years', years);
      }
      if (entry.target.classList.contains('repairability-bar')) {
        const percentage = entry.target.querySelector('.bar-fill').dataset.percentage;
        entry.target.querySelector('.bar-fill').style.setProperty('--percentage', percentage);
      }
      entry.target.classList.add('animate');
      // Stop observing after animation is triggered
      animationObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // Observe elements with animations
  document.querySelectorAll('.durability-bar, .repairability-bar, .inventory-item, .spec-item').forEach(el => {
    animationObserver.observe(el);
  });

  // Mobile menu functionality
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
    });
  }
});

// Add smooth scroll behavior for better animation experience
document.documentElement.style.scrollBehavior = 'smooth';

// Handle durability counter animations
document.addEventListener('DOMContentLoaded', () => {
  const durabilityCounters = document.querySelectorAll('.durability-counter');
  
  // Function to animate counter
  const animateCounter = (counter) => {
    const target = parseInt(counter.dataset.value);
    let current = 0;
    const duration = 800; // Reduced to 800ms from 2000ms
    const stepTime = 40; // Update every 40ms for smoother animation
    const steps = duration / stepTime;
    const increment = target / steps;

    // Reset counter
    counter.textContent = '0';
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.round(current);
    }, stepTime);
  };

  // Animate on page load only
  durabilityCounters.forEach(counter => {
    animateCounter(counter);
  });
});

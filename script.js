document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Mobile menu toggle
  burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
      navLinks.forEach(link => {
        link.style.animation = '';
      });
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animation for banner content
  const bannerContent = document.querySelector('.banner-content');
  bannerContent.style.opacity = '0';
  bannerContent.style.transform = 'translateY(20px)';

  setTimeout(() => {
    bannerContent.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    bannerContent.style.opacity = '1';
    bannerContent.style.transform = 'translateY(0)';
  }, 500);

  // Book Now button hover effect
  const bookNowBtn = document.querySelector('.book-now-btn');
  bookNowBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  });
  bookNowBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
  });

  const roomCards = document.querySelectorAll('.room-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  roomCards.forEach(card => {
    observer.observe(card);
  });

  const exploreRoomsBtn = document.getElementById('explore-rooms-btn');
  const roomsSection = document.getElementById('rooms');

  exploreRoomsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    roomsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  const overviewPhoto = document.querySelector('.overview-photo');
  if (overviewPhoto) {
    observer.observe(overviewPhoto);
  }
});




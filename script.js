/**
 * Samta Ingle - Portfolio Interactive Script
 * Theme Toggle, Project Filters, Modals, Clipboard, Smooth Interactions, Resume Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initProjectFilters();
  initModals();
  initClipboard();
  initContactForm();
  initScrollSpy();
  initResumeDownload();
});

/* ===================================================
   1. Theme Management (Dark / Light Mode)
   =================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Safely retrieve saved preference or default to dark
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('theme') || 'dark';
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (e) {
        console.warn('Could not save theme to localStorage:', e);
      }
    });
  }
}

/* ===================================================
   2. Mobile Menu Navigation
   =================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', !isHidden);
    if (isHidden) {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    } else {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    }
  });

  // Close menu when clicking on any mobile nav link
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    });
  });
}

/* ===================================================
   3. Projects Filter (Professional vs Personal)
   =================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================
   4. Modal Management
   =================================================== */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.project-modal');
  const closeButtons = document.querySelectorAll('.modal-close-btn');

  // Open modal
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal with close button
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close modal when clicking outside backdrop
  modals.forEach(modal => {
    const backdrop = modal.querySelector('.project-modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        closeAllModals();
      });
    }
  });

  // Close modal with ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  function closeAllModals() {
    modals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = '';
  }
}

/* ===================================================
   5. Clipboard Copy Utility
   =================================================== */
function initClipboard() {
  const heroCopyBtn = document.getElementById('quick-copy-email-hero');
  const contactCard = document.getElementById('contact-email-card');

  const emailToCopy = 'samtaingle555@gmail.com';

  if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => {
      copyToClipboard(emailToCopy, 'Email copied to clipboard!');
    });
  }

  if (contactCard) {
    contactCard.addEventListener('click', () => {
      copyToClipboard(emailToCopy, 'Email copied to clipboard!');
    });
  }
}

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    console.warn('Copy command failed', err);
  }
  document.body.removeChild(input);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (!toast) return;

  toastMessage.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

/* ===================================================
   6. Contact Form Submission (Mailto Handler)
   =================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Samta,\n\n${message}\n\nFrom:\n${name}\nEmail: ${email}`
    );

    const mailtoUrl = `mailto:samtaingle555@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open mail client
    window.location.href = mailtoUrl;

    showToast('Opening default email client...');
    form.reset();
  });
}

/* ===================================================
   7. Scroll Spy for Active Navbar Links
   =================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active-nav');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active-nav');
      }
    });
  });
}

/* ===================================================
   8. Resume Download Toast Notification
   =================================================== */
function initResumeDownload() {
  const resumeLinks = document.querySelectorAll('a[href$=".pdf"]');
  resumeLinks.forEach(link => {
    link.addEventListener('click', () => {
      showToast('Downloading Samta Ingle Resume PDF...');
    });
  });
}

/**
 * SaaS Data & Analytics Platform - Prototype JavaScript
 * Basic interactions for HTML/CSS prototypes
 */

class PrototypeApp {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.initializeSidebar();
    this.initializeModals();
    this.initializeTabs();
    this.initializeForms();
    this.initializeNotifications();
    this.initializeTooltips();
    this.initializeCharts();
    this.initializeSearch();
    this.initializeWizards();
    this.initializeAnimations();

    console.log('SaaS Prototype initialized');
  }

  // Sidebar Navigation
  initializeSidebar() {
    const sidebarToggle = document.querySelector('.admin-sidebar-toggle, .app-sidebar-toggle');
    const sidebar = document.querySelector('.admin-sidebar, .app-sidebar');
    const mainContent = document.querySelector('.admin-main, .app-main');

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('collapsed');
        if (mainContent) {
          mainContent.classList.toggle('sidebar-collapsed');
        }

        // Store collapsed state
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
      });

      // Restore sidebar state
      const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
      if (isCollapsed) {
        sidebar.classList.add('collapsed');
        if (mainContent) {
          mainContent.classList.add('sidebar-collapsed');
        }
      }
    }

    // Mobile sidebar toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle && sidebar) {
      mobileToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('mobile-open');
      });

      // Close mobile sidebar when clicking outside
      document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
          sidebar.classList.remove('mobile-open');
        }
      });
    }

    // Navigation active states
    const navItems = document.querySelectorAll('.admin-nav-item, .app-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
      });
    });
  }

  // Modal System
  initializeModals() {
    // Modal triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-target]');
      if (trigger) {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal-target');
        this.openModal(modalId);
      }

      // Close modal triggers
      const closeBtn = e.target.closest('.modal-close, [data-modal-close]');
      if (closeBtn) {
        e.preventDefault();
        this.closeModal(closeBtn.closest('.modal'));
      }
    });

    // Close modal on backdrop click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        this.closeModal(e.target.querySelector('.modal'));
      }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
          this.closeModal(openModal);
        }
      }
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.classList.add('modal-open');

      // Focus first input
      const firstInput = modal.querySelector('input, select, textarea, button');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }
  }

  closeModal(modal) {
    if (modal) {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  }

  // Tab System
  initializeTabs() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(container => {
      const tabButtons = container.querySelectorAll('.tab-button');
      const tabPanes = container.querySelectorAll('.tab-pane');

      tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = button.getAttribute('data-tab-target');

          // Remove active classes
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));

          // Add active classes
          button.classList.add('active');
          const targetPane = container.querySelector(`#${targetId}`);
          if (targetPane) {
            targetPane.classList.add('active');
          }
        });
      });
    });
  }

  // Form Handling
  initializeForms() {
    // Form validation
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validateForm(form)) {
          this.handleFormSubmission(form);
        }
      });

      // Real-time validation
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
    });

    // File upload handling
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
      input.addEventListener('change', (e) => this.handleFileUpload(e));
    });
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('[required]');

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldGroup = field.closest('.form-group');
    let errorMessage = '';

    // Clear previous errors
    this.clearFieldError(field);

    // Required validation
    if (field.hasAttribute('required') && !value) {
      errorMessage = 'This field is required.';
    }

    // Email validation
    if (field.type === 'email' && value && !this.isValidEmail(value)) {
      errorMessage = 'Please enter a valid email address.';
    }

    // Custom validation
    const pattern = field.getAttribute('pattern');
    if (pattern && value && !new RegExp(pattern).test(value)) {
      errorMessage = field.getAttribute('data-error') || 'Invalid format.';
    }

    if (errorMessage) {
      this.showFieldError(field, errorMessage);
      return false;
    }

    return true;
  }

  showFieldError(field, message) {
    const fieldGroup = field.closest('.form-group');
    if (fieldGroup) {
      field.classList.add('error');

      let errorElement = fieldGroup.querySelector('.field-error');
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        fieldGroup.appendChild(errorElement);
      }
      errorElement.textContent = message;
    }
  }

  clearFieldError(field) {
    const fieldGroup = field.closest('.form-group');
    if (fieldGroup) {
      field.classList.remove('error');
      const errorElement = fieldGroup.querySelector('.field-error');
      if (errorElement) {
        errorElement.remove();
      }
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  handleFormSubmission(form) {
    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';
    }

    // Simulate API call
    setTimeout(() => {
      this.showNotification('Form submitted successfully!', 'success');

      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.getAttribute('data-original-text') || 'Submit';
      }

      // Close modal if form is in modal
      const modal = form.closest('.modal');
      if (modal) {
        this.closeModal(modal);
      }
    }, 1500);
  }

  handleFileUpload(e) {
    const input = e.target;
    const files = input.files;

    if (files.length > 0) {
      const file = files[0];
      const fileName = file.name;
      const fileSize = (file.size / 1024 / 1024).toFixed(2) + ' MB';

      this.showNotification(`File "${fileName}" (${fileSize}) selected`, 'info');
    }
  }

  // Notification System
  initializeNotifications() {
    // Create notification container if it doesn't exist
    if (!document.querySelector('.notification-container')) {
      const container = document.createElement('div');
      container.className = 'notification-container';
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }
  }

  showNotification(message, type = 'info', duration = 4000) {
    const container = document.querySelector('.notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
      background: var(--bg-primary);
      border: 1px solid var(--border-primary);
      border-left: 4px solid var(--color-${type === 'error' ? 'error' : type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'primary'});
      border-radius: var(--radius-lg);
      padding: var(--space-4) var(--space-5);
      margin-bottom: var(--space-3);
      box-shadow: var(--shadow-lg);
      pointer-events: auto;
      cursor: pointer;
      transform: translateX(100%);
      transition: var(--transition-base);
      max-width: 400px;
      font-size: var(--font-size-sm);
      color: var(--text-primary);
    `;
    notification.textContent = message;

    container.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);

    // Auto remove
    setTimeout(() => {
      this.removeNotification(notification);
    }, duration);

    // Click to remove
    notification.addEventListener('click', () => {
      this.removeNotification(notification);
    });
  }

  removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  // Tooltips
  initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        const text = element.getAttribute('data-tooltip');
        this.showTooltip(e.target, text);
      });

      element.addEventListener('mouseleave', (e) => {
        this.hideTooltip();
      });
    });
  }

  showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
      position: absolute;
      background: var(--color-gray-800);
      color: var(--text-white);
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-base);
      font-size: var(--font-size-xs);
      z-index: 10000;
      pointer-events: none;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.2s;
    `;

    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';

    setTimeout(() => {
      tooltip.style.opacity = '1';
    }, 10);

    this.currentTooltip = tooltip;
  }

  hideTooltip() {
    if (this.currentTooltip) {
      this.currentTooltip.style.opacity = '0';
      setTimeout(() => {
        if (this.currentTooltip && this.currentTooltip.parentNode) {
          this.currentTooltip.parentNode.removeChild(this.currentTooltip);
        }
        this.currentTooltip = null;
      }, 200);
    }
  }

  // Mock Charts (Simple CSS-based visualizations)
  initializeCharts() {
    // Progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const fill = bar.querySelector('.progress-fill');
      const value = bar.getAttribute('data-value') || 0;

      setTimeout(() => {
        if (fill) {
          fill.style.width = value + '%';
        }
      }, 500);
    });

    // Animated counters
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'));
      this.animateCounter(counter, target);
    });
  }

  animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.floor(current).toLocaleString();

      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      }
    }, 16);
  }

  // Search Functionality
  initializeSearch() {
    const searchInputs = document.querySelectorAll('.app-search-input, .admin-search-input');

    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        this.performSearch(query, input);
      });
    });
  }

  performSearch(query, input) {
    // Mock search results
    if (query.length > 2) {
      console.log(`Searching for: ${query}`);
      // In a real app, this would trigger API calls
      this.showNotification(`Searching for "${query}"...`, 'info', 2000);
    }
  }

  // Wizard Navigation
  initializeWizards() {
    const wizards = document.querySelectorAll('.app-wizard, .admin-wizard');

    wizards.forEach(wizard => {
      const steps = wizard.querySelectorAll('.wizard-step');
      const nextBtns = wizard.querySelectorAll('.wizard-next');
      const prevBtns = wizard.querySelectorAll('.wizard-prev');

      let currentStep = 0;

      nextBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (currentStep < steps.length - 1) {
            currentStep++;
            this.updateWizardStep(wizard, currentStep);
          }
        });
      });

      prevBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          if (currentStep > 0) {
            currentStep--;
            this.updateWizardStep(wizard, currentStep);
          }
        });
      });
    });
  }

  updateWizardStep(wizard, stepIndex) {
    const steps = wizard.querySelectorAll('.wizard-step');
    const indicators = wizard.querySelectorAll('.app-wizard-step, .admin-wizard-step');

    steps.forEach((step, index) => {
      step.classList.toggle('active', index === stepIndex);
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === stepIndex);
      indicator.classList.toggle('completed', index < stepIndex);
    });
  }

  // Animation Helpers
  initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in, .scale-in');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Hover effects for cards
    const cards = document.querySelectorAll('.card, .app-widget, .admin-stat-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }

  // Utility Methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // Mock data generators for prototypes
  generateMockData() {
    return {
      tenants: [
        { name: 'Acme Corp', users: 150, status: 'active', plan: 'Enterprise' },
        { name: 'TechStart Inc', users: 45, status: 'active', plan: 'Professional' },
        { name: 'Global Solutions', users: 200, status: 'pending', plan: 'Enterprise' },
      ],
      connections: [
        { name: 'SAP', status: 'connected', lastSync: '2 hours ago' },
        { name: 'QuickBooks', status: 'connected', lastSync: '1 day ago' },
        { name: 'Bamboo HR', status: 'disconnected', lastSync: 'Never' },
      ],
      insights: [
        'Revenue increased by 15% this quarter',
        'Employee satisfaction improved by 8%',
        'Data processing time reduced by 23%'
      ]
    };
  }
}

// Initialize the application
window.PrototypeApp = new PrototypeApp();

// Add CSS for dynamic elements
const dynamicStyles = `
<style>
.notification {
  font-family: 'Inter', sans-serif;
}

.tooltip {
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.1);
}

.field-error {
  color: var(--color-error);
  font-size: var(--font-size-xs);
  margin-top: var(--space-1);
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  align-items: center;
  justify-content: center;
}

.modal.show {
  display: flex;
}

.modal-content {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-secondary);
}

.modal-close {
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-base);
  transition: var(--transition-base);
}

.modal-close:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

body.modal-open {
  overflow: hidden;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.slide-in {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.slide-in.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.scale-in {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s ease;
}

.scale-in.animate-in {
  opacity: 1;
  transform: scale(1);
}

.wizard-step {
  display: none;
}

.wizard-step.active {
  display: block;
}

@media (max-width: 768px) {
  .notification-container {
    left: 20px;
    right: 20px;
    top: 10px;
  }

  .modal-content {
    margin: var(--space-4);
    width: calc(100% - 2rem);
  }
}
</style>
`;

// Inject dynamic styles
document.head.insertAdjacentHTML('beforeend', dynamicStyles);
// Header Builder
function buildHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return;

  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
        <div class="header-content">
            <a href="./" class="logo">
                <div class="logo-icon">🎨</div>
                Trygamng.com
            </a>
            
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="./" class="nav-link">Studio</a></li>
                    <li><a href="./battle-log.html" class="nav-link">Color Diaries</a></li>
                    <li><a href="./hq-contacts.html" class="nav-link">Contact</a></li>
                    <li><a href="./offroad-disclaimer.html" class="nav-link">Painter's Guide</a></li>
                </ul>
            </nav>
            
            <button class="burger-menu" id="burger-menu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </button>
        </div>
        
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-nav-list">
                <li><a href="./" class="mobile-nav-link">Studio</a></li>
                <li><a href="./battle-log.html" class="mobile-nav-link">Color Diaries</a></li>
                <li><a href="./hq-contacts.html" class="mobile-nav-link">Contact</a></li>
                <li><a href="./offroad-disclaimer.html" class="mobile-nav-link">Painter's Guide</a></li>
            </ul>
        </div>
    `;

  headerPlaceholder.appendChild(header);

  // Mobile menu functionality
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerMenu && mobileMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Footer Builder
function buildFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  const footer = document.createElement("footer");
  footer.className = "footer";

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>About Tap To Color</h3>
                    <p>Discover the joy of digital coloring with our relaxing art game. Perfect for stress relief and creative expression for all ages.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="./">Studio</a></li>
                        <li><a href="./battle-log.html">Color Diaries</a></li>
                        <li><a href="./hq-contacts.html">Contact</a></li>
                        <li><a href="./offroad-disclaimer.html">Painter's Guide</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <a href="mailto:connection@trygamng.com">connection@trygamng.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <a href="tel:+1-403-555-0123">+1 (403) 555-0123</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <span>100 Queen Street West, Toronto, Ontario M5H 2N2, Canada</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span class="copyright-year">${currentYear}</span> Trygamng.com - All rights reserved</p>
                <div style="margin-top: var(--spacing-sm);">
                    <a href="./cookie-policy.html">Cookie Policy</a> | 
                    <a href="./privacy-policy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    `;

  footerPlaceholder.appendChild(footer);
}

// Initialize builders when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
});

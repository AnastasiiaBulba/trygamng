# Tap To Color: Painting Book - Website

A modern, responsive website for the relaxing digital coloring game "Tap To Color: Painting Book". Built with pure HTML, CSS, and JavaScript using a mobile-first approach.

## 🌟 Features

- **Mobile-First Design**: Fully responsive across all devices (360px, 768px, 1280px breakpoints)
- **Modern UI/UX**: Clean, relaxing design with smooth animations and hover effects
- **Dynamic Content**: Content loaded from JSON data structure
- **Cookie Management**: GDPR-compliant cookie banner with localStorage
- **Contact Form**: Functional contact form with validation
- **Interactive Elements**: Smooth scrolling, animations, and micro-interactions
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features

## 📁 Project Structure

```
trygamng/
├── index.html                 # Homepage
├── battle-log.html           # News page
├── hq-contacts.html          # Contact page
├── offroad-disclaimer.html   # Disclaimer page
├── jeep-cookies.html         # Cookie Policy
├── jeep-privacy.html         # Privacy Policy
├── css/
│   ├── main.css             # Global styles and CSS variables
│   ├── header.css           # Header and navigation styles
│   ├── footer.css           # Footer styles
│   ├── hero.css             # Hero section styles
│   ├── features.css         # Features section styles
│   ├── how-to-play.css      # How to play section styles
│   ├── drawing-tools.css    # Drawing tools section styles
│   ├── reviews.css          # Reviews section styles
│   ├── news.css             # News page styles
│   ├── contact.css          # Contact page styles
│   ├── disclaimer.css       # Legal pages styles
│   └── cookie-banner.css    # Cookie banner styles
├── js/
│   ├── builder.js           # Dynamic header/footer builder
│   ├── data.js              # JSON data and content loading
│   ├── main.js              # Main functionality and interactions
│   └── cookie-banner.js     # Cookie management
└── img/
    ├── favicon500.jpg       # Site favicon
    ├── new.jpg              # News image 1
    ├── new2.jpg             # News image 2
    ├── new3.jpg             # News image 3
    └── [other images]       # Additional images
```

## 🎨 Design System

### Color Palette

- **Primary**: #6B73FF (Soft Blue)
- **Secondary**: #FF6B9D (Pink)
- **Accent**: #4ECDC4 (Mint Green)
- **Warm**: #FFE66D (Yellow)
- **Neutral**: Various grays and whites

### Typography

- **Primary Font**: Arial, sans-serif
- **Secondary Font**: Times New Roman, serif
- **Responsive Sizing**: Using clamp() for fluid typography

### Spacing System

- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **XXL**: 4rem

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Navigate** through the different pages using the header menu

## 📱 Responsive Breakpoints

- **Mobile**: 360px and below
- **Tablet**: 768px and above
- **Desktop**: 1280px and above

## 🛠️ Technical Features

### CSS Features

- CSS Custom Properties (Variables)
- Flexbox Layout (No CSS Grid)
- Mobile-first responsive design
- Smooth animations and transitions
- Modern hover effects

### JavaScript Features

- Dynamic content loading from JSON
- Cookie management with localStorage
- Form validation
- Smooth scrolling
- Intersection Observer for animations
- Mobile menu functionality

### Performance Optimizations

- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minimal external dependencies

## 📄 Pages Overview

### Homepage (`index.html`)

- Hero section with animated color palette
- Features section highlighting game benefits
- How to play instructions
- Drawing tools showcase
- Customer reviews
- Cookie banner

### News (`battle-log.html`)

- Latest game updates and features
- Community highlights
- "Read More" functionality for articles
- Responsive article grid

### Contact (`hq-contacts.html`)

- Contact information (Canada location)
- Contact form with validation
- Google Maps integration
- Form submission notifications

### Legal Pages

- **Disclaimer** (`offroad-disclaimer.html`): Game usage guidelines
- **Cookie Policy** (`jeep-cookies.html`): Cookie usage information
- **Privacy Policy** (`jeep-privacy.html`): Data protection details

## 🎯 Key Features

### Dynamic Header/Footer

- Built using JavaScript builder pattern
- Consistent across all pages
- Mobile-responsive navigation
- Burger menu for mobile devices

### Cookie Management

- GDPR-compliant cookie banner
- localStorage for user preferences
- Accept/decline functionality
- Link to detailed cookie policy

### Contact Form

- Real-time validation
- Success/error notifications
- Form field validation
- Responsive design

### Content Management

- JSON-based content structure
- Easy to update and maintain
- Dynamic content loading
- Modular data organization

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Customization

### Adding New Content

1. Update the `siteData` object in `js/data.js`
2. Add corresponding HTML structure
3. Style new elements using existing CSS variables

### Modifying Colors

1. Update CSS variables in `css/main.css`
2. All colors use the `--primary-color`, `--secondary-color`, etc. variables

### Adding New Pages

1. Create new HTML file
2. Include required CSS and JS files
3. Add navigation links in `js/builder.js`

## 🔧 Development Notes

- **No external dependencies** - Pure HTML, CSS, JavaScript
- **Mobile-first approach** - Designed for mobile, enhanced for desktop
- **Semantic HTML** - Proper heading hierarchy and accessibility
- **Performance focused** - Optimized for fast loading
- **Maintainable code** - Well-organized and commented

## 📞 Contact Information

- **Email**: connection@trygamng.com
- **Phone**: +1 (403) 555-0123
- **Location**: 100 Queen Street West, Toronto, Ontario M5H 2N2, Canada

## 📄 License

This project is created for the "Tap To Color: Painting Book" game website. All rights reserved.

---

**Built with ❤️ for a relaxing coloring experience**

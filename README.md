# My Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects. Built with React, Three.js, and modern web technologies.

**Live Site:** [mysiriki.com](https://mysiriki.com)

---

## 🚀 Features

- **3D Interactive Elements**: Immersive 3D computer and planet animations using Three.js
- **Smooth Animations**: GSAP and Framer Motion for fluid, professional animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Experience Timeline**: Interactive vertical timeline showcasing work experience
- **Education Timeline**: Academic journey with degree details and GPA
- **Project Showcase**: Portfolio projects with tags, descriptions, and links
- **Contact Form**: Integrated EmailJS contact form
- **Modern UI/UX**: Clean, professional design with gradient effects
- **Performance Optimized**: Fast loading times and optimized assets

---

## 🛠️ Tech Stack

### **Frontend Framework & Core**
- **React 18.2.0** - Modern UI library for building interactive interfaces
- **Vite 4.1.0** - Next-generation frontend build tool for fast development
- **React Router DOM 6.8.1** - Client-side routing

### **3D Graphics & Animation**
- **Three.js 0.172.0** - 3D graphics library for WebGL
- **@react-three/fiber 8.11.1** - React renderer for Three.js
- **@react-three/drei 9.56.24** - Useful helpers for react-three-fiber
- **maath 0.5.2** - Math utilities for 3D graphics

### **Animation Libraries**
- **GSAP 3.12.7** - Professional animation library
  - **@gsap/react 2.1.2** - React integration for GSAP
  - ScrollTrigger plugin for scroll-based animations
- **Framer Motion 9.0.7** - Production-ready motion library for React

### **Styling**
- **Tailwind CSS 3.2.6** - Utility-first CSS framework
- **PostCSS 8.4.21** - CSS transformation tool
- **Autoprefixer 10.4.13** - Automatic vendor prefixing

### **UI Components & Icons**
- **@heroicons/react 2.2.0** - Beautiful hand-crafted SVG icons
- **react-icons 5.4.0** - Popular icons library
- **react-tilt 1.0.2** - 3D tilt effect for cards
- **vanilla-tilt 1.8.1** - Smooth 3D tilt library
- **react-vertical-timeline-component 3.6.0** - Vertical timeline component

### **Form Handling**
- **@emailjs/browser 3.10.0** - Email service integration
- **email-js 2.0.3** - Email functionality

### **Development Tools**
- **TypeScript Types** - Type definitions for React and React DOM
- **@vitejs/plugin-react 3.1.0** - Vite plugin for React

---

## 📁 Project Structure

```
mysiriki-portfolio/
├── public/
│   ├── desktop_pc/          # 3D computer model (GLTF)
│   └── planet/              # 3D planet model (GLTF)
├── src/
│   ├── assets/              # Images, icons, and static assets
│   │   ├── company/         # Company logos
│   │   └── tech/            # Technology icons
│   ├── components/          # React components
│   │   ├── canvas/         # 3D canvas components
│   │   │   ├── Computers.jsx
│   │   │   ├── Earth.jsx
│   │   │   └── Stars.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/          # Constants and configuration
│   │   └── index.js        # Services, technologies, experiences, projects
│   ├── data/               # Data files
│   │   └── personalData.js # Personal information
│   ├── hoc/                # Higher-order components
│   │   └── SectionWrapper.jsx
│   ├── utils/              # Utility functions
│   │   └── motion.js       # Animation variants
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles
│   └── styles.js           # Style constants
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
├── postcss.config.cjs     # PostCSS configuration
└── vercel.json            # Vercel deployment configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sivasiri/mysiriki-portfolio.git
   cd mysiriki-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Configuration

### Personal Data

Update your personal information in `src/data/personalData.js`:

```javascript
export const personalData = {
  name: "Your Name",
  role: "Your Role",
  heroTagline: "Your tagline",
  bio: "Your bio",
  email: "your.email@example.com",
  phone: "+1 (XXX) XXX-XXXX",
  // ... more fields
};
```

### Projects & Experience

Edit `src/constants/index.js` to update:
- Services
- Technologies
- Work experiences
- Education
- Projects

### EmailJS Setup (Contact Form)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and template
3. Add environment variables in Vercel (or `.env` file for local):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🎨 Customization

### Colors

Edit `tailwind.config.cjs` to customize the color scheme:

```javascript
colors: {
  primary: "#050816",
  secondary: "#aaa6c3",
  tertiary: "#151030",
  // ... add your colors
}
```

### 3D Models

Replace 3D models in `public/`:
- `desktop_pc/` - Computer model for Hero section
- `planet/` - Earth model for Contact section

Models should be in GLTF format.

### Animations

Customize animations in:
- `src/utils/motion.js` - Framer Motion variants
- Component files - GSAP animations

---

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables (if using EmailJS)
4. Deploy automatically on every push

### Other Platforms

The site can be deployed to:
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- **Any static hosting service**

---

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 📱 Responsive Breakpoints

- **Mobile**: < 450px (xs)
- **Tablet**: 450px - 768px
- **Desktop**: > 768px

---

## 🎯 Key Features Explained

### 3D Graphics
- **Three.js** powers the 3D computer and planet animations
- **React Three Fiber** provides React bindings for Three.js
- Models are loaded from GLTF files in the `public/` directory

### Animations
- **GSAP ScrollTrigger** creates scroll-based animations
- **Framer Motion** handles component transitions
- Staggered animations for cards and lists

### Performance
- **Vite** provides fast HMR (Hot Module Replacement)
- Code splitting for optimal loading
- Optimized asset loading

---

## 📄 License

This project is private and personal. All rights reserved.

---

## 👤 Author

**Surya Sai Siva Krishna Siriki**

- Portfolio: [mysiriki.com](https://mysiriki.com)
- GitHub: [@sivasiri](https://github.com/sivasiri)
- LinkedIn: [Siva Siriki](https://www.linkedin.com/in/siva-siriki-09261716b/)
- Email: surya.sai.sk.s@gmail.com

---

## 🙏 Acknowledgments

- Built with modern web technologies
- 3D models from various sources (see licenses in `public/` folders)
- Icons from Heroicons and React Icons
- Inspired by modern portfolio designs

---

## 📝 Notes

- The site is optimized for performance and SEO
- All animations are GPU-accelerated for smooth performance
- The contact form requires EmailJS configuration
- 3D models can be replaced with your own GLTF files

---

**Last Updated:** November 2025




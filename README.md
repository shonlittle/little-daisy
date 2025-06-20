# Little Daisy Memorial Scholarship Website

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15.12-blue.svg)](https://mui.com/)
[![React Router](https://img.shields.io/badge/React%20Router-6.22.3-blue.svg)](https://reactrouter.com/)

A responsive, modern website for the Little Daisy Memorial Scholarship, honoring the memory of Daisy Christine Little through dance education support.

## 📖 About

The Little Daisy Memorial Scholarship is an annual award that covers class tuition for students who truly embody the heart and spirit of Relevé—demonstrating character, passion, and a love for dance. The scholarship honors the memory of Daisy Christine Little, who was stillborn on May 7, 2012.

**"Relevé"** means to rise in French. In ballet, it describes the movement of lifting onto the balls of the feet—a gesture of grace, strength, and aspiration. This scholarship helps young dancers rise toward their dreams.

## ✨ Features

### 🎨 **Modern Design**

- **Responsive Layout**: Fully responsive design that works on all devices
- **Material-UI Components**: Modern, accessible UI components
- **Custom Theme**: Beautiful color scheme with primary pink (#9e1f63)
- **Typography**: Responsive typography that scales appropriately

### 📱 **Mobile-First Responsive Design**

- **Hamburger Navigation**: Collapsible mobile menu with smooth animations
- **Touch-Friendly**: Optimized for touch interactions on mobile devices
- **Adaptive Layouts**: Content reflows beautifully across screen sizes
- **Performance Optimized**: Fast loading and smooth transitions

### 🏠 **Pages & Content**

- **Home**: Welcome message, scholarship history, and recipient information
- **About**: Daisy's story and scholarship process details
- **Donate**: Online donation via PayPal and mail-in options
- **Contact**: Contact form for inquiries

### 🔧 **Technical Features**

- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing with future-ready configuration
- **Responsive Images**: Optimized image loading and scaling
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠 Technology Stack

### **Frontend Framework**

- **React 18.2.0**: Modern React with concurrent features
- **TypeScript 4.9.5**: Type-safe JavaScript development

### **UI Library**

- **Material-UI (MUI) 5.15.12**: Comprehensive React component library
- **Emotion**: CSS-in-JS styling solution
- **MUI Icons**: Beautiful, consistent icon set

### **Routing**

- **React Router DOM 6.22.3**: Client-side routing with future flags

### **Development Tools**

- **Create React App**: Zero-configuration build tool
- **ESLint**: Code linting and quality enforcement
- **Jest**: Testing framework
- **Web Vitals**: Performance monitoring

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 16 or higher
- **npm**: Version 8 or higher (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shonlittle/little-daisy.git
   cd little-daisy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (one-way operation)
npm run eject
```

## 📁 Project Structure

```
little-daisy/
├── public/                 # Static assets
│   ├── images/            # Image files
│   │   └── images/        # Image imports
│   ├── index.html         # Main HTML template
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   ├── Navigation.tsx # Responsive navigation
│   │   ├── Logo.tsx       # Logo component
│   │   └── PageContainer.tsx # Page wrapper
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── About.tsx      # About page
│   │   ├── Contact.tsx    # Contact page
│   │   └── Donate.tsx     # Donate page
│   ├── assets/            # Static assets
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── routes.tsx         # Route definitions
│   ├── theme.ts           # Material-UI theme configuration
│   ├── index.tsx          # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🎨 Design System

### **Color Palette**

- **Primary**: `#9e1f63` (Deep Pink)
- **Primary Light**: `#b54d7f`
- **Primary Dark**: `#6e1545`
- **Secondary**: `#f8e1e8` (Light Pink)
- **Background**: `#ffffff` (White)
- **Paper**: `#fafafa` (Light Gray)

### **Typography**

- **Font Family**: Roboto, Helvetica, Arial, sans-serif
- **Responsive Scaling**: Automatically scales based on screen size
- **Line Heights**: Optimized for readability (1.5-1.6)

### **Breakpoints**

- **xs**: 0-599px (Mobile)
- **sm**: 600-959px (Large Mobile/Small Tablet)
- **md**: 960-1279px (Tablet)
- **lg**: 1280-1919px (Desktop)
- **xl**: 1920px+ (Large Desktop)

## 📱 Responsive Features

### **Mobile Navigation**

- Hamburger menu for mobile devices
- Slide-out drawer navigation
- Touch-friendly interaction areas

### **Adaptive Layouts**

- Flexible grid systems
- Responsive typography
- Optimized spacing for different screen sizes

### **Performance Optimizations**

- Responsive images with proper scaling
- Touch-action optimizations
- Smooth scrolling on mobile devices

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### **Deployment Options**

#### **Netlify**

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

#### **Vercel**

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

#### **GitHub Pages**

1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/little-daisy",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 📝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Code Style Guidelines**

- Use TypeScript for all new code
- Follow existing component patterns
- Include JSDoc comments for components
- Use Material-UI components when possible
- Ensure responsive design for all new features

## 📄 License

© 2025 Little Daisy Fund, Inc. All rights reserved.

## 👥 Contact

- **Website**: [Little Daisy Memorial Scholarship](https://littledaisy.org)
- **Email**: Contact via the website contact form

## 🙏 Acknowledgments

- **Relevé Studios**: For their partnership and support
- **Material-UI**: For the excellent component library
- **React Team**: For the amazing framework
- **Daisy Christine Little**: In whose memory this scholarship exists

---

**Made with ❤️ for Daisy and all the young dancers who inspire us to rise.**

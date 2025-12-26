# Hope Hospital Mockup 🏥

A modern, responsive website mockup for Hope Hospital featuring a premium design with MUI components, smooth animations, and an intuitive user interface.

## 🌐 Live Demo

**[View Live Site](https://samkarya.github.io/hopehospitalmockup/)**

## ✨ Features

- **Modern Design**: Premium UI with Material-UI (MUI) components
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Sections**:
  - Hero section with call-to-action
  - Doctors showcase with profiles
  - Hospital facilities carousel
  - Patient testimonials
  - Insurance information
  - Excellence highlights
  - Statistics display
  - Booking card for appointments
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Performance Optimized**: Code splitting for faster load times

## 🛠️ Technology Stack

- **Framework**: React
- **Build Tool**: Vite 7.2.5 (Rolldown)
- **UI Library**: Material-UI (MUI) 7.3.6
- **Styling**: Emotion (CSS-in-JS)
- **Carousel**: Swiper 12.0.3
- **Icons**: MUI Icons Material
- **Deployment**: GitHub Pages

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samkarya/hopehospitalmockup.git
   cd hopehospitalmockup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 🚀 Deployment

### Automatic Deployment

This project uses GitHub Actions for automatic deployment. Every push to the `master` branch will:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages automatically

The workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

To manually deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### GitHub Pages Configuration

Ensure your repository settings are configured:
1. Go to **Settings → Pages**
2. Set **Source** to "GitHub Actions"
3. The site will be available at `https://samkarya.github.io/hopehospitalmockup/`

## 📁 Project Structure

```
hopehospitalmockup/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── assets/                 # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── cards/             # Card components
│   │   ├── common/            # Reusable components
│   │   └── sections/          # Page sections
│   ├── theme/                 # MUI theme configuration
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies & scripts
```

## 🎨 Design Philosophy

This mockup focuses on:
- **Premium aesthetics** with modern color palettes and typography
- **User experience** with intuitive navigation and clear CTAs
- **Performance** through optimized builds and code splitting
- **Accessibility** following best practices for inclusive design

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is for demonstration purposes.

## 👤 Author

**Samkarya**

- GitHub: [@samkarya](https://github.com/samkarya)

---

Built with ❤️ using React and Material-UI

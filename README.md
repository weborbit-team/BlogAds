# NextMUI - Next.js + Material-UI Showcase

A modern, full-featured web application showcasing the powerful combination of Next.js and Material-UI (MUI). This project demonstrates best practices for building scalable React applications with a comprehensive component library, dark theme, and responsive design.

## 🚀 Features

- **Next.js 15.5.4** with App Router and Turbopack
- **Material-UI v7** with custom dark theme
- **Responsive Design** with mobile-first approach
- **Modern UI Components** showcase
- **TypeScript Ready** configuration
- **ESLint** for code quality
- **Tailwind CSS** integration
- **Redux Toolkit** for state management
- **Axios** for API calls
- **Component-based Architecture**

## 📁 Project Structure

```
nextmui/
├── app/                          # Next.js App Router
│   ├── info/                     # Info page route
│   │   └── page.js              # Technology stack information
│   ├── favicon.ico              # App favicon
│   ├── layout.js                # Root layout with theme provider
│   └── page.js                  # Home page with MUI showcase
├── components/                   # Reusable React components
│   ├── providers/               # Context providers
│   │   └── ThemeProvider.js     # MUI theme provider wrapper
│   ├── ui/                      # UI components
│   │   ├── FeatureCard.js       # Feature showcase card
│   │   └── Header.js            # Navigation header
│   └── index.js                 # Component exports
├── constants/                    # Application constants
├── lib/                         # Utility libraries
│   └── theme.js                 # MUI custom theme configuration
├── public/                      # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── services/                    # API services
│   ├── api/
│   │   ├── index.js            # Axios instance configuration
│   │   └── test.js             # Test API endpoints
│   └── index.js                # Service exports
├── store/                       # Redux store configuration
│   ├── actions/
│   │   └── testAction.js       # Redux actions
│   ├── reducers/
│   │   └── testSlice.js        # Redux slices
│   └── store.js                # Store configuration
├── styles/                      # Global styles
│   └── globals.css             # Global CSS styles
├── utils/                       # Utility functions
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── eslint.config.mjs           # ESLint configuration
├── jsconfig.json               # JavaScript configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
└── README.md                   # Project documentation
```

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **Turbopack** - Ultra-fast bundler for development

### UI & Styling
- **Material-UI v7.3.4** - React component library
- **@emotion/react & @emotion/styled** - CSS-in-JS styling
- **@mui/icons-material** - Material Design icons
- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom Dark Theme** - Professional dark mode design

### State Management & Data
- **Redux Toolkit** - Modern Redux for state management
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript Ready** - Full TypeScript support configured

## 🎨 UI Components Showcase

The application demonstrates a comprehensive set of MUI components:

### Layout & Navigation
- Responsive AppBar with mobile drawer
- Grid system with breakpoints
- Container and Box layouts

### Data Display
- Cards with elevation and styling
- Lists with avatars and icons
- Typography with custom variants
- Chips and badges
- Progress indicators (linear & circular)

### Input Controls
- Text fields with validation
- Sliders with value display
- Switches and checkboxes
- Rating components
- Buttons with variants

### Feedback
- Alerts with severity levels
- Tooltips for enhanced UX
- Snackbars for notifications

### Surfaces
- Papers with custom elevation
- Accordions for expandable content
- Tabs for content organization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextmui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development with Turbopack (faster)
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 🎯 Key Features Demonstrated

### 1. **Responsive Design**
- Mobile-first approach with MUI breakpoints
- Adaptive navigation (drawer on mobile, tabs on desktop)
- Flexible grid layouts

### 2. **Dark Theme Implementation**
- Custom MUI theme with dark palette
- Consistent color scheme across components
- Professional gradient backgrounds

### 3. **Component Architecture**
- Modular component structure
- Reusable UI components
- Clean separation of concerns

### 4. **Modern React Patterns**
- Functional components with hooks
- Context providers for theme management
- State management with useState

### 5. **Performance Optimization**
- Next.js App Router for optimal routing
- Turbopack for faster development builds
- Optimized font loading with next/font

## 🔧 Configuration Files

### `next.config.mjs`
Basic Next.js configuration ready for customization.

### `jsconfig.json`
Path mapping configuration for clean imports using `@/` alias.

### `eslint.config.mjs`
ESLint configuration extending Next.js core web vitals rules.

### `postcss.config.mjs`
PostCSS configuration with Tailwind CSS plugin.

## 🌐 Pages & Routes

- **`/`** - Home page with comprehensive MUI component showcase
- **`/info`** - Technology stack information and benefits

## 🎨 Theme Customization

The custom theme (`lib/theme.js`) includes:
- Dark color palette with blue and purple accents
- Custom typography using Geist font family
- Component style overrides for buttons, cards, and papers
- Gradient backgrounds and modern styling

## 📱 Responsive Breakpoints

- **xs**: 0px and up
- **sm**: 600px and up  
- **md**: 900px and up
- **lg**: 1200px and up
- **xl**: 1536px and up

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
```bash
# Build the application
npm run build

# Start the production server
npm run start
```

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and contributions

### Material-UI Resources
- [MUI Documentation](https://mui.com/) - Complete component library docs
- [MUI Templates](https://mui.com/templates/) - Professional templates
- [MUI Theming](https://mui.com/customization/theming/) - Theme customization guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing React framework
- [Material-UI Team](https://mui.com/) for the comprehensive component library
- [Vercel](https://vercel.com/) for the deployment platform
- [Geist Font](https://vercel.com/font) for the modern typography

---

**Built with ❤️ using Next.js and Material-UI**

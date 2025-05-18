# Periodic Vista 3D

A modern, interactive periodic table visualization built with React, featuring both 2D and 3D views of chemical elements. This project provides an engaging way to explore and learn about the periodic table of elements.

## Features

- Interactive periodic table with both 2D and 3D visualization modes
- Detailed element information cards with comprehensive data
- Element filtering by category, state, period, and block
- Responsive design with modern UI components
- Real-time element data visualization
- Interactive element details view with multiple tabs
- Category-based color coding and legend

## Tech Stack

- React with TypeScript
- Vite for build tooling
- React Router for navigation
- TanStack Query for data management
- Modern UI components with custom styling
- 3D visualization capabilities

## Project Structure

```
periodic-vista-3d/
├── public/
│   ├── fonts/
│   ├── lovable-uploads/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
```

## Key Components

### ElementCard
- Displays basic element information
- Interactive hover states
- Shows atomic number, symbol, name, and atomic mass
- Category and electron configuration on hover

### ElementCard3D
- 3D visualization of elements
- Interactive hover effects
- Displays key element properties
- Smooth transitions and animations

### ElementDetail
- Comprehensive element information
- Multiple tabs for different data categories:
  - Properties
  - Structure
  - Uses
- Physical and atomic properties
- Historical information
- Electron configuration

### ElementFilters
- Filter elements by:
  - Category
  - State
  - Period
  - Block
- Interactive filter controls
- Real-time filtering

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

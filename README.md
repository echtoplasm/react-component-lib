# React Component Library for Classmates

A collection of simple, well-documented React components to help you learn React or use in your capstone projects. Each component demonstrates fundamental React concepts with clear explanations.

## Quick Start

### Prerequisites
- Node.js installed on your computer
- Basic knowledge of JavaScript

### Clone and Run
```bash
# Clone the repository
git clone https://github.com/echtoplasm/react-component-lib
cd rpractice

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## What's Inside

### Current Components

**Dropdown Component**
- Controlled form inputs
- State management with `useState`
- Event handling with `onChange`
- Conditional rendering

**Counter Component**
- Multiple state variables
- `useEffect` hook for side effects
- `setInterval` and cleanup functions
- Error handling and validation
- Updater functions to avoid stale closures

**Modal Component**
- Conditional rendering with boolean state
- Event propagation with `stopPropagation()`
- Click-outside-to-close pattern
- Portal-like overlay patterns

### Coming Soon

**API Fetch Component**
- Data fetching with `fetch()` or `axios`
- Loading states
- Error handling
- Working with external APIs

**Lucide Icons Component**
- Integrating third-party icon libraries
- Using Lucide React icons
- Icon sizing and styling

## Key React Concepts Covered

- **useState** - Managing component state
- **useEffect** - Side effects, cleanup, and dependency arrays
- **Conditional Rendering** - Showing/hiding elements based on state
- **Event Handling** - onClick, onChange, and other events
- **Props** - Passing data between components
- **Component Composition** - Building complex UIs from simple components

## Project Structure
```
src/
├── App.js              # Main app with routing
├── App.css             # Global styles (dark mode theme)
├── components/         # Reusable components
│   ├── Navbar.js
│   ├── Dropdown.js
│   ├── Counter.js
│   └── Modal.js
└── pages/              # Page components
```

## Using Components in Your Project

Each component is self-contained and can be copied into your own project. Simply:

1. Copy the component file
2. Copy the relevant CSS styles
3. Import and use in your app

Example:
```jsx
import Dropdown from './components/Dropdown';

function App() {
  return ;
}
```

## Styling

This project uses a modern dark mode theme with:
- Custom CSS (no framework required)
- Flexbox layouts
- Smooth transitions and hover effects
- Responsive design

Feel free to modify `App.css` to match your project's theme!

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production in the `build` folder

### `npm test`
Runs tests (if configured)

## Need Help?

- Check the comments in each component file
- Read the explanation paragraphs in the UI


## Contributing

Found a bug or want to add a component? Feel free to contribute or suggest improvements!

---

Built with ❤️ for classmates preparing for capstone projects

import { LucideComputer } from "lucide-react";
import React from "react";
import LucideComponent from "../components/fundamentals/Lucide";

const LucidePage = () => {
  return (
  <div className="card">
      <h1 className="compTitle">Lucide Component</h1>
      <p className='explainer'>
        Lucide is a community-maintained icon library offering over 1,400 clean, consistent SVG
        icons. It's designed to be lightweight and tree-shakeable, meaning you only import the icons
        you actually use. Each icon is a React component that accepts props like size, color, and
        strokeWidth, making them easy to customize. Simply import the icon by name (using
        PascalCase) and render it like any other component. Perfect for keeping your UI crisp and
        your bundle size small.
      </p>

      <LucideComponent />
  </div>
  )
}

export default LucidePage;

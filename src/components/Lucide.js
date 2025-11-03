import React from 'react';
import { LucideComputer, HandHeart, WandSparkles } from 'lucide-react';

const LucideComponent = () => {
  return (
    <div className="card">
      <p>
        Lucide is a community-maintained icon library offering over 1,400 clean, consistent SVG
        icons. It's designed to be lightweight and tree-shakeable, meaning you only import the icons
        you actually use. Each icon is a React component that accepts props like size, color, and
        strokeWidth, making them easy to customize. Simply import the icon by name (using
        PascalCase) and render it like any other component. Perfect for keeping your UI crisp and
        your bundle size small.
      </p>
      <div className="card">
        <span>
          <p>Example Computer Icon</p> <LucideComputer size="32" />
        </span>
      </div>
      <div className="card">
        <span>
          <p>Example Handing Heart Icon</p> <HandHeart size="32" />
        </span>
      </div>
      <div className="card">
        <span>
          <p>Example Sparkling Wand Icon</p>
          <WandSparkles size="32" />
        </span>
      </div>
    </div>
  );
};

export default LucideComponent;

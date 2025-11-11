import React from 'react';
import { LucideComputer, HandHeart, WandSparkles } from 'lucide-react';

const LucideComponent = () => {
  return (
    <div>
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

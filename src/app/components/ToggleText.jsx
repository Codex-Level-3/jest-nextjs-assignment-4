"use client";
import { useState } from "react";

export default function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Text</button>
      {isVisible && <p>Yay, you can see me now!</p>}
    </div>
  );
}

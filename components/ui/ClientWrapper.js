"use client";

import { useState, useEffect } from "react";
import CountdownOverlay from "./CountdownOverlay";

export default function ClientWrapper({ children }) {
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowCountdown(true);
    }
  }, []);

  const handleCountdownComplete = () => {
    localStorage.setItem("hasVisited", "true");
    setShowCountdown(false);
  };

  return (
    <>
      {showCountdown && (
        <CountdownOverlay onComplete={handleCountdownComplete} />
      )}
      {children}
    </>
  );
}

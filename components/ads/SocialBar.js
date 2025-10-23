'use client';
import { useEffect } from 'react';

export default function SocialBar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl27910356.effectivegatecpm.com/5a/cf/59/5acf5965c67676b4d6c0f90a49df2148.js';
    script.async = true;
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
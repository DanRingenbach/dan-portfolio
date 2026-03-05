import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.scss';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  
  const name = "Dan Ringenbach";

  useEffect(() => {
    // Start fade out after name animation completes
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Complete splash screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className={`${styles.splashScreen} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.nameContainer}>
        <h1 className={styles.nameTitle}>
          {name}
        </h1>
        
        <div className={`${styles.subtitle} ${fadeOut ? styles.fadeOut : ''}`}>
          DEVELOPER & DESIGNER
        </div>
      </div>
    </div>
  );
}
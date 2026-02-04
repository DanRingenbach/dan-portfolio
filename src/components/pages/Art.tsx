import React, { JSX } from 'react';
import artData from '../artworkData';
import ArtContainer from '../ArtContainer';
import styles from './Art.module.scss';

function Art(): JSX.Element {
  return (
    <div className={styles.artPage}>
      <h1 className={styles.pageTitle}>Sketchbook</h1>
      <p className={styles.subtitle}>A collection of artwork and creative explorations</p>
      
      <div className={styles.galleryContainer}>
        {artData.map(art => (
          <ArtContainer 
            key={art.id || art.title} 
            title={art.title} 
            img={art.img.src} 
            descr={art.descr} 
            medium={art.medium} 
          />
        ))}
      </div>
    </div>
  );
}

export default Art;
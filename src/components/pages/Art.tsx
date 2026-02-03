import React, { JSX } from 'react';
import artData from '../artworkData';
import ArtContainer from '../ArtContainer';

function Art(): JSX.Element {
  return (
    <>
      <div className='row art-card-container'>
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
    </>
  );
}

export default Art;
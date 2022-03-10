
import artData from '../artworkData'
import ArtContainer from '../ArtContainer'


function Art() {
  return (
    <>
      <div className='row art-card-container'>
        
            
            {artData.map(art => (



              
                <ArtContainer title={art.title} img={art.img} descr={art.descr} medium={art.medium} />
              



            ))}
            
         
      </div>

    </>

  );
}

export default Art;


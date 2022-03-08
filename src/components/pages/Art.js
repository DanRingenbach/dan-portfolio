
import artData from '../artworkData'
import ArtContainer from '../ArtContainer'


function Art() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          {/* <div className=" col-sm-12"> */}
            
            {artData.map(art => (



              
                <ArtContainer title={art.title} img={art.img} />
              



            ))}
            
          {/* </div> */}
        </div>
      </div>

    </>

  );
}

export default Art;


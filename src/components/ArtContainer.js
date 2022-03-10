import tree from './images/artWork/Tree1.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'





function ArtContainer(props) {

    const [loaded, setLoaded] = useState(false)


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>

            <div className='col-sm-6 art-card-container mt-5'>
                <div style={{ maxWidth: '400px', minHeight: '400px' }} className=" m-3">

                    <div className=" art-card">
                        <h3 className="card-title">
                            {props.title}
                        </h3>

                        <img onClick={handleShow} id='img'
                            style={loaded ? { maxHeight: "100%", maxWidth: "100%", cursor: 'pointer' } : { display: 'none' }}
                            src={props.img}
                            onLoad={() => setLoaded(true)}
                        ></img>
                        <p></p>
                        <h6>{props.medium}</h6>
                        <p>{props.descr}</p>

                    </div>
                </div>
            </div>


            <Modal centered style={loaded ? { display:'none' } : {display: 'none'}} 
                   id='artModal' 
                   show={show} 
                   onHide={handleClose} 
                   animation={true} 
                   class='modal'
                   onLoad={show}>


                <img style={loaded ? { display: 'flex', alignSelf: 'center', height: "150%", width: "150%" } : { display: 'none' }}
                     src={props.img}
                     onLoad={() => setLoaded(true)}>
                </img>
                
            </Modal>
            
        </>
    )
};






export default ArtContainer;


import tree from './images/artWork/Tree1.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'





function ArtContainer(props) {

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
                            src={props.img}
                            style={{ maxHeight: "300px", maxWidth: "300px", cursor: 'pointer' }}
                        ></img>
                        <p></p>
                        <h6>{props.medium}</h6>
                        <p>{props.descr}</p>

                    </div>
                </div>
            </div>


            <Modal aria-labelledby='contained-modal-title-vcenter' centered id='artModal' show={show} onHide={handleClose} animation={false} class='modal'>
                <Modal.Header closeButton></Modal.Header>
                
                <img src={props.img}></img>
            </Modal>
        </>
    )
};






export default ArtContainer;


import tree from './images/artWork/Tree1.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'





function ArtContainer(props) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>

            <div style={{width: 'auto'}} className='card-deck'>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            {props.title}
                        </h3>
                        <img onClick={handleShow} id='img'
                            src={props.img}
                            style={{ maxHeight: "300px", maxWidth: "300px" }}
                        ></img>


                    </div>
                </div>
            </div>


            <Modal aria-labelledby='contained-modal-title-vcenter' centered id='artModal' show={show} onHide={handleClose} animation={false} class='modal'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
                <img src={props.img}></img>
            </Modal>
        </>
    )
};






export default ArtContainer;


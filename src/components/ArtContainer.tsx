import React, { JSX, useState } from 'react';

interface ArtContainerProps {
  title: string;
  img: string;
  medium: string;
  descr: string;
}

function ArtContainer(props: ArtContainerProps): JSX.Element {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    
    const handleClose = (): void => setShow(false);
    const handleShow = (): void => setShow(true);

    return (
        <>
            <div className='col-sm-6 art-card-container mt-5'>
                <div style={{ maxWidth: '400px', minHeight: '400px' }} className="m-3">
                    <div className="art-card">
                        <h3 className="card-title">
                            {props.title}
                        </h3>
                        <img 
                            onClick={handleShow} 
                            id='img'
                            style={loaded ? { maxHeight: "100%", maxWidth: "100%", cursor: 'pointer' } : { display: 'none' }}
                            src={props.img}
                            onLoad={() => setLoaded(true)}
                            alt={props.title}
                        />
                        <p></p>
                        <h6>{props.medium}</h6>
                        <p>{props.descr}</p>
                    </div>
                </div>
            </div>

            {/* Basic Modal Implementation */}
            {show && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1050
                    }}
                    onClick={handleClose}
                >
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px'
                        }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#333'
                            }}
                        >
                            ×
                        </button>
                        <img 
                            style={{ 
                                maxWidth: '100%', 
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                            src={props.img}
                            alt={props.title}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ArtContainer;
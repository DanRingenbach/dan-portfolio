import React, { JSX, useState } from 'react';
import styles from './ArtContainer.module.scss';

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
            <div className={styles.artContainer}>
                <div className={styles.cardBody}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            {props.title}
                        </h3>
                        <img 
                            onClick={handleShow} 
                            id='img'
                            className={loaded ? styles.image : styles.imageHidden}
                            src={props.img}
                            onLoad={() => setLoaded(true)}
                            alt={props.title}
                        />
                        <div className={styles.spacer}></div>
                        <h6 className={styles.medium}>{props.medium}</h6>
                        <p className={styles.description}>{props.descr}</p>
                    </div>
                </div>
            </div>

            {/* Modal Implementation */}
            {show && (
                <div 
                    className={styles.modalOverlay}
                    onClick={handleClose}
                >
                    <div
                        className={styles.modalContent}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleClose}
                            className={styles.modalCloseButton}
                        >
                            ×
                        </button>
                        <img 
                            className={styles.modalImage}
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
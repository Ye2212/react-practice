import style from './Modal.module.css';
import { useState, useEffect } from 'react';

export const Modal = ({ image, closeModal }) => {
  const [loaded, setLoaded] = useState(false);
  const handleCloseModal = e => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const onLoad = () => {
    setLoaded(true);
  }
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal)
    }
  })
  return (
    <div className={style.overlay}>
      <img src={`https://image.tmdb.org/t/p/w780${image}`}
        alt=""
        onLoad={onLoad}
        style={{ display: loaded ? 'block' : 'none' }} />
      {!loaded && <p style={{ fontSize: 50, color: "white" }}>Loading...</p>}

    </div >
  )
}
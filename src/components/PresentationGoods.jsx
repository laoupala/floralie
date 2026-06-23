import React, { useRef, useState } from 'react';
import './PresentationGoods.scss';

const PresentationGoods = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="presentation">
      <div className="container presentation__inner">
        <div className="presentation__text">
          <h2 className="presentation__title">Voir, c'est déjà ressentir.</h2>
          <p className="presentation__desc">
            Des fleurs à perte de vue, des parfums qui accueillent dès le seuil,
            une lumière douce filtrée à travers les pétales. Chez nous, chaque
            recoin raconte quelque chose. Viens voir par toi-même ce qui t'attend.
          </p>
        </div>

        <div className="presentation__video">
          <video
            ref={videoRef}
            src="../assets/videos/bouquet_fleur.mp4"
            loop
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          {!playing && (
            <button className="presentation__play" aria-label="Lire la vidéo" onClick={handlePlay}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresentationGoods;
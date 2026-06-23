import React from 'react';
import './Hero.scss';

const Hero = () => (
  <section className="hero">
    <div className="hero__left">
      <span className="hero__eyebrow">Boutique Plantes</span>
      <h1 className="hero__title">
        <span className="hero__title-bold">Votre fleuriste</span>
        <span className="hero__title-highlight">à Poussan</span>
      </h1>
      <p className="hero__desc">
      Que ce soit pour égayer un dimanche ordinaire, célébrer un mariage ou simplement offrir un peu de douceur, chaque création est pensée à la main, avec des fleurs choisies pour leur caractère autant que pour leur beauté.
      </p>
      <div className="hero__ctas">
        <a href="#indoor-collection" className="hero__btn-primary">Voir les plantes</a>
        <a href="#boutique" className="hero__btn-video">
          <span className="hero__btn-video-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </span>
          Voir notre vidéo
        </a>
      </div>
      <div className="hero__scroll">
        <svg width="14" height="20" viewBox="0 0 14 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="12" height="22" rx="6"/>
          <circle cx="7" cy="7" r="2" fill="currentColor" stroke="none"/>
        </svg>
        <span>Défiler</span>
      </div>
    </div>

    <div className="hero__center">
      <img
        src="../assets/images/fleuriste.jpeg"
        alt="Monstera — plante tropicale d'intérieur"
      />
    </div>

    <div className="hero__right">
      <div className="hero__product-card">
        <h3 className="hero__product-name">Une boutique à  <br></br> taille humaine</h3>
        <p className="hero__product-desc">
        Une adresse de quartier où il fait bon flâner, un atelier pour vos grands événements : bienvenue dans notre monde fleuri.
        </p>
        <a href="#bouquets" className="hero__product-link">
          Voir notre galerie
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
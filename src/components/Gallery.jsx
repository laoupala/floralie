import React, { useState } from 'react';
import './Gallery.scss';

const PHONE = '+33123456789';
const BASE = import.meta.env.BASE_URL;


const bouquets = [
  {
    title: 'Éclat de Printemps',
    category: 'Saisonnier',
    img: `${BASE}assets/images/bouquet_Printemps.jpeg`,
    size: 'large',
  },
  {
    title: 'Douceur Pastel',
    category: 'Mariage',
    img: `${BASE}assets/images/bouquet_pastel.jpeg`,
    size: 'small',
  },
  {
    title: 'Rouge Intense',
    category: 'Romantique',
    img: `${BASE}assets/images/bouquet_rouge.jpeg`,
    size: 'small',
  },
  {
    title: 'Blanc Immaculé',
    category: 'Mariage',
    img: `${BASE}assets/images/bouquet_blanc.jpeg`,
    size: 'small',
  },
  {
    title: 'Jardin Sauvage',
    category: 'Bohème',
    img: `${BASE}assets/images/bouquet_sauvage.jpeg`,
    size: 'large',
  },
  {
    title: "Soleil d'Or",
    category: 'Saisonnier',
    img: `${BASE}assets/images/bouquet_soleil.jpeg`,
    size: 'small',
  },
  {
    title: 'Violet Mystère',
    category: 'Événement',
    img: `${BASE}assets/images/bouquet_violet.jpeg`,
    size: 'small',
  },
  {
    title: 'Tropiques',
    category: 'Exotique',
    img: `${BASE}assets/images/bouquet_tropiques.jpeg`,
    size: 'large',
  },
];

const categories = ['Tous', 'Mariage', 'Romantique', 'Saisonnier', 'Bohème', 'Exotique', 'Événement'];
const PER_PAGE = 3;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'Tous'
    ? bouquets
    : bouquets.filter(b => b.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const currentPage = Math.min(page, totalPages - 1);
  const visible = filtered.slice(currentPage * PER_PAGE, currentPage * PER_PAGE + PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(0); 
  };

  return (
    <section className="gallery">
      <div className="container">

        <div className="gallery__header">
          <div className="gallery__header-left">
            <span className="gallery__eyebrow">Nos créations</span>
            <h2 className="gallery__title">Nos Bouquets</h2>
          </div>
          <p className="gallery__desc">
            Chaque bouquet est une création unique, conçue à la main par nos fleuristes.
            Découvrez nos compositions et laissez-vous inspirer.
          </p>
        </div>

        <div className="gallery__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery__filter ${activeCategory === cat ? 'gallery__filter--active' : ''}`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {visible.map((bouquet, i) => (
            <div
              className={`gallery-card gallery-card--${bouquet.size}`}
              key={`${activeCategory}-${currentPage}-${i}`}
              onClick={() => setLightbox(bouquet)}
            >
              <img src={bouquet.img} alt={bouquet.title} />
              <div className="gallery-card__overlay" />
              <div className="gallery-card__content">
                <span className="gallery-card__category">{bouquet.category}</span>
                <h3 className="gallery-card__title">{bouquet.title}</h3>
              </div>
              <button className="gallery-card__zoom" aria-label="Agrandir">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="gallery__controls">
            <div className="gallery__dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`gallery__dot ${i === currentPage ? 'gallery__dot--active' : ''}`}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="gallery__cta">
          <a href={`tel:${PHONE}`} className="gallery__btn">
            Commander un bouquet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>

      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery__lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="gallery__lightbox-info">
              <span className="gallery-card__category">{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
            <button className="gallery__lightbox-close" onClick={() => setLightbox(null)} aria-label="Fermer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
import React, { useState } from 'react';
import './IndoorCollection.scss';

const BASE = import.meta.env.BASE_URL;

const SunDirect = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity=".2"/>
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const SunIndirect = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeDasharray="2 2"/>
  </svg>
);

const WaterIcon = ({ level }) => {
  const count = level === 'low' ? 1 : level === 'medium' ? 2 : 3;
  return (
    <span className="water-drops">
      {[0, 1, 2].map(i => (
        <svg key={i} width="10" height="13" viewBox="0 0 10 13" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" style={{ opacity: i < count ? 1 : 0.25 }}>
          <path d="M5 1C5 1 1 5 1 8a4 4 0 0 0 8 0C9 5 5 1 5 1z"/>
        </svg>
      ))}
    </span>
  );
};

const allItems = [
  {
    title: 'Pachira',
    desc: `Surnommé arbre à bonheur, le Pachira apporte une énergie douce et généreuse dans chaque pièce. Avec son tronc tressé et son feuillage vert vif, il s'installe aussi naturellement dans un salon qu'il le transforme.`,
    img: `${BASE}assets/images/pachira.jpg`,
    sun: 'indirect',
    water: 'low',
  },
  {
    title: 'Bonsaï',
    desc: `Un arbre entier, dans la paume de la main. Le bonsaï est une invitation à ralentir, à observer, à prendre soin. Chaque branche est une histoire et c'est vous qui écrivez la suite.`,
    img: `${BASE}assets/images/bonzai.jpg`,
    sun: 'direct',
    water: 'medium',
  },
  {
    title: 'Calathea',
    desc: `Ses feuilles sont des tableaux. Nervures contrastées, reflets violets, motifs qui semblent peints à la main la Calathea est la plante des esprits curieux et des intérieurs qui osent la couleur.`,
    img: `${BASE}assets/images/calathea.jpg`,
    sun: 'indirect',
    water: 'high',
  },
  {
    title: 'Ficus',
    desc: `Un grand classique qui n'a rien perdu de son élégance. Le Ficus structure un espace, adoucit une pièce trop angulaire, et pousse paisiblement si on lui offre une bonne lumière et un peu de régularité.`,
    img: `${BASE}assets/images/ficus.jpg`,
    sun: 'direct',
    water: 'medium',
  },
  {
    title: 'Monstera',
    desc: `Impossible de passer à côté. Avec ses grandes feuilles découpées comme à la main, le Monstera est devenu une icône et il le mérite. Il grandit, il s'étale, il prend vie. Une vraie personnalité végétale.`,
    img: `${BASE}assets/images/monstera.jpg`,
    sun: 'indirect',
    water: 'medium',
  },
  {
    title: 'Orchidée',
    desc: `Elle a l'air fragile, mais elle sait durer. L'orchidée est la plante des attentions silencieuses celle qu'on offre pour dire quelque chose sans forcément trouver les mots. Raffinée, délicate, inoubliable.`,
    img: `${BASE}assets/images/orchidee.jpg`,
    sun: 'indirect',
    water: 'low',
  },
];

const slides = [];
for (let i = 0; i < allItems.length; i += 4) {
  slides.push(allItems.slice(i, i + 4));
}

const IndoorCollection = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <section className="indoor">
      <div className="container">

        <div className="indoor__header">
          <h2 className="indoor__title">Collection Intérieure</h2>
          <p className="indoor__left-text">
            Consultez notre contenu vidéo, notamment des webinaires informatifs
            où vous pouvez en savoir plus sur vos plantes d'intérieur.
          </p>
        </div>

        <div className="indoor__grid">
          {slide.map((item, i) => (
            <div className="indoor-card" key={`${current}-${i}`}>

              <div className="indoor-card__body">
                <div className="indoor-card__icons">
                  <span className={`indoor-card__icon indoor-card__icon--${item.sun}`}>
                    {item.sun === 'direct' ? <SunDirect /> : <SunIndirect />}
                  </span>
                  <span className="indoor-card__icon indoor-card__icon--water">
                    <WaterIcon level={item.water} />
                  </span>
                </div>
                <h3 className="indoor-card__title">{item.title}</h3>
                <p className="indoor-card__desc">{item.desc}</p>
              </div>

              <div className="indoor-card__img">
                <img src={item.img} alt={item.title}/>
              </div>

            </div>
          ))}
        </div>

        <div className="indoor__controls">
          <div className="indoor__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`indoor__dot ${i === current ? 'indoor__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndoorCollection;
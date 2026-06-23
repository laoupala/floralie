import React, { useState } from 'react';
import './Navbar.scss';

const PHONE = '+33123456789';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <div className="navbar__left">
          <a href="#" className="navbar__logo" aria-label="Floralie">
            <img src={`${import.meta.env.BASE_URL}assets/images/logo_floralie.png`} alt="Floralie" height="36" />
          </a>

          <span className="navbar__sep" />

          <ul className="navbar__links">
            <li><a href="#" className="navbar__link navbar__link--active">Accueil</a></li>
            <li><a href="#indoor-collection" className="navbar__link">Collection intérieur</a></li>
            <li><a href="#boutique" className="navbar__link">La boutique</a></li>
          </ul>
        </div>

        <ul className="navbar__actions">
          <li>
            <a href="#bouquets" className="navbar__action">
              Nos bouquets
            </a>
          </li>
          <li>
            <a href="#faq" className="navbar__action">
              FAQ
            </a>
          </li>
          <li>
            <a href={`tel:${PHONE}`} className="navbar__action navbar__action--basket">
              Contact
            </a>
          </li>
        </ul>

        {/* Burger mobile */}
        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          <a href="#">Accueil</a>
          <a href="#indoor-collection" onClick={() => setOpen(false)}>Collection intérieur</a>
          <a href="#boutique">La boutique</a>
          <a href="#bouquets">Nos Bouquets</a>
          <a href="#faq">FAQ</a>
          <a href={`tel:${PHONE}`}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
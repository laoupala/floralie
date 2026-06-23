import React from 'react';
import './Footer.scss';

const PHONE = '+33123456789';

const Footer = () => (
  <footer className="footer">
    <div className="footer__card">

      <div className="footer__cta">
        <p className="footer__cta-text">
          Chaque bouquet commence par une belle idée.<br />
          Parlons-en.
        </p>
        <button className="footer__cta-btn">          
          <a href={`tel:${PHONE}`}>Nous appeler</a>
        </button>
      </div>

      <hr className="footer__divider" />

      <div className="footer__main">

        <div className="footer__brand">
          <div className="footer__logo">
            <img src="../assets/images/logo_floralie.png" alt="Logo" />
          </div>
          <p className="footer__tagline">votre fleuriste de confiance</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <p>contact@mafleuriste.fr</p>
          <p>12 rue des Fleurs</p>
          <p>34560 Poussan</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Horaires</h4>
          <p>Lundi – Vendredi &nbsp;|&nbsp; 9h – 19h</p>
          <p>Samedi &nbsp;|&nbsp; 9h – 17h</p>
          <p>Dimanche, Lundi &nbsp;|&nbsp; fermé</p>
        </div>

        <div className="footer__col footer__col--nav">
          <nav className="footer__nav">
          <a href="#indoor-collection">Collection intérieur</a>
          <a href="#boutique">La boutique</a>
          <a href="#bouquets">Nos Bouquets</a>
          <a href="#faq">FAQ</a>
          </nav>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer__social" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.09-2.37 3.09-5.18 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.64 0 .72.28 1.49.62 1.91.07.08.08.15.06.23l-.23.95c-.04.15-.13.18-.29.11-1.09-.51-1.77-2.1-1.77-3.38 0-2.75 2-5.27 5.76-5.27 3.02 0 5.37 2.15 5.37 5.03 0 3-1.89 5.41-4.51 5.41-.88 0-1.71-.46-1.99-1l-.54 2.02c-.2.75-.72 1.69-1.07 2.26.81.25 1.66.38 2.54.38 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Ma Fleuriste</span>
        <span>Site réalisé par La Ou Pala</span>
        <nav className="footer__legal">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
          <a href="#">CGV</a>
          <a href="#">Cookies</a>
        </nav>
      </div>

    </div>
  </footer>
);

export default Footer;
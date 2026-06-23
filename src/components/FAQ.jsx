import React, { useState } from 'react';
import './FAQ.scss';

const faqs = [
  {
    q: 'Commande en livraison à domicile ?',
    a: 'Oui, nous livrons vos commandes directement chez vous ! Passez votre commande par téléphone ou via notre site, et nous nous occupons du reste. Les délais et frais de livraison varient selon votre localisation ,n\'hésitez pas à nous contacter pour en savoir plus.',
  },
  {
    q: 'Services de rempotage',
    a: "Nous proposons le rempotage sur les achats en boutique ou vous pouvez apporter votre propre pot et nous pouvons rempoter pour vous. Des frais s'appliquent selon les fournitures utilisées. Rendez-nous visite ou appelez-nous pour plus de détails.",
  },
  {
    q: 'Livrons-nous les plantes ?',
    a: 'Absolument ! Nos plantes d\'intérieur voyagent avec soin jusqu\'à votre domicile. Chaque commande est soigneusement emballée pour que vos nouvelles compagnes vertes arrivent en parfait état. Contactez-nous pour connaître les zones de livraison disponibles.',
  },
  {
    q: 'Commande en click & collect ?',
    a: 'Commandez en ligne ou par téléphone, et venez récupérer votre bouquet ou vos plantes directement en boutique à l\'heure qui vous convient. Simple, rapide, et vous repartez avec votre commande prête et emballée !',
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(1);

  return (
    <section className="faq">
      <div className="faq__header">
        <span className="faq__label">NOS RÉPONSES</span>
        <h2 className="faq__title">Questions<br />Fréquentes</h2>
      </div>

      <div className="container faq__list">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`faq__item ${openIdx === i ? 'faq__item--open' : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            <div className="faq__question">
              <span>{f.q}</span>
              <span className="faq__icon">
                {openIdx === i ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                )}
              </span>
            </div>
            {openIdx === i && f.a && (
              <div className="faq__answer">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
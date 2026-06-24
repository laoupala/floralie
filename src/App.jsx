import React, { useState } from 'react';
import './styles/global.scss';

import Loader           from './components/Loader';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import IndoorCollection  from './components/IndoorCollection';
import Stats             from './components/Stats';
import PresentationGoods from './components/PresentationGoods';
import Gallery           from './components/Gallery';
import FAQ               from './components/FAQ';
import Footer            from './components/Footer';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <div style={{ position: 'relative' }}>
        <Navbar />
        <Hero />
      </div>

      <main>
        <section id="indoor-collection">
          <IndoorCollection />
        </section>
        <Stats />
        <section id="boutique">
          <PresentationGoods />
        </section>
        <section id="bouquets">
          <Gallery />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default App;
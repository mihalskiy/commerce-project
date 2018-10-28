import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Weapons from '../components/weapons';
import styles from '../styles/main.scss';

export const App = () => (
  <div className="app">
    <Head>
      <title>Codeurge | Full-Stack Web Developer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Portfolio and Blog of Full-Stack Web Developer Derek Keith."
      />
      <meta name="author" content="Derek Keith" />
      <meta
        name="keywords"
        content="react, web development, derek keith, codeurge, html5, rails, ruby on rails"
      />
      <link rel="icon" type="image/png" href="/static/favicon.png" />
    </Head>
    <Hero />
    <Weapons />
    <Footer />
    <style jsx global>{styles}</style>
  </div>
);

/* eslint-disable */
console.log(
  '%cLike what you see? I am always open to hearing new opportunities.',
  'background: #1f1f1f; color: #c2c88f; font-size: 18px;',
);
console.info(
  '%chttp://codeurge.com/static/resume-derek-keith.pdf',
  'background: #1f1f1f; color: #c2c8ff; font-size: 18px;',
);
/* eslint-enable */

export default App;

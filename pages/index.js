import Head from 'next/head';
import { useRef } from 'react';
import { Sticky } from 'semantic-ui-react';

import Header from '../components/Header';
import TopMenu from '../components/TopMenuBar';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

export default function Home() {
  let contextRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Zhenyu Zhong</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          azxc
          href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'
        ></link>
      </Head>
      <div id='mainContent' ref={contextRef}>
        <Header />
        <Sticky context={contextRef}>
          <TopMenu />
        </Sticky>
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

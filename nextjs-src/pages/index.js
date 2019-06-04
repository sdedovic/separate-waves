import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Logo from '../components/logo';
import LogoStack from '../components/logo-stack';
import Backdrop from '../components/backdrop';

const Home = () => (
  <div>
    <Head title="Separate Waves" />
    <Backdrop />

    <div className="container">
      <div className="main-logo">
        <Logo size="15" />
      </div>
      <LogoStack size="12" />
    </div>

    <style jsx>{`
      .container {
        margin: 0 30px;
      }
      .main-logo {
        margin-left: 20px;
      }
    `}</style>
  </div>
);

export default Home;

import React from 'react';
import Head from '../components/head';
import Logo from '../components/logo';
import LogoStack from '../components/logo-stack';
import Backdrop from '../components/backdrop';
import Content from '../components/content';

const Home = () => (
  <div>
    <Head title="Separate Waves" />
    <Backdrop />
    <div className="date">July 13 7pm-11pm & July 14 3pm-7pm</div>

    <div className="container">
      <div className="main-logo">
        <Logo size="15" />
      </div>
      <Content />
      <LogoStack size="16" />
    </div>

    <footer className="footer">
      Copyright © 2019 ROOMSIX, LLC. All rights reserved.
    </footer>

    <style jsx>{`
      .container {
        margin: 0 30px;
      }
      @media (min-width: 600px) {
        .container {
          margin: 0 50px;
        }
      }
      .main-logo {
        margin-left: 25%;
        transform: translateX(-25%);
      }

      .date {
        text-align: right;
        margin-right: 25px;
        margin-top: 15px;

        text-transform: uppercase;
        font-weight: 600;
        font-size: 3vw;
      }

      .footer {
        margin: 20px;
      }
    `}</style>
  </div>
);

export default Home;

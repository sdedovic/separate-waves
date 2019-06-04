import React from 'react';
import Head from '../components/head';
import Logo from '../components/logo';
import LogoStack from '../components/logo-stack';
import Backdrop from '../components/backdrop';
import Content from "../components/content";

const Home = () => (
    <div>
        <Head title="Separate Waves"/>
        <Backdrop/>
        <div className="date">July 13 7pm-11pm & July 14 3pm-7pm</div>

        <div className="container">
            <div className="main-logo">
                <Logo size="15"/>
            </div>
            <LogoStack size="12"/>
        </div>

        <Content/>

        <style jsx>{`
          .container {
            margin: 0 30px;
          }
          .main-logo {
            margin-left: 20px;
          }

          .date {
            position: absolute;
            top: 0;
            right: 0;
            padding-right: 25px;
            padding-top: 15px;

            text-transform: uppercase;
            font-weight: 600;
            font-size: 3vw;
          }
      .
    `}</style>
    </div>
);

export default Home;

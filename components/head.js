import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <div>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Separate Waves</title>
      <meta name="description" content="Art and Live Music"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>

      <meta property="og:site_name" content="Separate Waves"/>
      <meta property="og:type" content="article"/>
      <meta property="og:title" content="Art and Live Music"/>
      <meta property="og:description" content="Saturday, Jul 13, 2019, 7PM and Sunday, Jul 14, 2019, 3PM. Chicago-based artists Kelly Ann Cunningham, Stevan Dedovic, and Sean Griffin will be hosting a collaborative art exhibition at the Fulton Street Collective in Chicago’s West Town neighborhood. Music performances will accompany the art featuring the Jake Victor Quartet, Such Jam Much Chill, and Poncho. Several other artists and musicians will also be featured over the course of the event. Despite the disparate styles among the artists, all emphasis the importance of lines, color, and process."/>
      <meta property="og:url" content="https://www.separatewaves.com"/>
      <meta property="og:image" content="https://separatewaves.com/static/display.png"/>
      <meta property="geo.placename" content="Chicago, IL, us"/>

      <meta property="twitter:description" content="Chicago-based artists Kelly Ann Cunningham, Stevan Dedovic, and Sean Griffin will be hosting a collaborative art exhibition at the Fulton Street Collective in Chicago’s West Town neighborhood. Music performances will accompany the art featuring the Jake Victor Quartet, Such Jam Much Chill, and Poncho. Several other artists and musicians will also be featured over the course of the event. Despite the disparate styles among the artists, all emphasis the importance of lines, color, and process."/>
      <meta name="twitter:label1" value="Where"/>
      <meta name="twitter:data1" value="Fulton Street Collective, 1821 W. Hubbard Street, Suite 307, Chicago, IL 60612"/>
      <meta name="twitter:label2" value="When"/>
      <meta name="twitter:data2" value="Saturday, Jul 13, 2019, 7PM and Sunday, Jul 14, 2019, 3PM"/>



    </NextHead>
    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-size: 12px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'Source Sans Pro', sans-serif;
        overflow-x: hidden;
      }

      @media (min-width: 600px) {
        html {
          font-size: 14px;
        }
      }

      @media (min-width: 900px) {
        html {
          font-size: 16px;
        }
      }

      @media (min-width: 1200px) {
        html {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;

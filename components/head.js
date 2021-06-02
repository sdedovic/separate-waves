import React from 'react';
import NextHead from 'next/head';
import {string} from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
    <div>
        <NextHead>
            <meta charSet="UTF-8"/>
            <title>Separate Waves II</title>
            <meta name="description" content="Art and Live Music"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/static/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>

            <meta property="og:site_name" content="Separate Waves II"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="Art and Live Music"/>
            <meta property="og:description"
                  content="Friday, July 16, 2021, 6PM and Saturday, July 17, 2021, 6PM. Chicago-based artists Kelly Ann Cunningham and Stevan Dedovic will be hosting a collaborative art exhibition at Throop Studio just east of Chicago’s Wicker Park neighborhood. Music performances will accompany the art featuring Geekd, Lucky Cloud, Jake Victor, Whuzy, and mjae. Several other artists and musicians will also be featured over the course of the event. Despite the disparate styles among the artists, all emphasis the importance of lines, color, and process."/>
            <meta property="og:url" content="https://www.separatewaves.com"/>
            <meta property="og:image" content="https://separatewaves.com/static/display.jpg"/>
            <meta property="geo.placename" content="Chicago, IL, us"/>

            <meta property="twitter:description"
                  content="Chicago-based artists Kelly Ann Cunningham and Stevan Dedovic will be hosting a collaborative art exhibition at Throop Studio just east of Chicago’s Wicker Park neighborhood. Music performances will accompany the art featuring Geekd, Lucky Cloud, Jake Victor, Whuzy, and mjae. Several other artists and musicians will also be featured over the course of the event. Despite the disparate styles among the artists, all emphasis the importance of lines, color, and process."/>
            <meta name="twitter:label1" value="Where"/>
            <meta name="twitter:data1" value="Throop Studio, 1500 N. Throop Street, Chicago, IL 60642"/>
            <meta name="twitter:label2" value="When"/>
            <meta name="twitter:data2" value="Friday, July 16, 2021, 6PM and Saturday, July 17, 2021, 6PM"/>
        </NextHead>


        <style jsx global>{`
          body {
            background-image: url(/static/poster.jpg);
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: 100% auto;
            
            height: 2560px;
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

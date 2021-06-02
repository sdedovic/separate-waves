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
                  content="Friday, July 16th and Saturday, July 17th, 2021, 6pm-10pm. Chicago-based artists Kelly Ann Cunningham and Stevan Dedovic will host a collaborative art exhibition at Throop Studio, just east of Chicago’s Wicker Park neighborhood. The art displayed, ranging from painting and sculpture to digital and generative media, will be accompanied by musical performances by Geekd, Lucky Cloud, Jake Victor, Whüzy, mjae and others. Several other Chicago and Wisconsin-based artists and musicians will also be featured over the course of the two-day event. Despite the disparate styles among the artists’ work, all emphasize line, color, and process. For more information visit https://separatewaves.com/ or follow on Instagram @separate_waves_."/>
            <meta property="og:url" content="https://www.separatewaves.com"/>
            <meta property="og:image" content="https://separatewaves.com/static/display.jpg"/>
            <meta property="geo.placename" content="Chicago, IL, us"/>

            <meta property="twitter:description"
                  content="Chicago-based artists Kelly Ann Cunningham and Stevan Dedovic will host a collaborative art exhibition at Throop Studio, just east of Chicago’s Wicker Park neighborhood. The art displayed, ranging from painting and sculpture to digital and generative media, will be accompanied by musical performances by Geekd, Lucky Cloud, Jake Victor, Whüzy, mjae and others. Several other Chicago and Wisconsin-based artists and musicians will also be featured over the course of the two-day event. Despite the disparate styles among the artists’ work, all emphasize line, color, and process. For more information visit https://separatewaves.com/ or follow on Instagram @separate_waves_."/>
            <meta name="twitter:label1" value="Where"/>
            <meta name="twitter:data1" value="Throop Studio, 1500 N. Throop Street, Chicago, IL 60642"/>
            <meta name="twitter:label2" value="When"/>
            <meta name="twitter:data2" value="Friday, July 16th and Saturday, July 17th, 2021, 6pm-10pm"/>
        </NextHead>


        <style jsx global>{`
          body {
            margin: 0;
            background: #101010;
          }
        `}</style>

        <img src="/static/poster.jpg" style={{ width: '100%' }} />

    </div>
);

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string,
};

export default Head;

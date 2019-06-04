import React from 'react';

const Content = props => (
    <div className="content-block">
        <div style={{float: 'left', width: '50%'}}>
            <h1>Saturday July 13</h1>
            <h2>Music</h2>
            <p>Jake Victor Quartet</p>
            <p>Andy Danstrom (solo)</p>
            <p>Henry Thiemann</p>
            <p>... and more</p>

            <br/>
            <br/>
            <br/>

            <h2>Artists both days</h2>
            <p>Kelly Cunningham</p>
            <p>Stevan Dedovic</p>
            <p>Sean Griffin</p>
            <p>Jenn Lawhead</p>
            <p>Maria Villa</p>
            <p>Andy Warren Jepson</p>

            <br/>

            <h2>Stuff</h2>
            <p>Food and drink will be served</p>

            <br/>
            <br/>

            <p>Fulton Street Collective</p>
            <p>1821 W. Hubbard Street, Suite 307</p>
            <p>Chicago, IL 60612</p>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <footer>Copyright © 2019 ROOMSIX, LLC. All rights reserved.</footer>

        </div>
        <div style={{float: 'right'}}>
            <h1>Sunday July 14</h1>
            <h2>Music</h2>
            <p>Jake Victor (solo)</p>
            <p>Poncho</p>
            <p>Such Chill Much Jam</p>
            <p>... and more</p>
        </div>

        <br/>

            <style jsx>{`
        .content-block {
            position: absolute;
            top: 2500px;
            left: 50px;
        }
        h1 {
            font-weight: 900;
            font-size: 3.5vw;
            text-transform: uppercase;
        }
        h2 {
            font-weight: 900;
            font-size: 2.75vw;
            text-decoration: underline;

        }
        p {
            font-weight: 900;
            font-size: 2.5vw;
        }
    `}</style>
    </div>
);

export default Content;
import React from 'react';

const Content = props => (
  <div className="content">
    <div className="aligner">
      <div className="content-days">
        <div className="content-section">
          <h1>Saturday July 13</h1>
          <h2>Music</h2>
          <p>Jake Victor Quartet</p>
          <p>Andy Danstrom (solo)</p>
          <p>Henry Thiemann</p>
          <p>... and more</p>
        </div>

        <div className="content-section">
          <h1>Sunday July 14</h1>
          <h2>Music</h2>
          <p>Jake Victor (solo)</p>
          <p>Poncho</p>
          <p>Such Chill Much Jam</p>
          <p>... and more</p>
        </div>
      </div>

      <div className="content-section">
        <h1>Artists both days</h1>
        <p>Kelly Cunningham</p>
        <p>Stevan Dedovic</p>
        <p>Sean Griffin</p>
        <p>Jenn Lawhead</p>
        <p>Maria Villa</p>
        <p>Andy Warren Jepson</p>

        <br />

        <h2>Stuff</h2>
        <p>Food and drink will be served</p>

        <br />
        <br />

        <p>Fulton Street Collective</p>
        <p>1821 W. Hubbard Street, Suite 307</p>
        <p>Chicago, IL 60612</p>
      </div>
    </div>

    <style jsx>{`
      .content {
        display: flex;
        justify-content: center;
      }

      .aligner {
        display: flex;
        flex-flow: column nowrap;
      }
      .content-days {
        display: flex;
        flex-flow: row wrap;
      }
      .content-section {
        flex: 0 1 auto;
        padding: 0 20px;
      }
      h1 {
        margin-top: 20px;
        padding-bottom: 5px;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 2.5em;
      }
      h2 {
        margin-top: 10px;
        font-weight: 900;
        text-decoration: underline;
        font-size: 2.2em;
      }
      p {
        font-weight: 900;
        font-size: 25px;
        font-size: 2em;
      }
    `}</style>
  </div>
);

export default Content;

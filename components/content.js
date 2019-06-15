import React from 'react';

const Content = props => (
  <div className="content">
    <div className="aligner">
      <div className="content-days white">
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

      <div className="content-section white">
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
      </div>

      <br />
      <br />
      <br />

      <div className="content-section white">
        <h1>Visual Artists</h1>

        <div className="bio">
          <h2>Stevan Dedovic</h2>
          <a href="https://www.instagram.com/mr_praline">
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" />
          </a>
          <p className='bio-text'>Watching Stevan Dedovic at work is like being in the eye of hurricane. In one moment, without a paint brush in sight, he adds and subtracts layers from large-scale acrylic paintings. In the next, he’s behind a computer screen inputting numbers that, often quite literally, spiral into the clean geometric patterns of generative art. He describes his process as a series of decisions that “delegate control” to various processes ranging from automated machines and computer coding, to the chemical reactions of paint and hot water. Stevan draws inspiration from rusted highway fences and other natural images that explore the passing of time. He currently lives in the Wicker Park neighborhood in Chicago, Illinois.</p>
        </div>

        <br />

        <div className="bio">
          <h2>Kelly Ann Cunningham</h2>
          {/*<a href="">*/}
              {/*<img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" />*/}
          {/*</a>*/}
          <p className='bio-text'>Kelly Ann Cunningham enjoys painting, printmaking, and drawing with pastels and  pencils. The majority of her paintings are influenced by processes she learned from monoprinting and etching while at DePaul. Her paintings range from semi-sculptural abstract pieces to works modeled after photos or objects from real life. She enjoys using tape as much as a paint brush when painting. She is currently working on illustrations for the children’s book Epistemology for Babies. In August she will be moving to Nashville to pursue a PhD in Philosophy at Vanderbilt University.</p>
        </div>

        <br />

        <div className="bio">
          <h2>Sean Griffin</h2>
          <a href="https://www.instagram.com/re_person_i_knew">
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" />
          </a>
          <p className='bio-text'>Sean Griffin often works on multiple paintings in a single night. He describes his work as learning to “take things apart and put them back together in creative ways.” While much of his work finds its basis in destructive processes, he is also known for his inventive use of color and found materials. Sean will incorporate the plastic packaging of the canvas in his work. Recently he has been working with pouring mediums, giving his work a sense of motion. Aside from art, Sean also applies a similar mindset to music. He has been known to create everything from  analog loop tapes to beats with sounds sourced from Gameboy games. He currently lives in Palatine, Illinois.</p>
        </div>
      </div>


      <br />
      <br />
      <br />

      <div className="content-section white">
        <h1>Musicians</h1>

        <div className="bio">
          <h2>Jake Victor</h2>
          <a href='https://www.jakevictormusic.com'>
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/internetexplorer.svg" />
          </a>
          <a href="https://www.instagram.com/jake_victor_music">
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" />
          </a>
          <a href="https://www.jakevictor.bandcamp.com/album/twisted-heads-2">
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bandcamp.svg" />
          </a>
          <a href='​https://www.itunes.apple.com/us/album/twisted-heads/1372225872'>
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/applemusic.svg" />
          </a>
          <a href="https://www.youtube.com/watch?v=bZ81tZe2Xko">
              <img className='social' height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg" />
          </a>

          <p className='bio-text'>Jake Victor’s varied career includes performances at the Chicago Cultural Center, Aon Ballroom, Navy Pier, The Refuge and performances for former mayor Rahm Emanuel, Chaz Ebert, Tom Hurvis, Michael Brown, and others. Born and raised in the Chicago suburbs, he has spent five months studying jazz piano at the Conservatorium van Amsterdam with Rob van Bavel and Hans Vroomans. While there, he recorded the album Twisted Heads, marking his debut as a bandleader and composer.His influences range far and wide, from Bach to Ambrose Akinmusire, and from The Bad Plus to Steve Reich. Called <a href='https://www.tinyurl.com/y9wraspu​'>"musical magic"</a>, <a href='https://tinyurl.com/y58vfam6​'>"remarkable"</a>, and <a href='https://tinyurl.com/y2al36j4'>"absolutely dedicated"</a>, this young pianist/percussionist is on pace to make some major waves on the international jazz scene.</p>
          <p className='bio-text'>Jake graduated from the Lawrence Conservatory of Music in 2018 with a degree in Percussion Performance and a minor in Innovation and Entrepreneurship. He currently teaches piano and percussion at Terra Sounds in Glenview, IL and School of Rock in Arlington Heights, IL.</p>
        </div>
      </div>



      <br />
      <br />
      <br />

      <div className="content-section white">
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

      .bio {
        padding-left: 5px;
      }
      .white {
        background-color: #ffffffb0;
      }
      .bio-text {
        font-size: 20px;
        padding: 20px;
        padding-right: 0px;
        margin-right: -25px;
      }
      .social {
        display: inline;
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
      hr {
        border-color: black;
      }
      img {
        padding-right: 4px;
      }
    `}</style>
  </div>
);

export default Content;

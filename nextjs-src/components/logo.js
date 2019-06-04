import { colors } from '../static/vars';

const Logo = props => (
  <span className="logo">
    <span className="separate">separate</span>
    <span className="waves">waves</span>

    <style jsx>{`
      .logo {
        position: relative;
        display: inline-block;
      }

      .separate,
      .waves {
        text-transform: uppercase;
        font-weight: 600;
        font-size: ${props.size || 1}vw;
        color: ${props.stroke ? 'transparent' : props.color || colors.black};
        -webkit-text-stroke: ${props.stroke
          ? `1px ${props.stroke}`
          : 'inherit'};
      }

      .separate {
      }

      .waves {
        position: absolute;
        left: 26%;
        top: 37%;
      }
    `}</style>
  </span>
);

export default Logo;

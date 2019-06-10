import * as _ from 'lodash';
import Logo from './logo';
import { colors } from '../static/vars';

const numLogos = 50;
const hiddenChance = 0.3;
const specialChance = 0.3;

const LogoStack = props => {
  const range = _.range(numLogos);
  const hiddenOnes = _(range)
    .shuffle()
    .slice(0, numLogos * hiddenChance)
    .value();
  const specialOnes = _(range)
    .shuffle()
    .slice(0, numLogos * specialChance)
    .value();

  return (
    <div className="logo-stack">
      {range.map(idx => {
        const special = specialOnes.includes(idx);
        const hidden = hiddenOnes.includes(idx);
        return idx !== 0 && hidden ? null : (
          <div
            className="logo"
            key={idx}
            style={{
              top: `${idx * (props.size / 3)}vw`,
              zIndex: special ? 1 : 0,
              opacity: 0.3,
            }}
          >
            <Logo
              size={props.size}
              color={special ? colors.gray : colors.cream}
              stroke={special ? colors.gray : null}
            />
          </div>
        );
      })}
      <style jsx>{`
        .logo-stack {
          z-index: -1;
          position: fixed;
          top: -40px;
          left: 50%;
        }
        .logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default LogoStack;

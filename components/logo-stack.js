import * as _ from 'lodash';
import Logo from './logo';
import { colors } from '../static/vars';

const numLogos = 100;
const hiddenChance = 0.5;
const specialChance = 0.1;

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
        return idx !== 0 && hidden && !special ? null : (
          <div
            className="logo"
            key={idx}
            style={{
              top: `${idx * (props.size / 3)}vw`,
              zIndex: special ? 1 : 0,
              opacity: 1 - idx / numLogos,
            }}
          >
            <Logo
              size={props.size}
              color={special ? colors.yellow : colors.cream}
              stroke={special ? colors.gray : null}
            />
          </div>
        );
      })}
      <style jsx>{`
        .logo-stack {
          position: relative;
          margin-top: 40px;
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

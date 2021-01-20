import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 384 512" {...props}>
      <Path d="M368 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
    </Svg>
  );
}

const IconFaMinusRegular = React.memo(SvgComponent);
export default IconFaMinusRegular;

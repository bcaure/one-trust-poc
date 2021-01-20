import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M312 384h-48a8 8 0 00-8 8v16a8 8 0 008 8h48a8 8 0 008-8v-16a8 8 0 00-8-8zm64-96H264a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zM504 96H264a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm-64 96H264a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zM120.44 35.51a11.94 11.94 0 00-16.87 0l-84 82.32a12 12 0 00-.09 17l5.61 5.68a11.93 11.93 0 0016.91.09l54-52.74V472a8 8 0 008 8h16a8 8 0 008-8V88.08l53.94 52.35a12 12 0 0016.92 0l5.64-5.66a12 12 0 000-17z" />
    </Svg>
  );
}

const IconFaSortAmountDown = React.memo(SvgComponent);
export default IconFaSortAmountDown;

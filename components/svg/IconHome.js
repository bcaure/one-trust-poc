import React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconHome(props) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" {...props}>
      <Path
        fill="none"
        strokeWidth={2}
        d="M20 20V6.5L11 2 2 6.5V20m6.097 0v-8h5.806v8"
      />
    </Svg>
  );
}

export default IconHome;

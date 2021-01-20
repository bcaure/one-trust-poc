import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import setTestId from '../../utils/setTestId';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props} {...setTestId("IconFaFilterRegular")}>
      <Path d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z" />
    </Svg>
  );
}

const IconFaFilterRegular = React.memo(SvgComponent);
export default IconFaFilterRegular;

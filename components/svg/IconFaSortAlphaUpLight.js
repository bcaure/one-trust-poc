import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import setTestId from '../../utils/setTestId';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 448 512" {...props} {...setTestId("IconFaSortAlphaUpLight")}>
      <Path d="M120.44 35.51a11.94 11.94 0 00-16.87 0l-84 82.32a12 12 0 00-.09 17l5.61 5.68a11.93 11.93 0 0016.91.09l54-52.74V472a8 8 0 008 8h16a8 8 0 008-8V88.08l53.94 52.35a12 12 0 0016.92 0l5.64-5.66a12 12 0 000-17zm326.85 172.43l-59.76-168A11.87 11.87 0 00376.37 32h-16.74a11.87 11.87 0 00-11.16 7.94l-59.76 168A12 12 0 00299.88 224H311a11.86 11.86 0 0011.21-8.09l15.1-44.27h60.85L413.5 216a11.88 11.88 0 0011.2 8h11.42a12 12 0 0011.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zM432 288H304a8 8 0 00-8 8v16a8 8 0 008 8l87.68.07-92.76 131.79a16 16 0 00-2.92 9.21V472a8 8 0 008 8h128a8 8 0 008-8v-16a8 8 0 00-8-8h-87.81l92.89-131.86a16 16 0 002.92-9.21V296a8 8 0 00-8-8z" />
    </Svg>
  );
}

const IconFaSortAlphaUpLight = React.memo(SvgComponent);
export default IconFaSortAlphaUpLight;

import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import IconFaCocktailRegular from './IconFaCocktailRegular';
import {colors} from '../../constants/theme';

const size = 34;
const strokeWidth = 3;
const {PI} = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const circumference = 2 * r * PI;

interface IconAssetProgressProps {
  /**
   * Number in range of 0-100
   */
  progress: number;
}

const Component = ({progress = 0}: IconAssetProgressProps) => {
  const progressCapped = Math.min(Math.max(progress, 0), 100);
  const angle = (progressCapped / 100) * 2 * PI;
  const strokeDashoffset = -angle * r;
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} style={styles.loader}>
        <Circle
          stroke="none"
          fill="rgba(255,255,255,0.3)"
          {...{
            strokeWidth,
            cx,
            cy,
            r,
          }}
        />
        <Circle
          stroke="#ffffff"
          fill="none"
          strokeDasharray={`${circumference}, ${circumference}`}
          {...{
            strokeDashoffset,
            strokeWidth,
            cx,
            cy,
            r,
          }}
        />
      </Svg>
      <View style={styles.iconContainer}>
        <IconFaCocktailRegular width={16} height={16} fill={colors.bg1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
  },
  loader: {
    transform: [{rotateZ: '270deg'}],
  },
  iconContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IconAssetProgress = React.memo(Component);
export default IconAssetProgress;

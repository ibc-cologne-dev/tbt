import React from 'react';
import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {useTheme} from '../theme';
import {spacing, spacingHeight} from '../theme/spacing';
import {Text} from '../core/Text';
import {BackIcon} from '../assets/svgs/BackIcon';
import {Color} from '../theme/colors';
import {Font} from '../theme/typography';
import {Box} from '../core/Box';

interface HeaderProps extends NativeStackHeaderProps {
  color?: Color;
  fontFamily?: Font;
}

export const Header: React.FC<HeaderProps> = ({
  route,
  options,
  back,
  navigation,
  color = 'petrolBlue',
  fontFamily = 'avenirBlack',
}) => {
  const {colors} = useTheme();
  const routeName = route.name;
  const title = getHeaderTitle(options, routeName);
  // @ts-ignore
  const subtitle = route.params?.book ?? '';

  return (
    <SafeAreaView style={{backgroundColor: colors[color]}}>
      <Box style={styles.header}>
        {back && routeName !== 'tbts' ? (
          <TouchableOpacity
            hitSlop={{bottom: 8, top: 8, left: 8, right: 8}}
            onPress={() => navigation.goBack()}
            style={styles.back}>
            <Box style={styles.backIcon}>
              <BackIcon />
            </Box>
            <Text color="white100" variant="sm" fontFamily="avenirBlack">
              {getBackTitle(route.name)}
            </Text>
          </TouchableOpacity>
        ) : (
          <Box style={styles.subtitle} />
        )}

        <Text
          variant="lg"
          textAlign="center"
          fontFamily={fontFamily}
          color="white100">
          {title}
        </Text>

        <Text
          variant="sm"
          color="white100"
          textAlign="right"
          fontFamily="avenirBlack"
          paddingRight={0.5}
          style={styles.subtitle}>
          {subtitle}
        </Text>
      </Box>
    </SafeAreaView>
  );
};

function getBackTitle(routeName: string): string {
  switch (routeName) {
    case 'lessons':
      return 'BOOKS';
    case 'lessonResources':
      return 'LESSONS';
    case 'lessonResource':
      return 'RESOURCE';
  }
  return '';
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: spacingHeight[1] - 28,
    paddingBottom: 8,
  },
  back: {
    width: 120,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backIcon: {
    width: spacing[1],
    alignItems: 'center',
  },
  subtitle: {
    width: 120,
  },
});

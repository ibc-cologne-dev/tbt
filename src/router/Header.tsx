import React from 'react';
import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StyleSheet, TouchableOpacity, SafeAreaView, View} from 'react-native';
import {useTheme} from '../theme';
import {spacing} from '../theme/spacing';
import {Text} from '../core/Text';
import {BackIcon} from '../assets/svgs/BackIcon';
import {Color} from '../theme/colors';
import {Font} from '../theme/typography';

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
      <View style={styles.header}>
        {back && routeName !== 'tbts' ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}>
            <BackIcon />
            <Text
              color="white100"
              variant="sm"
              fontFamily="avenirBlack"
              marginLeft={1}>
              {getBackTitle(route.name)}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.subtitle} />
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
          style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing[2],
    height: 40,
  },
  back: {
    width: 120,
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    width: 120,
  },
});

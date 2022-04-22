import React from 'react';
import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {StyleSheet, TouchableOpacity, SafeAreaView, View} from 'react-native';
import {useTheme} from '../theme';
import {spacing} from '../theme/spacing';
import {Text} from '../core/Text';

export const Header: React.FC<NativeStackHeaderProps> = ({
  route,
  options,
  back,
  navigation,
}) => {
  const {colors} = useTheme();
  const title = getHeaderTitle(options, route.name);
  // @ts-ignore
  const subtitle = route.params?.book ?? '';

  return (
    <SafeAreaView style={{backgroundColor: colors.petrolBlue}}>
      <View style={styles.header}>
        {back ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}>
            <Text
              color="white100"
              variant="sm"
              fontFamily="avenirBlack">{`< ${getBackTitle(route.name)}`}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.subtitle} />
        )}

        <Text
          variant="lg"
          textAlign="center"
          fontFamily="avenirBlack"
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
    case 'lessonsResource':
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
    width: 100,
  },
  subtitle: {
    width: 120,
  },
});

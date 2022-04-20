import React from 'react';
import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {useTheme} from '../theme';
import {spacing} from '../theme/spacing';

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
              style={[styles.title, styles.backText]}>{`< ${back.title}`}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.subtitle} />
        )}

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

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
  backText: {
    fontSize: 12,
    textAlign: 'left',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 14,
    width: 120,
    textAlign: 'right',
  },
});

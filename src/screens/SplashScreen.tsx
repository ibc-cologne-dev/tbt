import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IBCCLogo} from '../assets/svgs/IBCCLogo';
import {TbtLogo} from '../assets/svgs/TbtLogo';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {Text} from '../core/Text';
import {RootStackParamList} from '../router';
import {spacing, spacingHeight} from '../theme/spacing';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {colors} from '../theme/colors';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {SplashScreenQuery} from '../__generated__/SplashScreenQuery.graphql';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'splash'>;

const TbtsQuery = graphql`
  query SplashScreenQuery {
    tbts @required(action: NONE) {
      id @required(action: NONE)
      title @required(action: NONE)
    }
    ...TbtsScreen_tbts
  }
`;

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useLazyLoadQuery<SplashScreenQuery>(TbtsQuery, {});

  useEffect(() => {
    if (data?.tbts && !isLoading) {
      navigation.navigate('tabs', {
        // @ts-ignore
        screen: 'home',
        params: {screen: 'tbts', params: {fragmentKey: data}},
      });
    }
  }, [isLoading, data, navigation]);

  useEffect(() => {
    const init = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        notificationCapabilities: [
          Capability.Pause,
          Capability.Play,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        capabilities: [
          Capability.Pause,
          Capability.Play,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Pause,
          Capability.Play,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
      });
      setIsLoading(false);
    };
    init();
  }, []);

  return (
    <BaseScreenWrapper color="petrolBlue">
      <Box backgroundColor="petrolBlue" style={styles.container}>
        <Box style={styles.logo}>
          <TbtLogo />
        </Box>

        <Box paddingHorizontal={1} style={styles.body}>
          <Text variant="lg" color="white100" style={styles.text}>
            ‘A journey through scripture to know God better; a journey best
            traveled together’
          </Text>

          <Image
            style={styles.weirdTriangle}
            source={require('../assets/weirdTriangle.png')}
          />
        </Box>

        <Box style={styles.footer} paddingHorizontal={1}>
          <IBCCLogo style={styles.footerLogo} />
        </Box>
      </Box>
    </BaseScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: spacingHeight[1] + spacingHeight[2],
    justifyContent: 'flex-end',
  },
  body: {
    flex: 1,
    paddingTop: spacingHeight[1],
  },
  text: {
    zIndex: 2,
  },
  footer: {
    alignItems: 'flex-end',
    backgroundColor: colors.white100,
    height: spacingHeight[2],
  },
  footerLogo: {
    marginTop: spacingHeight[1],
  },
  weirdTriangle: {
    position: 'absolute',
    top: 20,
    left: spacing[4],
  },
});

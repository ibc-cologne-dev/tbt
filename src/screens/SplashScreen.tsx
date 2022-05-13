import React, {useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IBCCLogo} from '../assets/svgs/IBCCLogo';
import {TbtLogo} from '../assets/svgs/TbtLogo';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {Text} from '../core/Text';
import {RootStackParamList} from '../router';
import {spacing} from '../theme/spacing';
import TrackPlayer, {Capability} from 'react-native-track-player';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'splash'>;

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  // const data = useLazyLoadQuery<SplashScreenTbtQuery>(TbtsQuery, {});

  const navigate = useCallback(() => {
    navigation.replace('tabs');
  }, [navigation]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

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
      timer = setTimeout(navigate, 2000);
    };
    init();

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <BaseScreenWrapper color="petrolBlue">
      <Box
        backgroundColor="petrolBlue"
        style={styles.container}
        paddingHorizontal={4}>
        <Box style={styles.logo}>
          <TbtLogo />
        </Box>

        <Text variant="lg" color="white100">
          ‘A journey through scripture to know God better; a journey best
          traveled together’
        </Text>

        <Box style={styles.footer}>
          <IBCCLogo style={styles.footerLogo} />
        </Box>
      </Box>
    </BaseScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: spacing[16],
    left: 0,
    right: 0,
  },
  footer: {
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: spacing[8],
    display: 'flex',
    right: spacing[4],
  },
  footerLogo: {
    backgroundColor: 'green',
  },
});

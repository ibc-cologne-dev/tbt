import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {RootStackParamList} from '../router';

type HomeScreenScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

export const HomeScreen: React.FC<HomeScreenScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../assets/logo.webp')}
          style={styles.image}
        />
        <Text style={[styles.title, styles.description]}>
          TBT (through the bible together)
        </Text>
        <Text style={styles.description}>Check the content the TBTs</Text>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('tbts')}>
          ENTER
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
  },
  image: {
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
  button: {
    padding: 8,
    margin: 16,
    fontFamily: 'Nunito',
  },
});

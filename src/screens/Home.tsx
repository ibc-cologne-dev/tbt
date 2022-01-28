import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';

export const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image resizeMode="cover" source={require('../assets/logo.webp')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

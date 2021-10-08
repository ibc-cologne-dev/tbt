import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Button,
  Provider as PaperProvider,
  Title,
  DefaultTheme,
} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={style.container}>
        <Title>TBT</Title>
        <Button mode="contained" onPress={() => {}}>
          Press me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

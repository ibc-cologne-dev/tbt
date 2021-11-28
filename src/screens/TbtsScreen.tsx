import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {TbtsScreenTbtQuery} from '../__generated__/TbtsScreenTbtQuery.graphql';
import {FirebaseCard} from '../core/FirebaseCard';
import {RootStackParamList} from '../router';
import {Spacer} from '../core/Spacer';

const TbtsQuery = graphql`
  query TbtsScreenTbtQuery {
    tbts {
      id
      image
      title
    }
  }
`;

type TbtsScreenProps = NativeStackScreenProps<RootStackParamList, 'tbts'>;

export const TbtsScreen: React.FC<TbtsScreenProps> = ({navigation}) => {
  const data = useLazyLoadQuery<TbtsScreenTbtQuery>(TbtsQuery, {});

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={data.tbts}
          ItemSeparatorComponent={() => <Spacer variant="lg" />}
          renderItem={({item, index}) => (
            <FirebaseCard
              onPress={() =>
                navigation.navigate('lessons', {
                  id: item?.id ?? '',
                  title: item?.title ?? '',
                })
              }
              title={item?.title}
              key={`tbt_${index}`}
              firebaseUri={item?.image}
              imageStyle={styles.cardImage}
              style={styles.card}
            />
          )}
          keyExtractor={(_, index) => `tbtItem_${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  cardImage: {
    width: '100%',
    minHeight: 160,
  },
});

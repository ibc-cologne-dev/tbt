import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {TbtsScreenTbtQuery} from '../__generated__/TbtsScreenTbtQuery.graphql';
import {RootStackParamList} from '../router';
import {Spacer} from '../core/Spacer';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';

const TbtsQuery = graphql`
  query TbtsScreenTbtQuery {
    tbts {
      id
      title
    }
  }
`;

type TbtsScreenProps = NativeStackScreenProps<RootStackParamList, 'tbts'>;

export const TbtsScreen: React.FC<TbtsScreenProps> = ({navigation}) => {
  const data = useLazyLoadQuery<TbtsScreenTbtQuery>(TbtsQuery, {});

  return (
    <BaseScreenWrapper>
      <View style={styles.container}>
        <FlatList
          data={data.tbts}
          ItemSeparatorComponent={() => <Spacer variant="lg" />}
          renderItem={({item, index}) => (
            <TouchableNativeFeedback
              onPress={() =>
                navigation.navigate('lessons', {
                  id: item?.id ?? '',
                  title: item?.title ?? '',
                })
              }>
              <Box
                backgroundColor="petrolBlue"
                style={styles.card}
                key={`tbt_${index}`}>
                <Text style={styles.text}>{item?.title ?? ''}</Text>
              </Box>
            </TouchableNativeFeedback>
          )}
          keyExtractor={(_, index) => `tbtItem_${index}`}
        />
      </View>
    </BaseScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    paddingVertical: 32,
  },
  cardImage: {
    width: '100%',
    minHeight: 160,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 18,
    textAlign: 'center',
  },
});

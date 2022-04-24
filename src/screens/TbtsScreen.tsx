import React from 'react';
import {FlatList, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {TbtsScreenTbtQuery} from '../__generated__/TbtsScreenTbtQuery.graphql';
import {RootStackParamList} from '../router';
import {Spacer} from '../core/Spacer';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {Text} from '../core/Text';

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
      <Box paddingHorizontal={4} paddingVertical={4}>
        <FlatList
          data={data.tbts}
          ItemSeparatorComponent={() => <Spacer variant="lg" />}
          renderItem={({item, index}) => (
            <TouchableNativeFeedback
              onPress={() =>
                navigation.navigate('lessons', {
                  tbtId: item?.id ?? '',
                  title: item?.title ?? '',
                })
              }>
              <Box
                backgroundColor="petrolBlue"
                style={styles.card}
                padding={2}
                key={`tbt_${index}`}>
                <Text variant="lg" fontFamily="avenirBlack" textAlign="center">
                  {item?.title ?? ''}
                </Text>
              </Box>
            </TouchableNativeFeedback>
          )}
          keyExtractor={(_, index) => `tbtItem_${index}`}
        />
      </Box>
    </BaseScreenWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    minHeight: 160,
  },
});

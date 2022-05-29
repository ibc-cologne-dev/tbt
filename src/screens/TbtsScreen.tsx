import React from 'react';
import {FlatList, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../router';
import {Spacer} from '../core/Spacer';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {Text} from '../core/Text';

import {usePermissions} from '../hooks/usePermissions';
import {spacingHeight} from '../theme/spacing';

const TbtsFragment = graphql`
  fragment TbtsScreen_tbts on Query {
    tbts @required(action: NONE) {
      id @required(action: NONE)
      title @required(action: NONE)
    }
  }
`;

type TbtsScreenProps = NativeStackScreenProps<HomeStackParamList, 'tbts'>;

export const TbtsScreen: React.FC<TbtsScreenProps> = ({navigation, route}) => {
  usePermissions();

  const data = useFragment(TbtsFragment, route.params.fragmentKey);

  if (!data) {
    return null;
  }

  return (
    <BaseScreenWrapper>
      <Box paddingHorizontal={1} paddingTop={1}>
        <FlatList
          data={data.tbts}
          ItemSeparatorComponent={() => <Spacer variant="md" />}
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
    height: spacingHeight[1],
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    minHeight: 160,
  },
});

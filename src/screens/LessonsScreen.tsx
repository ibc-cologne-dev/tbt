import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LessonsScreenTbtQuery} from '../__generated__/LessonsScreenTbtQuery.graphql';
import {RootStackParamList} from '../router';
import {useCustomScreenHeader} from '../hooks/useCustomScreenHeader';
import {LessonBlock} from '../core/LessonBlock';
import {colors} from '../theme/colors';

const LessonsQuery = graphql`
  query LessonsScreenTbtQuery($id: ID!) {
    lessons(id: $id) @required(action: NONE) {
      id @required(action: NONE)
      title @required(action: NONE)
      subtitle
      number @required(action: NONE)
      color
      ...LessonResourcesScreen_lesson
    }
  }
`;

type LessonsScreensProps = NativeStackScreenProps<
  RootStackParamList,
  'lessons'
>;

type LessonData = {
  variables: LessonsScreenTbtQuery['variables'];
  response: LessonsScreenTbtQuery['response'];
};

export const LessonsScreen: React.FC<LessonsScreensProps> = ({
  route: {params},
  navigation,
}) => {
  const {id, title} = params;
  useCustomScreenHeader(title);

  const data = useLazyLoadQuery<LessonsScreenTbtQuery>(LessonsQuery, {
    id,
  });

  if (!data) {
    return null;
  }

  const orderData = data.lessons
    .filter(l => l !== null)
    .sort((a, b) => {
      if (!a || !b) {
        return 0;
      }
      if (a.number > b.number) {
        return 1;
      }
      return -1;
    });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orderData}
        horizontal={false}
        renderItem={({item, index}) => (
          <LessonBlock
            key={`lesson_${index}`}
            index={item?.number}
            headline={item?.title}
            subline={item?.subtitle}
            onPress={() => {
              navigation.navigate('lessonResources', {
                fragmentKey: item,
                book: title,
              });
            }}
            isEven={index % 2 === 0}
          />
        )}
        keyExtractor={(_, index) => `tbtItem_${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white100,
  },
  lesson: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    justifyContent: 'space-between',
    height: 120,
    width: '48%',
  },
  lessonImage: {
    height: 70,
  },
});

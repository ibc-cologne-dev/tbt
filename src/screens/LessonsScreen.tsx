import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router';
import {useCustomScreenHeader} from '../hooks/useCustomScreenHeader';
import {LessonBlock} from '../core/LessonBlock';
import {colors} from '../theme/colors';
import {LessonsScreenQuery} from '../__generated__/LessonsScreenQuery.graphql';

const LessonsQuery = graphql`
  query LessonsScreenQuery($tbtId: ID!) {
    lessons(tbtId: $tbtId) @required(action: NONE) {
      ...LessonResourcesScreen_lesson

      id @required(action: NONE)
      title @required(action: NONE)
      subtitle
      number @required(action: NONE)
      color
    }
  }
`;

type LessonsScreensProps = NativeStackScreenProps<
  RootStackParamList,
  'lessons'
>;

export const LessonsScreen: React.FC<LessonsScreensProps> = ({
  route: {params},
  navigation,
}) => {
  const {tbtId, title} = params;
  useCustomScreenHeader(title);

  const data = useLazyLoadQuery<LessonsScreenQuery>(LessonsQuery, {
    tbtId,
  });

  if (!data) {
    return null;
  }

  // TODO: add argument to the graphql query to sort
  const orderedData = data.lessons
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
        data={orderedData}
        horizontal={false}
        renderItem={({item, index}) => (
          <LessonBlock
            key={`lesson_${index}`}
            index={item?.number}
            headline={item?.title}
            subline={item?.subtitle}
            indexColor={item?.color}
            onPress={() => {
              navigation.navigate('lessonResources', {
                tbtId,
                lessonId: item?.id!,
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

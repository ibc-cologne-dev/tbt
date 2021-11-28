import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {LessonsScreenTbtQuery} from '../__generated__/LessonsScreenTbtQuery.graphql';
import {FirebaseCard} from '../core/FirebaseCard';
import {RootStackParamList} from '../router';
import {useCustomScreenHeader} from '../hooks/useCustomScreenHeader';

const LessonsQuery = graphql`
  query LessonsScreenTbtQuery($id: ID!) {
    lessons(id: $id) {
      id
      image
      title
      ...LessonScreen_lesson
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
  const {id} = params;
  const data = useLazyLoadQuery<LessonsScreenTbtQuery>(LessonsQuery, {
    id,
  });

  useCustomScreenHeader(params.title);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.lessons}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={styles.listContainer}
        renderItem={({item, index}) => (
          <FirebaseCard
            onPress={() => {
              navigation.navigate('lesson', {fragmentKey: item});
            }}
            title={item?.title}
            key={`tbt_${index}`}
            firebaseUri={item?.image}
            style={styles.lesson}
            imageStyle={styles.lessonImage}
            variant="block"
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
  },
  listContainer: {
    justifyContent: 'space-between',
    padding: 8,
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

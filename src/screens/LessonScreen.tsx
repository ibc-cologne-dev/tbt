import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router';
import {FirebaseCard} from '../core/FirebaseCard';
import {useCustomScreenHeader} from '../hooks/useCustomScreenHeader';
import {Spacer} from '../core/Spacer';

const lessonQuery = graphql`
  fragment LessonScreen_lesson on Lesson {
    id
    title
    resources {
      id
      image_thumbnail
      title
      ...LessonResourceScreen_resource
    }
  }
`;

type LessonsScreenProps = NativeStackScreenProps<RootStackParamList, 'lesson'>;

export const LessonScreen: React.FC<LessonsScreenProps> = ({
  navigation,
  route: {params},
}) => {
  const data = useFragment(lessonQuery, params.fragmentKey);

  if (!data?.resources) {
    throw new Error('Resources cannot be null');
  }

  useCustomScreenHeader(data.title ?? '');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.resources}
        horizontal={false}
        ItemSeparatorComponent={() => <Spacer variant="md" />}
        renderItem={({item, index}) => (
          <FirebaseCard
            onPress={() =>
              navigation.navigate('lessonResource', {
                fragmentKey: item,
              })
            }
            title={item?.title}
            key={`lessonResource_${index}`}
            firebaseUri={item?.image_thumbnail}
            style={styles.resource}
            imageStyle={styles.resourceImage}
            variant="listItem"
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
  resource: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    justifyContent: 'space-between',
    height: 80,
  },
  resourceImage: {
    height: 80,
    width: 80,
  },
});

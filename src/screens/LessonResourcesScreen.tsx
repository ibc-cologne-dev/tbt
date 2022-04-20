import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router';
import {FirebaseCard} from '../core/FirebaseCard';
import {Spacer} from '../core/Spacer';

const lessonResourcesQuery = graphql`
  fragment LessonResourcesScreen_lesson on Lesson {
    id
    title
    resources {
      id
      title
      ...LessonResourceScreen_resource
    }
  }
`;

type LessonsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'lessonResources'
>;

export const LessonScreen: React.FC<LessonsScreenProps> = ({
  navigation,
  route: {params},
}) => {
  const data = useFragment(lessonResourcesQuery, params.fragmentKey);

  if (!data?.resources) {
    throw new Error('Resources cannot be null');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data.resources}
        horizontal={false}
        ItemSeparatorComponent={() => <Spacer variant="md" />}
        renderItem={({item, index}) => (
          <FirebaseCard
            onPress={() =>
              navigation.navigate('lessonResource', {
                fragmentKey: item,
                book: params.book,
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
    backgroundColor: '#f7f7f7',
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
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

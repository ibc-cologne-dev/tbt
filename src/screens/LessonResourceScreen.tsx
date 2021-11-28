import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router';
import {useCustomScreenHeader} from '../hooks/useCustomScreenHeader';
import {LazyLoadImage} from '../core/LazyLoadImage';
import {Content} from '../core/Content';
import {Join} from '../core/Join';
import {Spacer} from '../core/Spacer';

const LessonResourceFragment = graphql`
  fragment LessonResourceScreen_resource on Resource {
    title
    image_header
    content {
      type
      value
    }
  }
`;

type LessonResourceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'lessonResource'
>;

export const LessonResourceScreen: React.FC<LessonResourceScreenProps> = ({
  route: {params},
}) => {
  const data = useFragment(LessonResourceFragment, params.fragmentKey);

  useCustomScreenHeader(data?.title ?? '');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {!!data?.image_header && (
          <LazyLoadImage
            firebaseUri={data?.image_header}
            imageStyle={styles.imageHeader}
          />
        )}
        <Spacer variant="lg" />

        <View style={styles.listContainer}>
          <Join separator={<Spacer variant="lg" />}>
            {data?.content?.map((content, index) => (
              <Content
                key={`content_${index}`}
                content={content?.value ?? ''}
                type={content?.type ?? 'text'}
              />
            ))}
          </Join>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    paddingBottom: 60,
  },
  imageHeader: {
    height: 240,
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  resource: {},
  resourceImage: {},
});

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
import {LessonBlock} from '../core/LessonBlock';
import {spacing} from '../theme/spacing';

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

const LessonFragment = graphql`
  fragment LessonResourceScreen_lesson on ShortLessonItem {
    id @required(action: NONE)
    title @required(action: NONE)
    subtitle
    number @required(action: NONE)
    color
  }
`;

type LessonResourceScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'lessonResource'
>;

export const LessonResourceScreen: React.FC<LessonResourceScreenProps> = ({
  route: {params},
}) => {
  const resource = useFragment(
    LessonResourceFragment,
    params.resourceFragmentKey,
  );
  const lesson = useFragment(LessonFragment, params.lessonFragmentKey);

  useCustomScreenHeader(resource?.title ?? '');

  if (!resource || !lesson) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LessonBlock
        index={lesson.number}
        indexColor={lesson.color}
        headline={lesson.title}
        subline={lesson.subtitle}
      />
      <ScrollView contentContainerStyle={styles.scrollview}>
        {!!resource?.image_header && (
          <LazyLoadImage
            firebaseUri={resource?.image_header}
            imageStyle={styles.imageHeader}
          />
        )}

        <View>
          <Join separator={<Spacer variant="lg" />}>
            {resource?.content?.map((content, index) => (
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
    marginBottom: spacing[4],
  },
});

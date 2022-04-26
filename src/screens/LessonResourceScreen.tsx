import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {graphql, useFragment} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router';
import {useCustomScreenHeader} from '../hooks/useCustomScreenHeader';
import {LazyLoadImage} from '../core/LazyLoadImage';
import {Content} from '../core/Content';
import {Spacer} from '../core/Spacer';
import {LessonBlock} from '../core/LessonBlock';
import {spacing} from '../theme/spacing';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Header} from '../router/Header';

const LessonResourceFragment = graphql`
  fragment LessonResourceScreen_resource on Resource {
    title
    image_header
    content {
      type
      value
    }
    type @required(action: NONE) {
      title @required(action: NONE)
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
  navigation,
}) => {
  const resource = useFragment(
    LessonResourceFragment,
    params.resourceFragmentKey,
  );
  const lesson = useFragment(LessonFragment, params.lessonFragmentKey);

  useCustomScreenHeader(resource?.title ?? '');

  const isBaseContent =
    resource?.type.title === 'Study Guide' || resource?.type.title === 'Sermon';

  useEffect(() => {
    if (resource) {
      navigation.setOptions({
        header: props => (
          <Header
            {...props}
            color={isBaseContent ? 'petrolBlue' : 'orange'}
            fontFamily={isBaseContent ? 'avenirBlack' : 'alisha'}
          />
        ),
      });
    }
  }, [isBaseContent, navigation, resource]);

  if (!resource || !lesson) {
    return null;
  }

  return (
    <BaseScreenWrapper
      style={styles.container}
      color={isBaseContent ? 'petrolBlue' : 'orange'}>
      <FlatList
        style={styles.scrollview}
        keyExtractor={(_, index) => `tbtItem_${index}`}
        ListHeaderComponent={() => {
          return (
            <LessonBlock
              index={lesson.number}
              indexColor={lesson.color}
              headline={lesson.title}
              subline={lesson.subtitle}
              onPress={() => navigation.pop(2)}
            />
          );
        }}
        ItemSeparatorComponent={() => <Spacer variant="lg" />}
        data={resource.content}
        renderItem={({item, index}) => (
          <>
            {resource.image_header && (
              <LazyLoadImage
                firebaseUri={resource?.image_header}
                imageStyle={styles.imageHeader}
              />
            )}
            {index === 0 &&
              item?.type !== 'video' &&
              !resource.image_header && (
                <Spacer variant="lg" key={`spacer_${index}`} />
              )}

            <Content
              key={`content_${index}`}
              content={item?.value ?? ''}
              type={item?.type ?? 'text'}
            />
          </>
        )}
      />
    </BaseScreenWrapper>
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

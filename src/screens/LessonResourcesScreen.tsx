import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../router';
import {LessonBlock} from '../core/LessonBlock';
import {Box} from '../core/Box';
import {Text} from '../core/Text';
import {Color, colors} from '../theme/colors';
import {spacing, spacingHeight} from '../theme/spacing';
import {Font, Variant} from '../theme/typography';
import {LessonResourcesScreenQuery} from '../__generated__/LessonResourcesScreenQuery.graphql';

const LessonResourcesQuery = graphql`
  query LessonResourcesScreenQuery($lessonId: ID!, $tbtId: ID!) {
    lessonResources(lessonId: $lessonId, tbtId: $tbtId) {
      id
      title
      type {
        title
      }
      ...LessonResourceScreen_resource
    }
  }
`;

const lessonFragment = graphql`
  fragment LessonResourcesScreen_lesson on ShortLessonItem {
    id @required(action: NONE)
    title @required(action: NONE)
    subtitle
    number @required(action: NONE)
    color
    ...LessonResourceScreen_lesson
  }
`;

type LessonsScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'lessonResources'
>;

export const LessonScreen: React.FC<LessonsScreenProps> = ({
  navigation,
  route: {params},
}) => {
  const {lessonResources} = useLazyLoadQuery<LessonResourcesScreenQuery>(
    LessonResourcesQuery,
    {lessonId: params.lessonId, tbtId: params.tbtId},
  );
  const lesson = useFragment(lessonFragment, params.fragmentKey);

  if (!lessonResources || !lesson) {
    throw new Error('Resources cannot be null');
  }

  return (
    <SafeAreaView style={styles.container}>
      <LessonBlock
        index={lesson.number}
        indexColor={lesson.color}
        headline={lesson.title}
        subline={lesson.subtitle}
        onPress={() => navigation.pop()}
      />

      <FlatList
        style={styles.listContainer}
        data={lessonResources}
        horizontal={false}
        renderItem={({item, index}) => {
          const {boxStyle, textStyle} = getResourceStyle(item?.type?.title!);
          return (
            <TouchableHighlight
              underlayColor={colors.white100}
              onPress={() => {
                navigation.navigate('lessonResource', {
                  resourceFragmentKey: item,
                  lessonFragmentKey: lesson,
                  book: params.book,
                });
              }}>
              <Box
                key={`resource_${index}`}
                {...boxStyle}
                style={styles.button}>
                <Text color="white100" textAlign="center" {...textStyle}>
                  {item?.title}
                </Text>
              </Box>
            </TouchableHighlight>
          );
        }}
        keyExtractor={(_, index) => `tbtItem_${index}`}
      />
    </SafeAreaView>
  );
};

function getResourceStyle(typename: string): {
  boxStyle: {
    backgroundColor: Color;
  };
  textStyle: {
    fontFamily?: Font;
    variant: Variant;
  };
} {
  if (
    typename === 'Sermon' ||
    typename === 'Study Guide' ||
    typename === 'Memory Verse'
  ) {
    return {
      boxStyle: {
        backgroundColor: 'petrolBlue',
      },
      textStyle: {fontFamily: 'avenirBlack', variant: 'lg'},
    };
  }

  return {
    boxStyle: {backgroundColor: 'orange'},
    textStyle: {fontFamily: 'alisha', variant: 'xl'},
  };
}

const smallBlock = spacingHeight[1] * 0.1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  listContainer: {
    paddingBottom: spacingHeight[1],
    paddingHorizontal: spacing[1],
  },
  button: {
    justifyContent: 'center',
    height: spacingHeight[1] - smallBlock * 2,
    margin: smallBlock,
  },
});

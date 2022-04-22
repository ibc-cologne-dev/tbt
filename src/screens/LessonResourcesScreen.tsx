import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextStyle,
  TouchableHighlight,
} from 'react-native';
import {graphql, useFragment, useLazyLoadQuery} from 'react-relay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router';
import {LessonBlock} from '../core/LessonBlock';
import {Box} from '../core/Box';
import {Text} from '../core/Text';
import {Color} from '../theme/colors';
import {spacing} from '../theme/spacing';
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
  const {lessonResources} = useLazyLoadQuery<LessonResourcesScreenQuery>(
    LessonResourcesQuery,
    {lessonId: params.lessonId, tbtId: params.tbtId},
  );
  const lessonData = useFragment(lessonFragment, params.fragmentKey);

  if (!lessonResources || !lessonData) {
    throw new Error('Resources cannot be null');
  }

  return (
    <SafeAreaView style={styles.container}>
      <LessonBlock
        index={lessonData.number}
        indexColor={lessonData.color}
        headline={lessonData.title}
        subline={lessonData.subtitle}
      />

      <FlatList
        style={styles.listContainer}
        data={lessonResources}
        horizontal={false}
        renderItem={({item, index}) => {
          const {boxStyle, textStyle} = getResourceStyle(item?.type?.title!);
          return (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('lessonResource', {
                  fragmentKey: item,
                  book: params.book,
                });
              }}>
              <Box
                key={`resource_${index}`}
                {...boxStyle}
                margin={1}
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
    fontWeight?: TextStyle['fontWeight'];
    fontFamily?: Font;
    variant: Variant;
  };
} {
  if (typename === 'Sermon' || typename === 'Study Guide') {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  listContainer: {
    paddingBottom: 16,
    paddingHorizontal: spacing[4],
  },
  button: {
    minHeight: 80,
    justifyContent: 'center',
  },
});

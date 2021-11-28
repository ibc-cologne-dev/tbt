import {useCallback} from 'react';
import {LessonScreen_lesson$key} from '../__generated__/LessonScreen_lesson.graphql';

let lessonKey: LessonScreen_lesson$key;

export const useLessonFragmentRef = () => {
  const setLessonKey = useCallback((key: LessonScreen_lesson$key | null) => {
    if (key) {
      lessonKey = key;
    }
  }, []);

  return {setLessonKey, lessonKey};
};

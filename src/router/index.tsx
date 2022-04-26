import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from './Header';

import {TbtsScreen} from '../screens/TbtsScreen';
import {LessonsScreen} from '../screens/LessonsScreen';
import {LessonScreen} from '../screens/LessonResourcesScreen';
import {LessonResourceScreen} from '../screens/LessonResourceScreen';
import {TbtsScreen_query$key} from '../__generated__/TbtsScreen_query.graphql';
import {LessonResourceScreen_resource$key} from '../__generated__/LessonResourceScreen_resource.graphql';
import {LessonResourcesScreen_lesson$key} from '../__generated__/LessonResourcesScreen_lesson.graphql';
import {LessonResourceScreen_lesson$key} from '../__generated__/LessonResourceScreen_lesson.graphql';
import {SplashScreen} from '../screens/SplashScreen';

export type RootStackParamList = {
  splash: undefined;
  tbts: {tbtsFragmentKey: TbtsScreen_query$key};
  lessons: {tbtId: string; title: string};
  lessonResources: {
    tbtId: string;
    lessonId: string;
    book: string;
    fragmentKey: LessonResourcesScreen_lesson$key | null;
  };
  lessonResource: {
    resourceFragmentKey: LessonResourceScreen_resource$key | null;
    lessonFragmentKey: LessonResourceScreen_lesson$key | null;
    book: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="tbts"
          component={TbtsScreen}
          options={{
            title: 'BOOKS',
            header: props => <Header {...props} />,
          }}
        />
        <Stack.Screen
          name="lessons"
          component={LessonsScreen}
          options={{
            title: '',
            header: props => <Header {...props} />,
          }}
        />
        <Stack.Screen
          name="lessonResources"
          component={LessonScreen}
          options={{
            title: 'RESOURCES',
            header: props => <Header {...props} />,
          }}
        />
        <Stack.Screen
          name="lessonResource"
          component={LessonResourceScreen}
          options={{
            title: '',
            header: props => <Header {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

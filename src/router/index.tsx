import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TbtsScreen} from '../screens/TbtsScreen';
import {LessonsScreen} from '../screens/LessonsScreen';
import {LessonScreen} from '../screens/LessonResourcesScreen';
import {LessonResourceScreen} from '../screens/LessonResourceScreen';
import {LessonResourceScreen_resource$key} from '../__generated__/LessonResourceScreen_resource.graphql';
import {LessonResourcesScreen_lesson$key} from '../__generated__/LessonResourcesScreen_lesson.graphql';
import {Header} from './Header';

export type RootStackParamList = {
  tbts: undefined;
  lessons: {tbtId: string; title: string};
  lessonResources: {
    tbtId: string;
    lessonId: string;
    book: string;
    fragmentKey: LessonResourcesScreen_lesson$key | null;
  };
  lessonResource: {
    fragmentKey: LessonResourceScreen_resource$key | null;
    book: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

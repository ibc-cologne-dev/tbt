import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {TbtsScreen} from '../screens/TbtsScreen';
import {LessonsScreen} from '../screens/LessonsScreen';
import {LessonScreen} from '../screens/LessonScreen';
import {LessonResourceScreen} from '../screens/LessonResourceScreen';
import {LessonScreen_lesson$key} from '../__generated__/LessonScreen_lesson.graphql';
import {LessonResourceScreen_resource$key} from '../__generated__/LessonResourceScreen_resource.graphql';

export type RootStackParamList = {
  home: undefined;
  tbts: undefined;
  lessons: {id: string; title: string};
  lesson: {fragmentKey: LessonScreen_lesson$key | null};
  lessonResource: {fragmentKey: LessonResourceScreen_resource$key | null};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tbts"
          component={TbtsScreen}
          options={{title: 'TBT'}}
        />
        <Stack.Screen
          name="lessons"
          component={LessonsScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="lesson"
          component={LessonScreen}
          options={{title: ''}}
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

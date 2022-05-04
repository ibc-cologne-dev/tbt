import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Header} from './Header';
import {TbtsScreen} from '../screens/TbtsScreen';
import {LessonsScreen} from '../screens/LessonsScreen';
import {LessonScreen} from '../screens/LessonResourcesScreen';
import {LessonResourceScreen} from '../screens/LessonResourceScreen';
import {LessonResourceScreen_resource$key} from '../__generated__/LessonResourceScreen_resource.graphql';
import {LessonResourcesScreen_lesson$key} from '../__generated__/LessonResourcesScreen_lesson.graphql';
import {LessonResourceScreen_lesson$key} from '../__generated__/LessonResourceScreen_lesson.graphql';
import {SplashScreen} from '../screens/SplashScreen';
import {AudiosScreen} from '../screens/AudiosScreen';
import {colors} from '../theme/colors';

export type RootStackParamList = {
  splash: undefined;
  tabs: undefined;
};

export type TabParamList = {
  home: undefined;
  audios: undefined;
};

export type HomeStackParamList = {
  tbts: undefined;
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
const Tab = createBottomTabNavigator<TabParamList>();
const InnerStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="tbts"
        component={TbtsScreen}
        options={{
          title: 'BOOKS',
          header: props => <Header {...props} />,
        }}
      />
      <InnerStack.Screen
        name="lessons"
        component={LessonsScreen}
        options={{
          title: '',
          header: props => <Header {...props} />,
        }}
      />
      <InnerStack.Screen
        name="lessonResources"
        component={LessonScreen}
        options={{
          title: 'RESOURCES',
          header: props => <Header {...props} />,
        }}
      />
      <InnerStack.Screen
        name="lessonResource"
        component={LessonResourceScreen}
        options={{
          title: '',
          header: props => <Header {...props} />,
        }}
      />
    </InnerStack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => {
          return (
            <Icon
              name={route.name === 'home' ? 'home' : 'music'}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: colors.plum,
        tabBarInactiveTintColor: colors.white100,
        tabBarActiveBackgroundColor: colors.petrolBlue,
        tabBarInactiveBackgroundColor: colors.petrolBlue,
      })}>
      <Tab.Screen name="home" component={HomeStack} />
      <Tab.Screen name="audios" component={AudiosScreen} />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="tabs" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

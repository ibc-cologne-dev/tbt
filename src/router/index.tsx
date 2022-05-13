import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
  songs: undefined;
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

export type SongStackParamList = {
  audios: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const InnerStack = createNativeStackNavigator<HomeStackParamList>();
const SongsStack = createNativeStackNavigator<SongStackParamList>();

const HomeNavigator = () => {
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

const SongsNavigator = () => {
  return (
    <SongsStack.Navigator>
      <SongsStack.Screen
        name="audios"
        component={AudiosScreen}
        options={{
          title: 'SONGS',
          header: props => <Header {...props} />,
        }}
      />
    </SongsStack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: props => {
          return (
            <Icon name={route.name === 'home' ? 'home' : 'music'} {...props} />
          );
        },
        tabBarActiveTintColor: colors.white100,
        tabBarInactiveTintColor: colors.white100,
        tabBarActiveBackgroundColor: colors.lightPetrolBlue,
        tabBarInactiveBackgroundColor: colors.petrolBlue,
      })}>
      <Tab.Screen name="home" component={HomeNavigator} />
      <Tab.Screen name="songs" component={SongsNavigator} />
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

const Icon: React.FC<{
  name: string;
  focused: boolean;
  size: number;
  color: string;
}> = ({name, size, color}) => {
  return (
    <FontAwesomeIcon
      name={name === 'home' ? 'home' : 'music'}
      size={size}
      color={color}
    />
  );
};

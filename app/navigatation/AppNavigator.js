import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchImage from '../screens/SearchImage';
import ImageList from '../screens/ImageList';
import ImageData from '../screens/ImageData';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <>
    <Stack.Navigator initialRouteName="SearchImage" headerMode="none">
      <Stack.Screen name="SearchImage" component={SearchImage} />
      <Stack.Screen name="ImageList" component={ImageList} />
      <Stack.Screen name="ImageData" component={ImageData} />
    </Stack.Navigator>
  </>
);

export default AppNavigator;

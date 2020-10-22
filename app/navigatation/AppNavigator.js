import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchImage from '../screens/SearchImage/SearchImage.container';
import LinkList from '../screens/LinkList/LinkList.container';
import LinkData from '../screens/LinkData';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <>
    <Stack.Navigator initialRouteName="SearchImage" headerMode="none">
      <Stack.Screen name="SearchImage" component={SearchImage} />
      <Stack.Screen name="LinkList" component={LinkList} />
      <Stack.Screen name="LinkData" component={LinkData} />
    </Stack.Navigator>
  </>
);

export default AppNavigator;

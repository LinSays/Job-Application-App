import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../../screens/Home";
import JobDetailScreen from "../../../screens/JobDetail";
import ApplyJobScreen from "../../../screens/ApplyJob";

const Stack = createStackNavigator();

const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Home" options={HomeScreen.navigationOptions} component={HomeScreen} />
    <Stack.Screen name="JobDetail" options={JobDetailScreen.navigationOptions} component={JobDetailScreen} />
    <Stack.Screen name="ApplyJob" options={ApplyJobScreen.navigationOptions} component={ApplyJobScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;

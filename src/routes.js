import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Routes = ({ initialRoute }) => {
    return <Stack.Navigator initialRouteName={initialRoute} i>
        <Stack.Screen
            name="splash"
            component={require("./screen/SplashScreen").default}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="main"
            component={require("./screen/MainScreen").default}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="detail"
            component={require("./screen/DetailScreen").default}
            options={{ headerShown: false }} />
    </Stack.Navigator>
}

export default Routes
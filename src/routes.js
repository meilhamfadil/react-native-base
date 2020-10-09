import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return <Tab.Navigator
        backBehavior="history"
        tabBarOptions={{
            showLabel: false,
            activeTintColor: colors.primary,
            inactiveTintColor: "#7f7f7f",
            activeBackgroundColor: colors.background,
            inactiveBackgroundColor: colors.background,
            labelStyle: {
                marginBottom: 4
            },
            tabStyle: {
                borderTopWidth: 0.5,
                borderColor: colors.accent,
            },
        }}>
        <Tab.Screen
            name="Home"
            component={require("./screen/MainScreen").default}
            options={{
                tabBarIcon: ({ color }) => <Icon name="menu" size={24} color={color} />
            }} />
        <Tab.Screen
            name="Search"
            component={require("./screen/InfoScreen").default}
            options={{
                tabBarIcon: ({ color }) => <Icon name="magnify" size={24} color={color} />
            }} />
        <Tab.Screen
            name="Add"
            component={require("./screen/InfoScreen").default}
            options={{
                tabBarIcon: ({ color }) => <Icon name="plus" size={24} color={color} />
            }} />
        <Tab.Screen
            name="Info"
            component={require("./screen/InfoScreen").default}
            options={{
                tabBarIcon: ({ color }) => <Icon name="account" size={24} color={color} />
            }} />
        <Tab.Screen
            name="Setting"
            component={require("./screen/InfoScreen").default}
            options={{
                tabBarIcon: ({ color }) => <Icon name="cog" size={24} color={color} />
            }} />
    </Tab.Navigator>
}

const Routes = ({ initialRoute }) => {
    return <Stack.Navigator initialRouteName={initialRoute} i>
        <Stack.Screen
            name="splash"
            component={require("./screen/SplashScreen").default}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="login"
            component={require("./screen/LoginScreen").default}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="main"
            component={Tabs}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="detail"
            component={require("./screen/DetailScreen").default}
            options={{ headerShown: false }} />
    </Stack.Navigator>
}

export default Routes
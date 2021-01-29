import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from './Contexts'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// const Tabs = () => {
//     const { colors } = useTheme()

//     return <Tab.Navigator
//         backBehavior="history"
//         tabBarOptions={{
//             showLabel: true,
//             activeTintColor: colors.primaryDark,
//             inactiveTintColor: colors.dark,
//             labelStyle: {
//                 paddingBottom: 4
//             },
//             tabStyle: {
//                 borderTopWidth: 0.5,
//                 borderColor: colors.accent,
//             },
//         }}>
//         <Tab.Screen
//             name="Home"
//             component={require("./screen/MainScreen").default}
//             options={{
//                 tabBarIcon: ({ color }) => <Icon name="menu" size={24} color={color} />
//             }} />
//         <Tab.Screen
//             name="Search"
//             component={require("./screen/EmptyScreen").default}
//             options={{
//                 tabBarIcon: ({ color }) => <Icon name="magnify" size={24} color={color} />
//             }} />
//         <Tab.Screen
//             name="Add"
//             component={require("./screen/EmptyScreen").default}
//             options={{
//                 tabBarIcon: ({ color }) => <Icon name="plus" size={24} color={color} />
//             }} />
//     </Tab.Navigator>
// }

const Routes = ({ initialRoute }) => {
    return <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
            name="main"
            component={require("./screen/MainScreen").default}
            options={{ headerShown: false }} />
    </Stack.Navigator>
}

export default Routes
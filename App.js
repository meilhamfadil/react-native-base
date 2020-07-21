import React from 'react'
import { AppRegistry, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { name as appName } from './app.json'
import colors from './assets/colors'
import { registerAnimation } from './assets/animations'
import Routes from './src/routes'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.background,
        accent: colors.background
    },
};

registerAnimation()

export default function Main() {
    return <PaperProvider theme={theme}>
        <NavigationContainer>
            <Routes initialRoute="splash" />
        </NavigationContainer>
    </PaperProvider>
}

AppRegistry.registerComponent(appName, () => Main)
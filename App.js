import React from 'react'
import { AppRegistry, LogBox } from 'react-native'
import MainScreen from './src/screen/MainScreen'
import { name as appName } from './app.json'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import colors from './assets/colors'
import { color } from 'react-native-reanimated'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: color.background,
        accent: colors.accent
    },
};

export default function Main() {
    LogBox.ignoreAllLogs(true)
    return <PaperProvider theme={theme}>
        <MainScreen />
    </PaperProvider>
}

AppRegistry.registerComponent(appName, () => Main)
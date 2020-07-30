import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { registerAnimation } from './assets/animations'

import configureStore from './src/reducer/storeApp'
import colors from './assets/colors'
import AppComponent from './src/component'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.background,
        accent: colors.background
    },
};

// Register Base
const store = configureStore()
registerAnimation()

export default function Main() {
    return <Provider store={store}>
        <PaperProvider theme={theme}>
            <AppComponent />
        </PaperProvider>
    </Provider>
}

AppRegistry.registerComponent(appName, () => Main)
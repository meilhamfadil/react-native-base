import React from 'react'
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { registerAnimation } from './assets/animations'

import store from './src/redux/storeApp'
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
registerAnimation()

export default function App() {
    return <Provider store={store}>
        <PaperProvider theme={theme}>
            <AppComponent />
        </PaperProvider>
    </Provider>
}
import React from 'react'
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper'
import { registerAnimation } from './assets/animations'

import store from './src/redux/storeApp'
import colors from './assets/colors'
import AppComponent from './src/component'

const fontConfig = {
    default: {
        regular: {
            fontFamily: 'PTSans',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'PTSansBold',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'PTSansRegular',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'PTSansBold',
            fontWeight: 'normal',
        },
    },
};

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        text: colors.dark,
        primary: colors.primary,
        background: colors.background,
        accent: colors.accent
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
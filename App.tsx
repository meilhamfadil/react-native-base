import React from 'react'
import { Provider } from 'react-redux';
import { registerAnimation } from './assets/animations'

import store from './src/redux/storeApp'
import AppComponent from './src/AppComponent'

// Register Base
registerAnimation()

export default function App() {
    return <Provider store={store}>
        <AppComponent />
    </Provider>
}
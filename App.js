import React from 'react'
import { Provider } from 'react-redux';
import { registerAnimation } from './assets/animations'

import store from './src/data/reducer/store'
import AppComponent from './src/AppComponent'

registerAnimation()

export default function App() {
    return <Provider store={store}>
        <AppComponent />
    </Provider>
}
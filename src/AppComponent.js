import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo from "@react-native-community/netinfo"
import Routes from './routes'
import DeviceInfo from 'react-native-device-info'
import { AppComponentProvider } from './Contexts'
import navigator from './navigator'
import { Keyboard } from 'react-native'

const AppComponent = (props) => {

    const [networkStatus, setNetworkStatus] = useState(false)
    const [keyboardShown, setKeyboardShown] = useState(false)

    // Effect
    useEffect(() => {
        let timeout = null
        const netHandler = NetInfo.addEventListener(state => setNetworkStatus(state.isConnected))
        const keyboardListenerShow = Keyboard.addListener("keyboardDidShow", () => {
            if (timeout != null)
                clearTimeout(timeout)
            setKeyboardShown(true)
        })
        const keyboardListenerHide = Keyboard.addListener("keyboardDidHide", () => {
            timeout = setTimeout(() => setKeyboardShown(false), 500)
        })

        return () => {
            netHandler()
            keyboardListenerShow.remove()
            keyboardListenerHide.remove()
            clearTimeout(timeout)
        }
    }, [])

    return <AppComponentProvider value={{
        networkStatus: networkStatus,
        keyboardShown: keyboardShown,
        appVersion: DeviceInfo.getVersion(),
        appName: "Individual Task Report",
        navigator: navigator
    }}>
        <NavigationContainer>
            <Routes initialRoute="main" />
        </NavigationContainer>
    </AppComponentProvider>
}

export default AppComponent
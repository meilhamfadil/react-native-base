import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo from "@react-native-community/netinfo"
import Routes from './routes'
import DeviceInfo from 'react-native-device-info'
import { AppComponentProvider } from './Contexts'
import Globalfont from 'react-native-global-font'
import navigator from './navigator'
import { Keyboard } from 'react-native'

const AppComponent = (props) => {

    // App

    // Payload

    // Action

    // State & Ref
    const [networkStatus, setNetworkStatus] = useState(false)
    const [keyboardShown, setKeyboardShown] = useState(false)

    // Effect
    useEffect(() => {
        Globalfont.applyGlobal("SourceSansPro")

        let timeout = null
        const netHandler = NetInfo.addEventListener(state => setNetworkStatus(state.isConnected))
        const keyboardShown = Keyboard.addListener("keyboardDidShow", () => {
            if (timeout != null)
                clearTimeout(timeout)
            setKeyboardShown(true)
        })
        const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
            timeout = setTimeout(() => setKeyboardShown(false), 500)
        })

        return () => {
            netHandler()
            keyboardShown.remove()
            keyboardHide.remove()
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
            <Routes initialRoute="splash" />
        </NavigationContainer>
    </AppComponentProvider>
}

export default AppComponent
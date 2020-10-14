import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo from "@react-native-community/netinfo"
import Routes from './routes'
import DeviceInfo from 'react-native-device-info'
import { AppComponentProvider } from './Contexts'
import Globalfont from 'react-native-global-font'
import navigator from './navigator'

const AppComponent = (props) => {

    // App

    // Payload

    // Action

    // State & Ref
    const [networkStatus, setNetworkStatus] = useState(false)

    // Effect
    useEffect(() => {
        Globalfont.applyGlobal("SourceSansPro")
        const netHandler = NetInfo.addEventListener(state => {
            setNetworkStatus(state.isConnected)
        })

        return netHandler
    }, [])

    return <AppComponentProvider value={{
        networkStatus: networkStatus,
        appVersion: DeviceInfo.getVersion(),
        appName: "React Native Base",
        navigator: navigator
    }}>
        <NavigationContainer>
            <Routes initialRoute="splash" />
        </NavigationContainer>
    </AppComponentProvider>
}

export default AppComponent
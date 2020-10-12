import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo from "@react-native-community/netinfo"
import Routes from './routes'
import { connect } from 'react-redux'
import BaseActions from './reducer/BaseReducers'
import { AppComponentProvider } from './Contexts'

const AppComponent = (props) => {

    // App

    // Payload

    // Action

    // State & Ref
    const [phoneStatus, setPhoneStatus] = useState(false)

    // Effect
    useEffect(() => {
        const netHandler = NetInfo.addEventListener(state => {
            setPhoneStatus(state.isConnected)
        })

        return netHandler
    }, [])

    return <AppComponentProvider value={{
        networkStatus: phoneStatus,
        appName: "Fadil App"
    }}>
        <NavigationContainer>
            <Routes initialRoute="splash" />
        </NavigationContainer>
    </AppComponentProvider>
}

export default AppComponent
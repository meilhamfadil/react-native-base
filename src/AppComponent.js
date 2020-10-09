import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NetInfo from "@react-native-community/netinfo"
import Routes from './routes'
import { connect } from 'react-redux'
import BaseActions from './reducer/BaseReducers'

const initialRoute = "splash"

const AppComponent = (props) => {

    // App

    // Payload
    const { setPhoneConnection } = props

    useEffect(() => {
        const netHandler = NetInfo.addEventListener(state => {
            setPhoneConnection(state.isConnected)
        })

        return netHandler
    }, [])

    return <NavigationContainer>
        <Routes initialRoute={initialRoute} />
    </NavigationContainer>
}

const propsState = ({ }) => ({

})

const propsAction = (dispatch) => ({
    setPhoneConnection: (value) => dispatch(BaseActions.setPhoneConnection(value))
})

export default connect(propsState, propsAction)(AppComponent)
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes'

const initialRoute = "splash"

export default function AppComponent() {
    return <NavigationContainer>
        <Routes initialRoute={initialRoute} />
    </NavigationContainer>
}
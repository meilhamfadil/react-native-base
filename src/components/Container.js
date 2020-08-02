import React from 'react'
import { View } from 'react-native'

export const Container = ({ children, style = {} }) => {
    return <View style={{
        flex: 1,
        ...style
    }}>{children}</View>
}

export const Center = ({ children, style = {} }) => {
    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        ...style
    }}>{children}</View >
}
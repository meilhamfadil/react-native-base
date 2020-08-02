import React from 'react'
import colors from '../../assets/colors'
import styles from '../../assets/styles'

import { View, ScrollView, KeyboardAvoidingView, Text, ActivityIndicator } from 'react-native'
import { Container, Center } from './Container'

const Scaffhold = ({
    body,
    appbar = null,
    bottom = null,
    busy = false,
    bottomStyle = {}
}) => {

    return <View style={{ flex: 1 }}>
        <View>{appbar !== null && appbar}</View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {
                !busy
                    ? body
                    : <View style={styles.mainCenterContainer}>
                        <ActivityIndicator color={colors.dark} size="large" />
                        <Text style={{ textAlign: "center", marginTop: 8 }}>Please Wait</Text>
                    </View>
            }
        </ScrollView>
        <KeyboardAvoidingView>
            <View style={bottomStyle}>{(bottom !== null && !busy) && bottom}</View>
        </KeyboardAvoidingView>
    </View>
}

const list = ({
    body,
    appbar = null,
    bottom = null,
    requesting = false,
    isEmpty = false,
    emptyMessage = "Empty",
    emptyComponent = null,
    backgroundColor = colors.background,
    containerStyle = {},
    bottomStyle = {}
}) => {

    let render = body

    if (isEmpty)
        render = <View style={styles.mainCenterContainer}>
            {(emptyComponent == null) ? <Text>{emptyMessage}</Text> : emptyComponent}
        </View>

    if (requesting)
        render = <View style={styles.mainCenterContainer}>
            <ActivityIndicator color={colors.dark} size="large" />
            <Text style={{ textAlign: "center", marginTop: 8 }}>Please Wait</Text>
        </View>


    return <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <View>{appbar !== null && appbar}</View>
        <View style={{
            flex: 1,
            ...containerStyle
        }}>{render}</View>
        <KeyboardAvoidingView>
            <View style={bottomStyle}>{(bottom !== null) && bottom}</View>
        </KeyboardAvoidingView>
    </View>
}

export default Scaffhold
export const ScaffholdList = list
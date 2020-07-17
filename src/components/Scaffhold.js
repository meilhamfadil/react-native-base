import React from 'react'
import colors from '../../assets/colors'
import styles from '../../assets/styles'

import { View, ScrollView, KeyboardAvoidingView, Text, ActivityIndicator } from 'react-native'

const Scaffhold = ({ body, appbar = null, footer = null, busy = false }) => {
    return <View style={{ flex: 1, backgroundColor: colors.background }}>
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
            <View>{(footer !== null && !busy) && footer}</View>
        </KeyboardAvoidingView>
    </View>
}

export default Scaffhold
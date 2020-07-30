import React from 'react'
import colors from '../../assets/colors'
import styles from '../../assets/styles'

import { View, ScrollView, KeyboardAvoidingView, Text, ActivityIndicator } from 'react-native'

const Scaffhold = ({ body, appbar = null, bottom = null, busy = false }) => {
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
            <View>{(bottom !== null && !busy) && bottom}</View>
        </KeyboardAvoidingView>
    </View>
}

export default Scaffhold
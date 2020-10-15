import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import Analytics from 'appcenter-analytics'
import { useAppComponent, useTheme } from '../Contexts'
import Fill from '../components/Fill'
import Line from '../components/Line'

const MainScreen = (props) => {

    const { networkStatus } = useAppComponent()
    const { colors, styles } = useTheme()

    return <Scaffhold
        networkStatus={networkStatus}
        onRefresh={() => {
            console.log("Refresh HIT")
        }}
        body={
            <View style={{ flex: 1, padding: 12 }}>
                <Text style={{ ...styles.pageTitle }}>Hello</Text>

                <Line />

                <Fill space={8} />

                <Pressable
                    onPress={() => {
                        const time = new Date().getTime().toString()
                        console.log(`Something happened here. (${time})`)
                    }}
                    android_ripple={{ color: colors.primaryDark }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? colors.primaryDark : colors.primary,
                            paddingVertical: 4,
                            borderWidth: 1,
                            borderColor: colors.dark,
                            paddingHorizontal: 8,
                            borderRadius: 4
                        },
                        styles.wrapperCustom
                    ]}>
                    {({ pressed }) => (
                        <Text style={{ color: colors.white }}>
                            {pressed ? 'Pressed!' : 'Press Me'}
                        </Text>
                    )}
                </Pressable>

            </View>
        }
    />
}

const propsState = ({ base }) => {
    return {
    }
}

const propsAction = (dispatch) => {
    return {
    }
}

export default connect(propsState, propsAction)(MainScreen)

const screenStyles = StyleSheet.create({
})
import React from 'react'
import { StyleSheet, Text, View } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import { useAppComponent, useTheme } from '../Contexts'

const MainScreen = (props) => {

    const { networkStatus } = useAppComponent()
    const { colors } = useTheme()

    return <Scaffhold
        networkStatus={networkStatus}
        onRefresh={() => {
            console.log("Refresh HIT")
        }}
        body={
            <View style={{ flex: 1, padding: 12 }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold"
                }}>Hello</Text>

                <View style={{
                    height: 200,
                    backgroundColor: colors.primary
                }}>

                </View>
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

const styles = StyleSheet.create({
})
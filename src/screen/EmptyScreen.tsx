import React from 'react'
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const EmptyScreen = (props: {}) => {

    return <Scaffhold
        body={
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1
            }}>
                <Icon name="alert-circle-outline" size={80} />
                <Text style={{ marginTop: 8 }}>Halaman ini kosong.</Text>
            </View>
        }
    />
}

interface Props {

}

const propsState = (props: Props) => {
    return {
    }
}

const propsAction = (dispatch: CallableFunction) => {
    return {
    }
}

export default connect(propsState, propsAction)(EmptyScreen)

const styles = StyleSheet.create({
})
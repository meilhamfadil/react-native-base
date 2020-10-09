import React from 'react'
import { StyleSheet, Text } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import MovieAction from '../reducer/movieReducer'
import CredentialAction from '../reducer/credentialReducer'
import { Center } from '../components/Container'

const MainScreen = (props) => {

    const { isPhoneConnected } = props

    return <Scaffhold
        connection={isPhoneConnected}
        properties={{
            connection: {
                label: "Perangkat tidak terhubung."
            }
        }}
        body={
            <Center>
                <Text>Hai</Text>
            </Center>
        }
    />
}

const propsState = ({ base }) => {
    return {
        isPhoneConnected: base.isPhoneConnected,
    }
}

const propsAction = (dispatch) => {
    return {
        requestMovies: () => dispatch(MovieAction.moviesRequest()),
        logout: () => dispatch(CredentialAction.storeToken(null))
    }
}

export default connect(propsState, propsAction)(MainScreen)

const styles = StyleSheet.create({
    connectionStyle: {
        fontSize: 20
    }
})
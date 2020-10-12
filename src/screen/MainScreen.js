import React from 'react'
import { StyleSheet, Text } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import MovieAction from '../reducer/movieReducer'
import CredentialAction from '../reducer/credentialReducer'
import { Center } from '../components/Container'
import { useAppComponent } from '../Contexts'

const MainScreen = (props) => {

    const { networkStatus, appName } = useAppComponent()

    return <Scaffhold
        networkStatus={networkStatus}
        isPageScroll={false}
        body={
            <Center>
                <Text>Hai</Text>
            </Center>
        }
    />
}

const propsState = ({ base }) => {
    return {
    }
}

const propsAction = (dispatch) => {
    return {
        requestMovies: () => dispatch(MovieAction.moviesRequest()),
        logout: () => dispatch(CredentialAction.storeToken(null)),
    }
}

export default connect(propsState, propsAction)(MainScreen)

const styles = StyleSheet.create({
    connectionStyle: {
        fontSize: 20
    }
})
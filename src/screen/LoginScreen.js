import React from 'react'
import { connect } from 'react-redux'
import Scaffhold from '../components/Scaffhold'

import { Button } from 'react-native-paper'
import { Center } from '../components/Container'

import CredentialAction from '../reducer/credentialReducer'
import { useFocusEffect } from '@react-navigation/native'

const LoginScreen = (props) => {
    const { navigation } = props
    const { token, stored } = props

    useFocusEffect(() => {
        if (stored && token != null)
            navigation.replace("main")
    }, [stored])

    return <Scaffhold
        body={
            <Center>
                <Button
                    mode="contained"
                    onPress={() => { props.generateToken(new Date().getTime().toString()) }}
                    style={{ marginTop: 12 }}>Start Session</Button>
            </Center>
        }
    />
}

const mapStateToProps = ({ credential }) => {
    return {
        token: credential.token,
        stored: credential.stored
    }
}

const mapActionToProps = (dispatch) => {
    return {
        generateToken: (token) => dispatch(CredentialAction.storeToken(token))
    }
}

export default connect(mapStateToProps, mapActionToProps)(LoginScreen)
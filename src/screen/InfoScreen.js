import React, { useEffect } from 'react'
import Scaffhold from '../components/Scaffhold'
import { Center } from '../components/Container'
import { connect } from 'react-redux'
import { Button, Text } from 'react-native'
import CredentialAction from '../reducer/credentialReducer'
import { useFocusEffect } from '@react-navigation/native'
import colors from '../../assets/colors'

const InfoScreen = (props) => {
    const { token, navigation } = props

    useEffect(() => {
        if (token == null)
            navigation.replace("login")
    }, [token])

    return <Scaffhold
        body={
            <Center style={{
                backgroundColor: colors.background
            }}>
                <Text>Current Login ID : {props.token}</Text>
                <Button
                    title="End Session"
                    onPress={props.logout}
                    style={{ marginTop: 12 }}
                />
            </Center>
        }
    />
}

const mapStateToProps = ({ credential }) => {
    return {
        token: credential.token
    }
}

const mapActionToProps = (dispatch) => {
    return {
        logout: () => dispatch(CredentialAction.storeToken(null))
    }
}

export default connect(mapStateToProps, mapActionToProps)(InfoScreen)

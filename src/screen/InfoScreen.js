import React, { useEffect } from 'react'
import Scaffhold from '../components/Scaffhold'
import { Center } from '../components/Container'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Button, useTheme } from 'react-native-paper'
import CredentialAction from '../reducer/credentialReducer'
import { useFocusEffect } from '@react-navigation/native'

const InfoScreen = (props) => {
    const { token, navigation } = props
    const { colors } = useTheme()

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
                    mode="contained"
                    onPress={props.logout}
                    style={{ marginTop: 12 }}
                >End Session</Button>
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

import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Scaffhold from '../components/Scaffhold'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DeviceInfo from 'react-native-device-info'
import * as Animatable from 'react-native-animatable'
import FillSeparator from '../components/FillSeparator'
import { Container } from '../components/Container'
import Padding from '../components/Padding'
import { connect } from 'react-redux'
import CredentialAction from '../reducer/credentialReducer'
import colors from '../../assets/colors'

const SplashScreen = (props) => {
    const { navigation } = props
    const { checkCurrentToken } = props
    const { isChecked, token } = props

    useFocusEffect(() => {
        if (isChecked)
            navigation.replace((token == null) ? "login" : "main")
    }, [isChecked])

    return <Scaffhold
        body={
            <Padding all={24} flex={1}>
                <Container style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <FillSeparator />

                    <Animatable.View
                        duration={1000}
                        animation="logoAnimation"
                        onAnimationEnd={checkCurrentToken}>
                        <Icon name="memory" size={100} />
                    </Animatable.View>

                    <Animatable.Text
                        duration={400}
                        animation="blink"
                        style={{
                            marginTop: 8,
                            fontSize: 20,
                            color: colors.primary,
                            fontWeight: "bold"
                        }}> Base React App </Animatable.Text>

                    <FillSeparator />

                    <Text style={{ marginTop: 8, fontSize: 16 }}>{DeviceInfo.getVersion()}</Text>
                </Container >
            </Padding>
        }
    />
}

const mapStateToProps = ({ credential }) => {
    return {
        token: credential.token,
        isChecked: credential.check
    }
}

const mapActionToProps = (dispatch) => {
    return {
        checkCurrentToken: () => dispatch(CredentialAction.getSavedToken())
    }
}

export default connect(mapStateToProps, mapActionToProps)(SplashScreen)
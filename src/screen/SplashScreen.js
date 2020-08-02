import React from 'react'
import Scaffhold from '../components/Scaffhold'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DeviceInfo from 'react-native-device-info'
import * as Animatable from 'react-native-animatable'
import FillSeparator from '../components/FillSeparator'
import { Center, Container } from '../components/Container'
import { useTheme } from 'react-native-paper'
import Padding from '../components/Padding'

const SplashScreen = (props) => {
    const { navigation } = props
    const { colors } = useTheme()

    doCheckCredential = () => {
        setTimeout(() => navigation.replace("main"), 500);
    }

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
                        onAnimationEnd={doCheckCredential}>
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

export default SplashScreen
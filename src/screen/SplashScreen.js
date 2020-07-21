import React from 'react'
import BaseScreen from '../core/BaseScreen'
import Scaffhold from '../components/Scaffhold'
import { View, Text, Animated, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DeviceInfo from 'react-native-device-info'
import * as Animatable from 'react-native-animatable'
import FillSeparator from '../components/FillSeparator'

class SplashScreen extends BaseScreen {

    doCheckCredential = async () => {
        setTimeout(() => {
            this.props.navigation.navigate("main")
        }, 500);
    }

    render() {
        return <Scaffhold
            body={
                <View style={{
                    ...this.styles.mainCenterContainer,
                    padding: 50
                }}>
                    <FillSeparator />

                    <Animatable.View
                        duration={600}
                        animation={this.animations.logoAnimation}
                        onAnimationEnd={async () => {
                            this.doCheckCredential()
                        }}>
                        <Icon name="memory" size={100} />
                    </Animatable.View>

                    <Animatable.Text
                        duration={400}
                        animation={this.animations.blink}
                        style={{
                            marginTop: 8,
                            fontSize: 20,
                            color: this.theme.primary,
                            fontWeight: "bold"
                        }}> Base React App </Animatable.Text>

                    <FillSeparator />

                    <Text style={{ marginTop: 8, fontSize: 16 }}>
                        {DeviceInfo.getVersion()}
                    </Text>
                </ View>
            }
        />
    }
}

export default SplashScreen
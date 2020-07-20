import React from 'react'
import { ActivityIndicator, ProgressBar } from "react-native-paper"
import BaseScreen from '../core/BaseScreen'
import Scaffhold from '../components/Scaffhold'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class SplashScreen extends BaseScreen {

    render() {
        return <Scaffhold
            body={
                <View style={this.styles.mainCenterContainer}>
                    <Icon name="memory" size={100} />
                    <Text style={{
                        marginTop: 8,
                        color: this.theme.primary,
                        fontWeight: "bold"
                    }}>
                        Base React Native
                    </Text>
                </View>
            }
        />
    }
}

export default SplashScreen
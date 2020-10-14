import React from 'react'
import Scaffhold from '../components/Scaffhold'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable'
import { useAppComponent, useNavigator, useTheme } from '../Contexts'
import Fill from '../components/Fill'

const SplashScreen = (props) => {

    const { navigation } = props
    const { appVersion, appName, navigator } = useAppComponent()
    const { colors } = useTheme()
    const { goToMain } = useNavigator()

    return <Scaffhold
        body={
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                padding: 16
            }}>

                <Fill />

                <Animatable.View
                    duration={800}
                    animation="logoAnimation"
                    onAnimationEnd={() => {
                        navigation.dispatch(navigator.goToMain)
                    }}>
                    <Icon name="memory" size={100} color={colors.primary} />
                </Animatable.View>

                <Animatable.Text
                    duration={400}
                    animation="blink"
                    style={{
                        ...styles.appName,
                        color: colors.primary
                    }}>
                    {appName}
                </Animatable.Text>

                <Fill />

                <Text style={styles.versionCode}>Ver {appVersion}</Text>

            </View>
        }
    />
}

export default SplashScreen

const styles = StyleSheet.create({
    appName: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    versionCode: {
        marginBottom: 8,
        fontSize: 16
    }
})
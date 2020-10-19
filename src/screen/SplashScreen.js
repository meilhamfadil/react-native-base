import React from 'react'
import Scaffhold from '../components/Scaffhold'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable'
import { useAppComponent, useNavigator, useTheme } from '../Contexts'
import Fill from '../components/Fill'
import colors from '../../assets/colors'

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
                backgroundColor: colors.primary,
                flex: 1,
                padding: 16
            }}>

                <Fill />

                <Animatable.View
                    duration={800}
                    animation="logoAnimation"
                    onAnimationEnd={() => setTimeout(() => navigation.dispatch(navigator.goToMain), 1000)}>
                    <Icon name="checkbox-marked-outline" size={100} color={colors.white} />
                </Animatable.View>

                <Animatable.Text
                    duration={400}
                    animation="blink"
                    style={{
                        ...styles.appName,
                        color: colors.white
                    }}>
                    {appName}
                </Animatable.Text>

                <Fill />

                <Text style={styles.versionCode}>Ver {appVersion}</Text>

            </View >
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
        color: colors.white,
        marginBottom: 8,
        fontSize: 16
    }
})
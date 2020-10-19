import React, { createRef, useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAppComponent, useTheme } from '../Contexts'
import Fill from '../components/Fill'
import Line from '../components/Line'

const MainScreen = (props) => {

    // Context
    const { networkStatus, appName, keyboardShown } = useAppComponent()
    const { colors, styles, font } = useTheme()

    // Reducer

    // Const, States, & Refs
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let formRef = {
        username: null,
        password: null
    }

    // Effects

    return <Scaffhold
        networkStatus={networkStatus}
        isPageCanRefresh={false}
        body={
            <View style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: colors.primary
            }}>

                {
                    !keyboardShown && <View style={{ flex: 1 }}>

                        <Fill />

                        <Icon
                            name="checkbox-marked-outline"
                            size={50}
                            style={{ alignSelf: "center" }}
                            color={colors.white} />

                        <Text style={{
                            textAlign: "center",
                            fontSize: 18,
                            color: colors.white
                        }}>{appName}</Text>

                        <Fill />

                    </View>
                }

                <View style={{
                    flex: keyboardShown ? 1 : 0,
                    backgroundColor: colors.white,
                    padding: 16
                }}>

                    <Text style={{
                        ...styles.pageTitle
                    }}>
                        Login
                    </Text>

                    <Line margin={8} />

                    <Text style={{
                        marginBottom: 4,
                        fontWeight: "bold"
                    }}>Username</Text>

                    <TextInput
                        placeholder="Username"
                        returnKeyType="next"
                        ref={(input) => formRef.username = input}
                        onSubmitEditing={() => formRef.password.focus()}
                        style={{
                            paddingVertical: 4,
                            paddingHorizontal: 12,
                            borderColor: colors.dark,
                            borderRadius: 4,
                            borderWidth: 1,
                        }}
                    />

                    <Text style={{
                        marginBottom: 4,
                        marginTop: 8,
                        fontWeight: "bold"
                    }}>Password</Text>

                    <TextInput
                        placeholder="Password"
                        returnKeyType="done"
                        ref={(input) => formRef.password = input}
                        secureTextEntry={true}
                        style={{
                            paddingVertical: 4,
                            paddingHorizontal: 12,
                            borderColor: colors.dark,
                            borderRadius: 4,
                            borderWidth: 1,
                        }}
                    />

                    <Pressable
                        onPress={() => {
                            const time = new Date().getTime().toString()
                            console.log(`Something happened here. (${time})`)
                        }}
                        android_ripple={{ color: colors.dark }}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? colors.dark : colors.primary,
                                paddingVertical: 8,
                                borderWidth: 1,
                                borderColor: colors.primary,
                                paddingHorizontal: 8,
                                borderRadius: 4,
                                marginTop: 16
                            }
                        ]}>
                        {({ pressed }) => (
                            <Text style={{
                                color: colors.white,
                                textAlign: "center",
                                fontWeight: "700",
                                fontFamily: font.light,
                                letterSpacing: 3,
                                textTransform: "uppercase"
                            }}>Login</Text>
                        )}
                    </Pressable>

                </View>

            </View >
        }
    />
}

const propsState = ({ base }) => {
    return {
    }
}

const propsAction = (dispatch) => {
    return {
    }
}

export default connect(propsState, propsAction)(MainScreen)

const screenStyles = StyleSheet.create({
})
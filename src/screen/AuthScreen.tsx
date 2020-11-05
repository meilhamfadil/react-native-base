import React, { createRef, useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAppComponent, useTheme } from '../Contexts'
import Fill from '../components/Fill'
import Line from '../components/Line'
import FlatButton from '../components/FlatButton'

interface Props {

}

const AuthScreen = (props: Props) => {

    // Context
    const { networkStatus, appName, keyboardShown } = useAppComponent()
    const { colors, styles, font } = useTheme()

    // Reducer

    // Const, States, & Refs
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [requesting, setRequesting] = useState(false)
    const [error, setError] = useState({})

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

                        <Text style={{
                            textAlign: "center",
                            color: colors.white,
                            fontFamily: font.light,
                            marginTop: 8
                        }}>Manage your task here.</Text>

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

                    <View>
                        <Text style={styles.inputLabel}>Username</Text>

                        <TextInput
                            placeholder="Username"
                            returnKeyType="next"
                            value={username}
                            onChangeText={setUsername}
                            // ref={(input) => validator.current.register("username", input)}
                            // onSubmitEditing={() => validator.current.form.password.focus()}
                            // onBlur={() => validator.current.validate(username == "", "username")}
                            style={{
                                ...styles.inputField,
                                // ...validator.current.isError("username")
                            }}
                        />

                        <Fill space={8} />

                        <Text style={styles.inputLabel}>Password</Text>

                        <TextInput
                            placeholder="Password"
                            returnKeyType="done"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            // ref={(input) => validator.current.register("password", input)}
                            style={{
                                ...styles.inputField,
                                // ...validator.current.isError("password")
                            }}
                        />

                        <FlatButton
                            requesting={requesting}
                            onPress={() => {
                                // validator.current.blur()
                                // if (validator.current.isValid()) {
                                //     setRequesting(true)
                                //     setTimeout(() => {
                                //         setRequesting(false)
                                //     }, 1000)
                                // }
                            }} />

                    </View>

                </View>

            </View >
        }
    />
}

interface Props {

}

const propsState = (props: Props) => {
    return {
    }
}

const propsAction = (dispatch: CallableFunction) => {
    return {

    }
}

export default connect(propsState, propsAction)(AuthScreen)

const screenStyles = StyleSheet.create({
})
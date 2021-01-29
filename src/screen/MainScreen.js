import React, { useEffect } from 'react'
import { Text, View } from "react-native"
import Scaffhold from '../components/Scaffhold'
import { connect } from 'react-redux'
import { loadUsers } from '../data/action/ExampleAction'

const MainScreen = (props) => {

    const { users, dispatch } = props

    useEffect(() => {
        async function getData() {
            dispatch(loadUsers("1234"))
        }

        getData()
    }, [])

    return <Scaffhold
        isPageCanRefresh={false}
        body={
            <View >
                <Text>Ilham Fadil</Text>
            </View>
        }
    />
}

const propsState = ({ example }) => ({
    users: example.users
})

export default connect(propsState)(MainScreen)
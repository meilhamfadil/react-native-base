import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Scaffhold = ({
    connection = true,
    properties = {
        connection: {
            label: "Disconnect",
            style: {},
            icon: "cloud-off-outline",
            iconSize: 50
        }
    },
    body,
    theme = {
        primary: "#FFFFFF",
        text: "#DDD"
    }
}) => {
    let render = body

    console.log(properties)

    if (!connection)
        render = <View style={styles.connection}>
            <Icon name={properties.connection.icon} size={properties.connection.iconSize} />
            <Text style={{ marginTop: 4, ...properties.connection.style }}>
                {properties.connection.label}
            </Text>
        </View>

    return <View style={{ flex: 1 }}>
        {render}
    </View>
}

export default Scaffhold

const styles = StyleSheet.create({
    connection: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})
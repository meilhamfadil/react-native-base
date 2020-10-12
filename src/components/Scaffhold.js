import React from 'react'
import { View, Text, StyleSheet, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Scaffhold = ({
    networkStatus = true,
    isPageScroll = true,
    isRefreshing = false,
    onRefresh = () => { },
    properties = {
        network: {
            label: "Perangkat tidak terkoneksi ke internet.",
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

    if (!networkStatus)
        render = <View style={styles.network}>
            <Icon name={properties.network.icon} size={properties.network.iconSize} />
            <Text style={{ marginTop: 4, ...properties.network.style }}>
                {properties.network.label}
            </Text>
        </View>

    if (isPageScroll)
        return <ScrollView
            style={{ flex: 1, backgroundColor: theme.primary }}
            contentContainerStyle={{ flexGrow: 1 }}
            refreshControl={<RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefresh}
            />}
        >
            {render}
        </ScrollView>

    return <View style={{ flex: 1, backgroundColor: theme.primary }}>
        {render}
    </View>
}

export default Scaffhold

const styles = StyleSheet.create({
    network: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})
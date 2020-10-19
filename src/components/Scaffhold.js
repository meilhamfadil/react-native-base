import React from 'react'
import { View, Text, StyleSheet, RefreshControl, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '../Contexts'

const Scaffhold = ({
    networkStatus = true,
    networkProperties = {
        label: "Perangkat tidak terkoneksi ke internet.",
        style: {},
        icon: "cloud-off-outline",
        iconSize: 50
    },
    isPageCanScroll = true,
    isPageCanRefresh = true,
    isRefreshing = false,
    onRefresh = () => { },
    body,
    theme = useTheme()
}) => {
    let render = body

    if (!networkStatus)
        render = <View style={styles.network}>
            <Icon name={networkProperties.icon} size={networkProperties.iconSize} color={theme.colors.text} />
            <Text style={{
                marginTop: 4,
                color: theme.colors.text,
                ...networkProperties.style,
            }}>
                {networkProperties.label}
            </Text>
        </View>

    if (isPageCanScroll)
        return <ScrollView
            style={{ flex: 1, backgroundColor: theme.colors.background }}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            refreshControl={isPageCanRefresh && <RefreshControl
                tintColor={theme.colors.text}
                refreshing={isRefreshing}
                onRefresh={onRefresh}
            />}
        >
            {render}
        </ScrollView>

    return <SafeAreaView>
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            {render}
        </View>
    </SafeAreaView>
}

export default Scaffhold

const styles = StyleSheet.create({
    network: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})
import React from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { useTheme } from '../Contexts'

const FlatButton = ({
    label = "",
    requesting = false,
    onPress = () => { }
}) => {

    const { colors, font } = useTheme()

    return <Pressable
        onPress={onPress}
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
            <View style={{
                flexDirection: "row",
                justifyContent: "center"
            }}>
                {requesting && <ActivityIndicator color={colors.white} />}
                <Text style={{
                    marginLeft: 8,
                    color: colors.white,
                    textAlign: "center",
                    fontWeight: "700",
                    fontFamily: font.light,
                    letterSpacing: 3,
                    textTransform: "uppercase"
                }}>Login</Text>
            </View>
        )}
    </Pressable>
}

export default FlatButton
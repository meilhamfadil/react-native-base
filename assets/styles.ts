import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    pageTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    separator: {
        height: 1,
        backgroundColor: colors.dark
    },
    inputField: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderColor: colors.dark,
        borderRadius: 4,
        borderWidth: 1,
    },
    inputLabel: {
        marginBottom: 4,
        fontWeight: "bold"
    }
})
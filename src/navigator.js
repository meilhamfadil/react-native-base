import { CommonActions, StackActions, useNavigation } from '@react-navigation/core'

export default {
    goToMain: StackActions.replace("main"),
    resetToMain: CommonActions.reset({
        index: 1,
        routes: [{ name: 'main' }],
    })
}
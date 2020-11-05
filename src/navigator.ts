import { CommonActions, StackActions } from '@react-navigation/core'

export default {
    goToAuth: StackActions.replace("auth"),
    resetToMain: CommonActions.reset({
        index: 1,
        routes: [{ name: 'main' }],
    })
}
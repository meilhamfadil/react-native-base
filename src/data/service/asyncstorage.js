import AsyncStorage from '@react-native-community/async-storage';

const KEY = {
    CREDENTIAL: "@@__CREDENTIAL"
}

const createStorage = () => {

    const storeToken = (value) => AsyncStorage.setItem(KEY.CREDENTIAL, value)

    const removeToken = () => AsyncStorage.removeItem(KEY.CREDENTIAL)

    const retriveToken = () => AsyncStorage.getItem(KEY.CREDENTIAL)

    return {
        storeToken,
        retriveToken,
        removeToken
    }
}

export default {
    createStorage
}
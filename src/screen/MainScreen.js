import React, { useEffect } from 'react'

import { View, Text, Image, RefreshControl, FlatList } from "react-native"
import { ScaffholdList } from '../components/Scaffhold'
import Padding from '../components/Padding'
import { connect } from 'react-redux'

import MovieAction from '../reducer/movieReducer'
import CredentialAction from '../reducer/credentialReducer'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/native'
import colors from '../../assets/colors'

const MainScreen = (props) => {
    const { navigation } = props
    const { movies, token, error, requesting } = props
    const { requestMovies, logout } = props

    useEffect(() => {
        console.log("HEHE")
        requestMovies()
    }, [])

    useFocusEffect(() => {
        if (token == null)
            navigation.replace("login")
    }, [token])

    const onPressItem = (item) => {
        navigation.navigate("detail", item)
    }

    return <ScaffholdList
        body={
            <FlatList
                data={movies}
                refreshControl={<RefreshControl
                    refreshing={requesting}
                    onRefresh={() => requestMovies()} />}
                contentContainerStyle={{ padding: 12 }}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }}></View>}
                renderItem={({ item, index }) => {
                    return <View>
                        <Text>{item.title}</Text>
                    </View>
                }} />
        }
        isEmpty={movies.length == 0}
        emptyComponent={
            <View style={{ alignItems: "center" }}>
                <Icon name="error" size={50} color={colors.placeholder}></Icon>
                {
                    (error != null)
                        ? <Text style={{ color: colors.placeholder }}>{error}</Text>
                        : <Text style={{ color: colors.placeholder }}>Data Kosong</Text>
                }
            </View >
        }
    />
}

const mapStateToProps = ({ credential, base, movie }) => {
    return {
        token: credential.token,
        busy: base.busy,
        requesting: base.requesting,
        movies: movie.list,
        error: movie.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestMovies: () => dispatch(MovieAction.moviesRequest()),
        logout: () => dispatch(CredentialAction.storeToken(null))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
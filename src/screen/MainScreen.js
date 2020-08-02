import React, { useEffect } from 'react'

import { Card, useTheme, Paragraph, Appbar, Subheading, Title, Button } from 'react-native-paper'
import { View, Text, Image } from "react-native"
import { ScaffholdList } from '../components/Scaffhold'
import Padding from '../components/Padding'
import { connect } from 'react-redux'

import MovieAction from '../reducer/movieReducer'
import CredentialAction from '../reducer/credentialReducer'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/native'

const MainScreen = (props) => {
    const { navigation } = props
    const { movies, token } = props
    const { requestMovies, logout } = props
    const { colors } = useTheme()

    useEffect(() => {
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
        appbar={
            <Appbar style={{
                backgroundColor: colors.background,
                elevation: 0
            }}>
                <Appbar.Content title="Recomended" subtitle={"Current Login : " + token} titleStyle={{ color: colors.primary }} />
                <Appbar.Action icon="logout" onPress={logout} />
            </Appbar>
        }
        body={
            <Padding horizontal={12}>
                <FlatList
                    data={[...movies, ...movies]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <Card style={{ marginBottom: 12 }}>
                            <Card.Cover source={{ uri: item.poster }} />
                            <Card.Title title={item.title} />
                            <Card.Content>
                                <Paragraph>{item.synopsis}</Paragraph>
                            </Card.Content>
                            <Card.Actions style={{ justifyContent: "flex-end" }}>
                                <Button onPress={() => onPressItem(item)}>Read More</Button>
                            </Card.Actions>
                        </Card>
                    }} />
            </Padding>
        }
        isEmpty={movies.length == 0}
        emptyComponent={
            <View style={{ alignItems: "center" }}>
                <Icon name="error" size={50} color={colors.placeholder}></Icon>
                <Text style={{ color: colors.placeholder }}>Data Kosong</Text>
            </View>
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
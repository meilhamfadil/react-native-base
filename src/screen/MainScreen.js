import React, { useEffect } from 'react'

import { Card, useTheme, Paragraph, Appbar, Subheading, Title, Button } from 'react-native-paper'
import { View, Text, Image } from "react-native"
import { ScaffholdList } from '../components/Scaffhold'
import Padding from '../components/Padding'
import { connect } from 'react-redux'

import MovieAction from '../reducer/movieReducer'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MainScreen = (props) => {
    const { navigation } = props
    const { movies } = props
    const { requestMovies, clearMovies } = props
    const { colors } = useTheme()

    useEffect(() => {
        requestMovies()
    }, [])

    const onPressItem = (item) => {
        navigation.navigate("detail", item)
    }

    return <ScaffholdList
        appbar={
            <Appbar style={{
                backgroundColor: colors.background,
                elevation: 0
            }}>
                <Appbar.Content title="Recomended" titleStyle={{ color: colors.primary }} />
                <Appbar.Action icon="dots-horizontal" onPress={() => { }} />
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

const mapStateToProps = ({ base, movie }) => {
    return {
        busy: base.busy,
        requesting: base.requesting,
        movies: movie.list,
        error: movie.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestMovies: () => dispatch(MovieAction.moviesRequest()),
        clearMovies: () => dispatch(MovieAction.moviesSuccess([]))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
import React from 'react'

import { Button } from 'react-native-paper'
import { View, Text } from "react-native"
import Scaffhold from '../components/Scaffhold'
import Padding from '../components/Padding'
import { connect } from 'react-redux'

import MovieAction from '../reducer/movieReducer'
import CenteredContainer from '../components/CenteredContainer'

const MainScreen = (props) => {
    const { movies, error } = props
    const { busy, requesting } = props
    const { requestMovies, isMoviesFetching } = props

    const onPressHandler = () => {
        console.log("hehe")
        requestMovies()
    }

    return <Scaffhold
        body={
            <CenteredContainer>
                <Text style={{ textAlign: "center" }}>
                    Jumlah List Ada : {movies.length}
                </Text>
                {
                    error != null &&
                    <Text style={{ textAlign: "center" }}>{error}</Text>
                }
            </CenteredContainer>
        }
        bottom={
            <Padding all={12}>
                <Button
                    loading={isMoviesFetching || requesting}
                    disabled={requesting || busy}
                    mode="contained"
                    onPress={onPressHandler}> Load Image </Button>
            </Padding>
        }
    />
}

const mapStateToProps = ({ base, movie }) => {
    return {
        busy: base.busy,
        requesting: base.requesting,
        movies: movie.list,
        isMoviesFetching: movie.fetching,
        error: movie.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestMovies: () => dispatch(MovieAction.moviesRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
import React from 'react'

import { Button } from 'react-native-paper'
import { View, Text } from "react-native"
import BaseScreen from '../core/BaseScreen'
import Scaffhold from '../components/Scaffhold'
import Padding from '../components/Padding'
import { connect } from 'react-redux'

import MoviesAction from '../action/moviesAction'

class MainScreen extends BaseScreen {

    componentDidMount() {
        this.setBusy(true)
        setTimeout(() => { this.setBusy(false) }, 3000);
    }

    render = () => <Scaffhold
        busy={this.state.isBusy}
        body={
            <View style={this.styles.mainCenterContainer}>
                <Text style={{ textAlign: "center" }}>Jumlah List Ada : {this.props.employee.length}</Text>
                {
                    this.props.error != null &&
                    <Text style={{ textAlign: "center" }}>{this.props.error}</Text>
                }

            </View>
        }
        bottom={
            <Padding all={12}>
                <Button
                    loading={this.state.isRequesting}
                    disabled={this.state.isRequesting || this.state.isBusy}
                    onPress={async () => {
                        this.setRequesting(true)
                        const list = await this.repository.getMovie()
                        if (list.code == 0)
                            this.props.addMovies(list.data)
                        else
                            this.props.doError(list.message)
                        this.setRequesting(false)
                    }}
                    mode="contained">Load Image</Button>
            </Padding>
        }
    />
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee.list,
        error: state.employee.error
    }
}

const mapActionToProps = (dispatch) => {
    return {
        addMovies: (data) => dispatch(MoviesAction.moviesSuccess(data)),
        doError: (errorMessage) => dispatch(MoviesAction.moviesFailure(errorMessage))
    }
}

export default connect(mapStateToProps, mapActionToProps)(MainScreen)
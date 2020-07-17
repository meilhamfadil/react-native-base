import React from 'react'

import { Button, Appbar } from 'react-native-paper'
import { View, Text } from "react-native"
import BaseScreen from '../core/BaseScreen'
import Scaffhold from '../components/Scaffhold'
import Padding from '../components/Padding'

class MainScreen extends BaseScreen {

    componentDidMount() {
        this.setBusy(true)
        setTimeout(() => { this.setBusy(false) }, 3000);
    }

    render() {
        return <Scaffhold
            busy={this.state.isBusy}
            appbar={
                <Appbar.Header>
                    <Appbar.Content title="Base Apps" />
                </Appbar.Header>
            }
            body={
                <View style={this.styles.mainCenterContainer}>
                    <Text style={{ textAlign: "center" }}>Content Loaded</Text>
                </View>
            }
            footer={
                <Padding all={12}>
                    <Button
                        loading={this.state.isRequesting}
                        disabled={this.state.isRequesting || this.state.isBusy}
                        color={this.theme.primary}
                        onPress={async () => {
                            this.setRequesting(true)
                            setTimeout(() => {
                                this.setRequesting(false)
                            }, 1000);
                        }}
                        mode="contained">Click Me</Button>
                </Padding>
            }
        />
    }
}

export default MainScreen
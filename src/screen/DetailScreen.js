import React from 'react'

import { connect } from "react-redux"
import { Container } from "../components/Container"
import Scaffhold from "../components/Scaffhold"
import Padding from "../components/Padding"
import { Text, Image } from 'react-native'
import { Title, Paragraph, Subheading, useTheme, Appbar } from 'react-native-paper'

const DetailScreen = (props) => {
    const { navigation } = props
    const { title, poster, synopsis, year } = props.route.params
    const { colors } = useTheme()

    return <Scaffhold
        appbar={
            <Appbar style={{ backgroundColor: colors.background, }}>
                <Appbar.BackAction style={{ marginRight: 0 }} onPress={() => navigation.goBack()} />
                <Appbar.Content title={title} titleStyle={{ marginLeft: 0, color: colors.text }} />
            </Appbar>
        }
        body={
            <Container style={{ backgroundColor: colors.background }}>
                <Image source={{ uri: poster }} style={{
                    width: "100%",
                    aspectRatio: 4 / 2
                }} />
                <Padding all={12}>
                    <Title style={{ color: colors.primary }}>{title}</Title>
                    <Subheading style={{ color: colors.text }}>{year}</Subheading>
                    <Paragraph style={{
                        textAlign: "justify"
                    }}>{synopsis}</Paragraph>
                </Padding>
            </Container>
        }
    />
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapActionToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapActionToProps)(DetailScreen)
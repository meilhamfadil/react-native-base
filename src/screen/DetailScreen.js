import React from 'react'
import { connect } from "react-redux"
import { Container } from "../components/Container"
import Scaffhold from "../components/Scaffhold"
import Padding from "../components/Padding"
import { Text, Image } from 'react-native'
import colors from '../../assets/colors'

const DetailScreen = (props) => {
    const { navigation } = props
    const { title, poster, synopsis, year } = props.route.params

    return <Scaffhold
        body={
            <Container style={{ backgroundColor: colors.background }}>
                <Image source={{ uri: poster }} style={{
                    width: "100%",
                    aspectRatio: 4 / 2
                }} />
                <Padding all={12}>
                    <Text style={{ color: colors.primary }}>{title}</Text>
                    <Text style={{ color: colors.text }}>{year}</Text>
                    <Text style={{
                        textAlign: "justify"
                    }}>{synopsis}</Text>
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
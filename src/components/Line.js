import React from 'react'
import { View } from 'react-native'
import colors from '../../assets/colors'

const Line = ({ space = 2, mode = 'horizontal' || 'vertical', color = colors.dark }) => mode == 'horizontal'
    ? <View style={{ backgroundColor: color, height: space, width: "100%" }} />
    : <View style={{ backgroundColor: color, width: space, height: "100%" }} />

export default Line
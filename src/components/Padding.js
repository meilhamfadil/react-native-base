import React from 'react'
import { View } from 'react-native'
import colors from '../../assets/colors'

const Padding = ({
    all = 0,
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    horizontal = 0,
    vertical = 0,
    children
}) => <View style={{
    padding: all,
    paddingTop: top == 0 ? null : top,
    paddingBottom: bottom == 0 ? null : bottom,
    paddingLeft: left == 0 ? null : left,
    paddingRight: right == 0 ? null : right,
    paddingVertical: vertical == 0 ? null : vertical,
    paddingHorizontal: horizontal == 0 ? null : horizontal
}}>{children}</View>

export default Padding
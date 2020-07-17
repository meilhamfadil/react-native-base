import React from 'react'
import { View } from 'react-native'

const Padding = ({
    children,
    all = 0,
    horizontal = 0,
    vertical = 0,
    left = 0,
    right = 0,
    top = 0,
    bottom = 0,
    color = null
}) => {
    const style = {}
    if (all != 0) style.padding = all
    if (top != 0) style.paddingTop = top
    if (bottom != 0) style.paddingBottom = bottom
    if (left != 0) style.paddingLeft = left
    if (right != 0) style.paddingRight = right
    if (vertical != 0) style.paddingVertical = vertical
    if (horizontal != 0) style.paddingHorizontal = horizontal
    if (color !== null) style.backgroundColor = color
    return <View style={style}>{children}</View>
}

export default Padding
import React from 'react'
import { View } from 'react-native'

interface Props {
    all: number
    top: number
    bottom: number
    left: number
    right: number
    horizontal: number
    vertical: number
    children: object
}

const Padding = ({ all, top, bottom, left, right, horizontal, vertical, children }: Props) => <View style={{
    padding: all,
    paddingTop: (top == undefined ? undefined : top),
    paddingBottom: (bottom == undefined ? undefined : bottom),
    paddingLeft: (left == undefined ? undefined : left),
    paddingRight: (right == undefined ? undefined : right),
    paddingVertical: (vertical == undefined ? undefined : vertical),
    paddingHorizontal: (horizontal == undefined ? undefined : horizontal)
}}>{children}</View>

export default Padding
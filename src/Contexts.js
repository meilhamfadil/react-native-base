import React from 'react'
import colors from '../assets/colors'
import styles from '../assets/styles'
import images from '../assets/images'
import animations from '../assets/animations'
import navigator from './navigator'

export const AppComponentContext = React.createContext({
    networkStatus: false,
    appVersion: "",
    appName: "",
    navigator: navigator,
})
export const AppComponentProvider = AppComponentContext.Provider
export const useAppComponent = () => React.useContext(AppComponentContext)

export const ThemeContext = React.createContext({
    colors: colors,
    styles: styles,
    animations: animations,
    images: images
})
export const ThemeProvider = ThemeContext.Provider
export const useTheme = () => React.useContext(ThemeContext)

export const NavigatorContext = React.createContext(navigator)
export const NavigatorProvider = NavigatorContext.Provider
export const useNavigator = () => React.useContext(NavigatorContext)
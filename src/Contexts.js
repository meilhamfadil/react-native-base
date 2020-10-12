import React from 'react'

export const AppComponentContext = React.createContext({})
export const AppComponentProvider = AppComponentContext.Provider
export const useAppComponent = () => React.useContext(AppComponentContext)

export const WizardContext = React.createContext({})
export const WizardProvider = WizardContext.Provider
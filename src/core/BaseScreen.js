import React from 'react'

import colors from '../../assets/colors'
import styles from '../../assets/styles'
import { animations } from '../../assets/animations'
import util from '../../assets/util'
import Repository from '../source/repository'

class BaseScreen extends React.Component {

    state = {
        isBusy: true,
        isReloading: false,
        isRequesting: false
    }

    util = util
    theme = colors
    styles = styles
    animations = animations
    repository = Repository

    setBusy = busy => this.setState({ isBusy: busy })
    setReloading = reload => this.setState({ isReloading: reload })
    setRequesting = request => this.setState({ isRequesting: request })

}

export default BaseScreen
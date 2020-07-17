import React from 'react'

import colors from '../../assets/colors'
import styles from '../../assets/styles'
import util from '../../assets/util'

class BaseScreen extends React.Component {

    state = {
        isBusy: true,
        isReloading: false,
        isRequesting: false
    }

    util = util
    theme = colors
    styles = styles

    setBusy = busy => this.setState({ isBusy: busy })
    setReloading = reload => this.setState({ isReloading: reload })
    setRequesting = request => this.setState({ isRequesting: request })

}

export default BaseScreen
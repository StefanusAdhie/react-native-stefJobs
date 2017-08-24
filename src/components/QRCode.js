import React from 'react'
import {
	View,
} from 'react-native'
import QRCode from 'react-native-qrcode-svg'


class CodeQR extends React.Component {
	render() {
		return(
				<QRCode
          size = { 150 }
          value = { this.props.value }
          color = 'red'
          logo = { require('../img/logo.png') }
          logoSize = { 40 }
          logoBackgroundColor = 'transparent' />
		)
	}
}

module.exports = CodeQR
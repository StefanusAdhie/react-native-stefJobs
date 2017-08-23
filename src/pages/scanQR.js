import React from 'react'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner'
import { NavigationActions } from 'react-navigation'
var back = NavigationActions.back({key: null})

class ScanQR extends React.Component {
	state = {
		value: ''
	}

	onSuccess(e) {
		console.log(e)
		this.setState({value: e.data})
    // Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  }

	render() {
		return(
			<View style={{flex: 1}}>
				<QRCodeScanner
					style={{flex: 1}}
					title = 'Scan Code'
					onRead = { this.onSuccess.bind(this) }
					topContent = {
            <Text>
              Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code. { this.state.value }
            </Text>
					}
          bottomContent = {
            <TouchableOpacity>
              <Text onPress = { () => this.props.navigation.dispatch(back) }>OK. Got it! </Text>
            </TouchableOpacity>
          } />
			</View>
		)
	}
}

module.exports = ScanQR
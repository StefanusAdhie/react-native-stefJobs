import React from 'react'
import {
	View,
	Text
} from 'react-native'


class Gallery extends React.Component {
	render() {
		return(
			<View>
				<Text onPress = { () => this.props.navigation.navigate('ScanQR') }>GalleryTab</Text>
			</View>
		)
	}
}

module.exports = Gallery
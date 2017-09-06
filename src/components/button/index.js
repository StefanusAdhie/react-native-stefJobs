import React from 'react'
import {
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	View,
	Text
} from 'react-native'


class Button extends React.Component {
	render() {
		if(Platform.OS == 'android' && Platform.Version >= 21) {
			return (
				<TouchableNativeFeedback
					onPress = {this.props.onPress} >
					<View>
						<Text>{this.props.name}</Text>
					</View>
				</TouchableNativeFeedback>
			)
		}

		return (
			<TouchableOpacity
				onPress = {this.props.onPress} >
				<Text>{this.props.name}</Text>
			</TouchableOpacity>
		)
	}
}

module.exports = Button
import React from 'react'
import {
	StyleSheet,
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
					onPress = { this.props.onPress } >
					<View style = { styles.container }>
						<Text>{ this.props.name }</Text>
					</View>
				</TouchableNativeFeedback>
			)
		}

		return (
			<TouchableOpacity
				onPress = { this.props.onPress } >
				<View style = { styles.container }>
					<Text>{ this.props.name }</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		margin: 5,
		padding: 5,
		borderRadius: 20,
		borderWidth: 0.5,
		borderColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green'
	}
})

module.exports = Button
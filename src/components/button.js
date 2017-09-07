import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'


class Button extends React.Component {
	render() {
		return (
			<View style = { styles.button } >
				<TouchableOpacity
					style = { styles.container }
					onPress = { this.props.onPress.bind(this) } >
					<View style = { styles.container } >
						<Text>{ this.props.name }</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	button: {
		// flex: 1,
		height: 40,
		margin: 10,
		padding: 10,
		borderWidth: 0.5,
		borderRadius: 20,
		borderColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default Button
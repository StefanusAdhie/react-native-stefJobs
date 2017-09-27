import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


class EvenAkan extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<TouchableOpacity
				style={{padding: 10}}
				onPress={ () => navigation.navigate('DrawerOpen') } >
				<Ionicons
					name = 'md-menu'
					size = {30}
					color = 'black' />
			</TouchableOpacity>
		),
		headerTitle: 'Event Akan'
	})

	state = {
		inputValue: ''
	}
	
	updateInput = (inputValue) => {
		this.setState({ inputValue })
	}

	render() {
		return(
			<View>
				<Text>EvenAkanTab</Text>

				<TextInput
					onChangeText = { text => this.updateInput(text) }
					value = { this.state.inputValue }
					placeholder = 'Name' />

				<Text onPress = { () => this.props.navigation.navigate('EventDetail') } > Event Detail </Text>
			</View>
		)
	}
}

module.exports = EvenAkan
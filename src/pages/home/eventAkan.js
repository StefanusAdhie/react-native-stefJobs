import React from 'react'
import {
	View,
	Text,
	TextInput
} from 'react-native'


class EvenAkan extends React.Component {
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
			</View>
		)
	}
}

module.exports = EvenAkan
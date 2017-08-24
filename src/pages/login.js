import React from 'react'
import {
	View,
	Text,
	TextInput
} from 'react-native'


class Login extends React.Component {
	state = {
		email: '',
		password: ''
	}

	render() {
		return (
			<View>
				<Text>Login</Text>

				<TextInput
					placeholder = 'email'
					value = { this.state.email } />

				<TextInput
					placeholder = 'password'
					secureTextEntry = { true }
					value = { this.state.password } />
			</View>
		)
	}
}

export default Login
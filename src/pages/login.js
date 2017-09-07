import React from 'react'
import {
	View,
	Text,
	TextInput
} from 'react-native'

import Button from '../components/button'


class Login extends React.Component {
	state = {
		email: '',
		password: '',
		test: ''
	}

	login() {
		this.props.navigation.navigate('Home')
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

				<Text>{ this.state.test }</Text>

				<Button
					name = { 'Login' }
					onPress = { this.login.bind(this) } />
			</View>
		)
	}
}

export default Login
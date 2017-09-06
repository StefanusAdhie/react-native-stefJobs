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
		password: ''
	}

	login(pages) {
		this.props.navigation.dispatch({
		  type: 'Navigation/RESET',
		  index: 0,
		  actions: [{ type: 'Navigation/NAVIGATE', routeName: pages }]
		})
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

				<Button
					name = 'Login'
					onPress = {this.login.bind(this, 'Home')} />
			</View>
		)
	}
}

export default Login
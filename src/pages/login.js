import React from 'react'
import {
	StyleSheet,
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

	login(pages) {
		this.props.navigation.dispatch({
		  type: 'Navigation/RESET',
		  index: 0,
		  actions: [{ type: 'Navigation/NAVIGATE', routeName: pages }]
		})
	}

	render() {
		return (
			<View style = { styles.container }>
				<View style = { styles.top }>
				</View>

				<View style = { styles.bottom }>
					<View style = { styles.title }>
						<Text>Login</Text>
					</View>

					<View style = { styles.body }>
						<TextInput
							placeholder = 'email'
							value = { this.state.email } />

						<TextInput
							placeholder = 'password'
							secureTextEntry = { true }
							value = { this.state.password } />

						<Text>Forgot Password</Text>
					</View>

					<View style = { styles.footer }>
						<Button
							name = 'Login'
							onPress = {this.login.bind(this, 'Home')} />

						<View style = { styles.row }>
							<View style = { styles.container }>
								<Button
									name = 'Facebook'
									onPress = {this.login.bind(this, 'Home')} />
							</View>

							<View style = { styles.container }>
								<Button
									name = 'Google'
									onPress = {this.login.bind(this, 'Home')} />
							</View>
						</View>

						<Text>Register</Text>
					</View>

					<View>
						<Text>Terms and Privacy</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	top: {
		flex: 1,
		borderWidth: 0.5,
		borderColor: 'green'
	},
	bottom: {
		flex: 1.5,
		padding: 5,
		borderWidth: 0.5,
		borderColor: 'green',
		justifyContent: 'center'
	},
	title: {
		// flex: 1,
		alignItems: 'center',
		// justifyContent: 'center'
	},
	body: {
		flex: 1,
		justifyContent: 'center'
	},
	footer: {
		flex: 1,
		justifyContent: 'center'
	},
	row: {
		flexDirection: 'row'
	}
})

export default Login
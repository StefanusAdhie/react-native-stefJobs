import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';


class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome'
	};

	render() {
		const { navigate } = this.props.navigation;
		return(
			<View>
				<Text>Hello, Navigation!</Text>
				<Button
					onPress = { () => navigate('Chat', { user: 'Lucy' }) }
					title = 'Chat with Lucy' />
			</View>
		)
	}
};


class ChatScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Chat with ' + navigation.state.params.user
	});

	render() {
		return(
			<View>
				<Text>Chat with Lucy</Text>
			</View>
		)
	}
};


const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen }
});


module.exports = SimpleApp;
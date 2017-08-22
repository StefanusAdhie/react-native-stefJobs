import React from 'react';
import {
	View,
	Text
} from 'react-native';


class SplashScreen extends React.Component {
	render() {
		return(
			<View>
				<Text>Splash</Text>
			</View>
		);
	}

	componentDidMount() {
		setTimeout(() => {
			// this.props.navigation.navigate('Home');
			this.props.navigation.dispatch({
			  type: 'Navigation/RESET',
			  index: 0,
			  actions: [{ type: 'Navigation/NAVIGATE', routeName: 'Home' }]
			});
		}, 3000)
	}
};


module.exports = SplashScreen;
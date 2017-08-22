import React from 'react';
import {
	View,
	Text
} from 'react-native';

import {
	DrawerNavigator,
	StackNavigator
} from 'react-navigation';

import HomeScreen from './home';

import RekorPayScreen from '../pages/rekorPay';


class MenuTwoScreen extends React.Component {
	static navigationOptions = {
		headerTitle: 'Menu Two Screen'
	};

	render() {
		return(
			<View>
				<Text>MenuTwoScreen</Text>
			</View>
		);
	}
};


const DrawerNavigatorConfig = {
	// headerMode: 'screen'
};


const Main = DrawerNavigator({
	Home: {
		screen: StackNavigator({
			HomeScreen: {
				screen: HomeScreen,
				navigationOptions: {
					headerTitle: 'Title'
				}
			}
		}),
	},
	RekorPay:{
		screen: StackNavigator({
			RekorPayScreen: {
				screen: RekorPayScreen,
				navigationOptions: {
					headerTitle: 'Rekor Pay'
				}
			}
		})
	},
	MenuTwo:{
		screen: StackNavigator({
			MenuTwoScreen: { screen: MenuTwoScreen }
		})
	}
}, DrawerNavigatorConfig);

module.exports = Main;
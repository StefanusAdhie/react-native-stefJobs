import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import HomeScreen from './routes/main';

import SplashScreen from './pages/splash';


const StackNavigatorConfig = {
	headerMode: 'none'
};


const StefJobs = StackNavigator({
	Splash: {
		screen: SplashScreen,
		navigationOptions: {
			header: null
		}
	},
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			// headerLeft: <Button title='Info' />
		}
	}
}, StackNavigatorConfig);


module.exports = StefJobs;
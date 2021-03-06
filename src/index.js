import {
	StackNavigator
} from 'react-navigation'

import HomeScreen from './routes/main'

import SplashScreen from './pages/splash'
import LoginScreen from './pages/login'
import QRScreen from './pages/scanQR'
import EventDetailScreen from './pages/eventDetail'


const StackNavigatorConfig = {
	// headerMode: 'none'
}


const StefJobs = StackNavigator({
	Splash: {
		screen: SplashScreen,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			header: null
		}
	},
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			header: null
		}
	},
	ScanQR: {
		screen: QRScreen,
		navigationOptions: {

		}
	},
	EventDetail: {
		screen: EventDetailScreen,
		navigationOptions: {

		}
	}
}, StackNavigatorConfig)


module.exports = StefJobs
import {
	StackNavigator
} from 'react-navigation'

import HomeScreen from './routes/main'

import SplashScreen from './pages/splash'
import QRScreen from './pages/scanQR'


const StackNavigatorConfig = {
	headerMode: 'none'
}


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

		}
	},
	ScanQR: {
		screen: QRScreen,
		navigationOptions: {

		}
	}
}, StackNavigatorConfig)


module.exports = StefJobs
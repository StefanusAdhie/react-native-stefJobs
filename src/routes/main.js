import {
	DrawerNavigator,
	StackNavigator
} from 'react-navigation'

import HomeScreen from './home'

import RekorPayScreen from '../pages/rekorPay'


const DrawerNavigatorConfig = {
	headerMode: 'screen'
}


const Main = DrawerNavigator({
	/*Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerTitle: 'Ini Home nya'
		}
	},
	RekorPay: {
		screen: RekorPayScreen,
		navigationOptions: {
			headerTitle: 'Rekor Pay nya'
		}
	}*/
	Home: {
		screen: StackNavigator({
			HomeScreen: {
				screen: HomeScreen,
				navigationOptions: {
					// headerTitle: 'Title Home'
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
	}
}, DrawerNavigatorConfig)

module.exports = Main
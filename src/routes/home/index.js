import {
	TabNavigator
} from 'react-navigation'

import EventTab from './event'

import HomeTab from '../../pages/home/home'
import GalleryTab from '../../pages/home/gallery'
import NewsTab from '../../pages/home/news'


const TabNavigatorConfig = {
	tabBarPosition: 'top'
}


const HomeScreen = TabNavigator({
	Home: { screen: HomeTab },
	Event: { screen: EventTab },
	Gallery: { screen: GalleryTab },
	News: { screen: NewsTab }
}, TabNavigatorConfig)

module.exports = HomeScreen
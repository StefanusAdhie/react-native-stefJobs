import React from 'react';
import {
	View,
	Text
} from 'react-native';

import {
	TabNavigator
} from 'react-navigation';

import EventTab from './event';

import HomeTab from '../../pages/home/home';
import GalleryTab from '../../pages/home/gallery';
import NewsTab from '../../pages/home/news';


const HomeScreen = TabNavigator({
	Home: { screen: HomeTab },
	Event: { screen: EventTab },
	Gallery: { screen: GalleryTab },
	News: { screen: NewsTab }
});

module.exports = HomeScreen;
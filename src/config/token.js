import {
	AsyncStorage,
	Alert,
	Toast
} from 'react-native'

// import { GoogleSignin } from 'react-native-google-signin'
// import { LoginManager } from 'react-native-fbsdk'
// import BadgeAndroid from 'react-native-android-badge'


exports.getToken = async (cb) => {
	try {
		const token = await AsyncStorage.getItem('Token')
		return cb(token)
	} catch(err) {
		ToastAndroid.show('Failed load storage', ToastAndroid.SHORT)
	}
}

exports.setToken = async (value) => {
	try {
		await AsyncStorage.setItem('Token', value)
	} catch(err) {
		ToastAndroid.show('Failed save to storage', ToastAndroid.SHORT)
	}
}

exports.delToken = async () => {
	try {
		await AsyncStorage.removeItem('Token')
		
		// GoogleSignin.signOut()
    // LoginManager.logOut()
    // BadgeAndroid.setBadge(0)

		Alert.alert( null, 'Logout Berhasil',
			[{ text: 'Ok' }]
		)
	} catch(err) {
		Alert.alert( null, 'Logout Gagal',
			[{ text: 'Ok' }]
		)
	}
}
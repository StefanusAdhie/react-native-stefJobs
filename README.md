# react-native-stefJobs


## issue `babel-preset-react-native`
1. remove babel-preset-react-native
2. add babel-preset-react-native@2.1.0


## react-navigation


## react-native-vector-icons
1. react-native link react-native-vector-icons


## redux


## react-redux


## react-native-svg
1. react-native link react-native-svg


## react-native-qrcode-svg


## react-native-camera
1. react-native link react-native-camera


## react-native-qrcode-scanner
1. react-native link react-native-qrcode-scanner
2. `android/app/src/main/AndroidManifest.xml`
	```js
	<uses-permission android:name="android.permission.VIBRATE"/>
	```
3. `ios/your_project/Info.plist`
	```js
	<key>NSCameraUsageDescription</key>
	<string>Your message to user when the camera is accessed for the first time</string>
	```


	## socket.io
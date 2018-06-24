import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
	createStackNavigator,
} from 'react-navigation';
import Setup from './src/page/setup';
import UserDetail from './src/page/userDetail';


const RootStack = createStackNavigator(
	{
		Main: {
			screen: Setup,
			navigationOptions: () => ({
				title: `首页`,
				headerBackTitle: null
			})
		},
		Details: {screen: UserDetail}
	},
	{
		initialRouteName: 'Main'
	}
);

class App extends Component {
	render() {
		return <RootStack />;
	}
}


AppRegistry.registerComponent('redRice', () => App);

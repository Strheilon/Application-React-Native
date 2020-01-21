import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/homeScreen';
import ShonenScreen from '../screens/shonenScreen';
import SeinenScreen from '../screens/seinenScreen';
import ShojoScreen from '../screens/shojoScreen';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {},
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
		focused={focused}
		name={
			Platform.OS === 'ios'
			? `ios-home`
			: 'md-home'
		}
		/>
	),
};

HomeStack.path = '';

const ShonenStack = createStackNavigator(
	{
		Shonen: ShonenScreen,
	},
	config
);

ShonenStack.navigationOptions = {
	tabBarLabel: 'Shonen',
	tabBarIcon: ({ shonen }) => (
		<TabBarIcon src={shonen} name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} />
	),
};

ShonenStack.path = '';

const SeinenStack = createStackNavigator(
	{
		Seinen: SeinenScreen,
	},
	config
);

SeinenStack.navigationOptions = {
	tabBarLabel: 'Seinen',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} />
	),
};

SeinenStack.path = '';

const ShojoStack = createStackNavigator(
	{
		Shojo: ShojoScreen,
	},
	config
);

ShojoStack.navigationOptions = {
	tabBarLabel: 'Shojo',
	tabBarIcon: ({ shonen }) => (
		<TabBarIcon src={shonen} name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} />
	),
};

ShojoStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	ShonenStack,
	ShojoStack,
	SeinenStack,
});

tabNavigator.path = '';

export default tabNavigator;

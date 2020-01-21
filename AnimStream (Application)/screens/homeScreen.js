import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { Video } from 'expo-av';

const { width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			video:[]
        }
	}

	async componentDidMount() {
		
        fetch(
            "http://726ec6a9.ngrok.io/video",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then((response) => {
			return response.json()
		}).then((result) => {
			this.setState({video: result}, () =>  console.log(this.state));
		})
	}
	render() {
		return (
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<View style={styles.welcomeContainer}>
					<Image
						source={require('../img/logo.jpg')}
						style={styles.welcomeImage}
					/>
				</View>
				<View>
					<Text style={styles.getStartedText1}>Bienvenue sur l'application</Text>
					<Text style={styles.getStartedText2}>AnimStream</Text>
				</View>
				<View>
					<Text style={styles.text}>Nouveauté</Text>
				</View>
				{this.state.video.map(vidjo => {
					return (
						<View>
							<View style={styles.header_container}>
								<Text style={styles.name}>{vidjo.name}</Text>
							</View>
							<Video
								source={{ uri: vidjo.video }}
								rate={1.0}
								volume={1.0}
								muted={false}
								useNativeControls
								resizeMode="cover"
								shouldPlay={false}
								style={{  width: width, height: 200 }} 
							/>
							<View style={styles.row}>
								<View>
									<Text style={styles.episai}>Episode 0{vidjo.episode}</Text>
								</View>
								<View style={styles.date_container}>
									<Text style={styles.episai}> de la Saison 0{vidjo.saison}</Text>
								</View>
							</View>
						</View>
					)
				})}
			</ScrollView>
		);
	}
}
	
HomeScreen.navigationOptions = {
  	header: null,
};

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	text:{
		color: 'white',
		textAlign: 'left',
		paddingTop: 50,
		fontSize: 30
	},
	episai: {
		fontSize: 20,
		marginBottom: 50,
		color: '#fce721'
	},
	name: {
		fontSize: 50,
		color: '#ff931e'
	},
	row: {
		flexDirection:'row',
		display:'flex',
	},
	white: {
		color: 'white',
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 200,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText1: {
		fontSize: 50,
		color: '#ff931e',
		textAlign: 'center',
	},
	getStartedText2: {
		fontSize: 50,
		color: '#fce721',
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
		ios: {
			shadowColor: 'black',
			shadowOffset: { width: 0, height: -3 },
			shadowOpacity: 0.1,
			shadowRadius: 3,
		},
		android: {
			elevation: 20,
		},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});

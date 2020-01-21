import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import { Video } from 'expo-av';
import { MonoText } from '../components/StyledText';
import Navigation from '../navigation/MainTabNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler';
import chocolat from '../video/[VOSTFR]-Dr.STONE-E01.mp4';

let text = '../video/';
let test = '[VOSTFR]-Dr.STONE-E01.mp4';

const { width } = Dimensions.get('window');

class VideoScreen extends React.Component {
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
			<View style={styles.container}>
				<Button
					title="Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<ScrollView	style={styles.container} contentContainerStyle={styles.contentContainer}>
					{this.state.video.map(vidjo => {
						return (
							<View>
								<View style={styles.header_container}>
									<Text style={styles.name}>{vidjo.name}</Text>
								</View>
								<Video
									source={require(text + test)}
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
			</View>
		);
	}
}

VideoScreen.navigationOptions = {
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
		paddingTop: 25,
	},
	episai: {
		color: 'white',
		fontSize: 20,
		marginBottom: 50,
		color: '#fce721'
	},
	name: {
		color: 'white',
		fontSize: 50,
		color: '#ff931e'
	},
	row: {
		flexDirection:'row',
		display:'flex',
	},
});

export default VideoScreen;
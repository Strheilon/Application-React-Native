import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import date from 'date-format'
import { TouchableOpacity } from 'react-native-gesture-handler';

class ShonenScreen extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			anime:[]
        }
    }

    async componentDidMount() {
		
        fetch(
            "http://726ec6a9.ngrok.io/anime",
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
			this.setState({anime: result}, () =>  console.log(this.state));
		})
	}
	
	render() {
		return (
			<ScrollView style={styles.background}>
				{this.state.anime.map(anim => {
					if (anim.category === 'Shonen') {
						return (
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Video')} style={styles.row}>
								<Image
									style={styles.image}
									source={{uri: anim.image}}
								/>
								<View style={styles.content_container}>
									<View style={styles.header_container}>
										<Text style={styles.title_text}>{anim.name}</Text>
									</View>
									<View style={styles.description_container}>
										<Text style={styles.description_text} numberOfLines={6}>{anim.synopsis}</Text>
									</View>
									<View style={styles.date_container}>
										<Text style={styles.date_text}>Sorti le {date('dd.MM.yyyy', new Date(anim.date))}</Text>
									</View>
								</View>
							</TouchableOpacity>
						)
					}
				})}
			</ScrollView>
		)
	}
}

ShonenScreen.navigationOptions = {
	title: 'Shonen',
	headerTintColor: "black",
	headerStyle: {
		backgroundColor: '#ff931e',
	},
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: 'black'
	},
	main_container: {
		height: 190,
		flexDirection: 'row'
	},
	image: {
		width: 120,
		height: 180,
		margin: 5
	},
	row: {
		flexDirection:'row',
		display:'flex',
		justifyContent:'space-around'
	},
	content_container: {
		flex: 1,
		margin: 5
	},
	header_container: {
		flex: 3,
		flexDirection: 'row'
	},
	title_text: {
		fontWeight: 'bold',
		fontSize: 20,
		flex: 1,
		flexWrap: 'wrap',
		paddingRight: 5,
		color: '#ff931e'
	},
	description_container: {
		flex: 7
	},
	description_text: {
		fontStyle: 'italic',
		color: '#8e9489'
	},
	date_container: {
		flex: 1
	},
	date_text: {
		textAlign: 'right',
		fontSize: 14,
		color: '#fce721'
	}
})

export default ShonenScreen;
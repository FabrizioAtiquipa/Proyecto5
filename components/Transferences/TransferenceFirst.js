var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class TransferenceFirst extends Component {
	constructor(props) {
		super(props);
		this.state = {
			importe:0,
		};
	}
	render(){
		return(
		<View>
			<Text>Contenido de first</Text>

			<Button title="Go Next" onPress={() => this.props.navigation.navigate('Second')} />
		</View>
		);
	}
}
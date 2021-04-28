var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class TransferenceThird extends Component {
	constructor(props) {
		super(props);
		this.state = {
			importe:0,
		};
	}
	render(){
		return(
		<View>
			<Text>Contenido de third</Text>
            <Button title="Go Next" onPress={() => this.props.navigation.navigate('First')} />
		</View>
		);
	}
}
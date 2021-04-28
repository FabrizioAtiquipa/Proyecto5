import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
const image = { uri: "https://i.pinimg.com/564x/09/2e/2f/092e2f99dce8e1513c6f2d77220351b1.jpg" };

function Item({hero, descripcion, imagen, aceptacion}) {
    
    return(
        <View style={styles.item}>
            <View style={styles.item1}>
                <View style={{paddingTop: 15}}>
                <Image source={{uri: imagen}} style={{height: 150, width: 150, borderRadius: 75, borderWidth: 4, borderColor: '#FF0000'}} />
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>{hero}</Text>
                    <Text numberOfLines = {3} style={styles.resumen}>{descripcion}</Text>
                    <AirbnbRating
                    showRating
                    style={{ paddingVertical: 1}}
                    count={5}
                    reviews={["Muy Debil", "Debil", "Semi Poderoso", "Poderoso", "Muy Poderoso"]}
                    defaultRating={aceptacion}
                    size={20}
                    />
                </View>
            </View>
        </View>
    );
}

export default class ConexionFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }

    async componentDidMount(){
        await fetch('http://192.168.0.8:3000/DCHero')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result);
                    this.setState({
                        items: result
                    });
                }, 
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
}
render( ){
    const {navigate} = this.props.navigation;
    return (
        <ImageBackground source={image} style={styles.image1}>
        <View style={styles.container}>
            <FlatList data={this.state.items.length > 0 ? this.state.items: [] }               
                renderItem={({item}) => {
                    return(
                    <TouchableOpacity onPress={() => navigate('Details', {itemObject: item})}>
                        <Item hero={item.hero} descripcion={item.descripcion} imagen={item.imagen}  aceptacion={item.aceptacion} />
                    </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id}
                />
        </View>
        </ImageBackground>
    );
}
}
const styles = StyleSheet.create({
    image1:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        marginTop: 5,
        backgroundColor: "rgba(34,34,34,0.75)",
    },
    item: {
        flexDirection: 'column',
        marginHorizontal: 5,
    },
    item1: {
        flexDirection:'row',
    },
    title: {
        fontWeight: 'bold',
        flexDirection:'column',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 30,
        color:"white",
    },
    resumen: {
        fontSize: 12,
        paddingLeft:10,
        paddingRight: 5,
        paddingBottom: 10,
        paddingTop: 0,
        textAlign:"justify",
        height: 55,
        width: 320,
        color:"white",
    },

});
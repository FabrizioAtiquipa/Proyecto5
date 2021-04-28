import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { DataTable } from 'react-native-paper';

export default class Details extends Component {
    render() {
        const image = { uri: "https://i.pinimg.com/564x/09/2e/2f/092e2f99dce8e1513c6f2d77220351b1.jpg" };
        const {params} = this.props.route;
        return ( 
            <ImageBackground source={{uri: params.itemObject.fondo}} style={styles.image1}>
            <View style={styles.container}>
                <View>
                    <View style={{paddingTop: 15, alignItems:"center"}}>
                         <Image source={{uri: params.itemObject.imagen}} style={{height: 180, width: 180, borderRadius: 100, borderWidth: 4, borderColor: '#FF0000' }}/>
                    </View>
                    <AirbnbRating
                    showRating
                    style={{ paddingVertical: 1}}
                    count={5}
                    reviews={["Muy Debil", "Debil", "Semi Poderoso", "Poderoso", "Muy Poderoso"]}
                    defaultRating={params.itemObject.aceptacion}
                    size={20}
                    />
                    <Text style={styles.title}>{params.itemObject.hero}</Text>
                    <Text style={styles.descripcion}>{params.itemObject.descripcion}{"\n"}</Text>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title style={{backgroundColor:"rgba(233, 57, 57, 0.344)", borderRadius:3,paddingLeft:200,borderColor:"#fff",borderWidth:2}}><Text style={{fontWeight: 'bold',color:"white",fontSize: 15}}>DETALLES</Text></DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell style={{backgroundColor:"rgba(0, 0, 0, 0.549)",borderColor:"#fff",borderWidth:2,borderRadius:3}}><Text style={{fontWeight: 'bold',color:"white",fontSize: 15,marginLeft:50 }}>          AÑO DE CREACIÓN</Text></DataTable.Cell>
                            <DataTable.Cell style={{backgroundColor:"rgba(0, 0, 0, 0.549)",borderColor:"#fff",borderWidth:2,borderRadius:3}}><Text style={{color:"white",fontSize: 15,marginLeft:50 }}>            {params.itemObject.creado}</Text></DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row >
                            <DataTable.Cell style={{backgroundColor:"rgba(0, 0, 0, 0.549)",borderColor:"#fff",borderWidth:2,borderRadius:3}}><Text style={{fontWeight: 'bold',color:"white",fontSize: 15,marginLeft:50 }}>                CREADORES</Text></DataTable.Cell>
                            <DataTable.Cell style={{backgroundColor:"rgba(0, 0, 0, 0.549)",borderColor:"#fff",borderWidth:2,borderRadius:3}}><Text style={{color:"white",fontSize: 15,marginLeft:50 }}>    {params.itemObject.cradores}</Text></DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    <View style={{paddingTop: 15, alignItems:"center"}}>
                        <Image source={{uri: params.itemObject.comic}} style={{height: 250, width: 150, borderRadius: 5, borderWidth: 4, borderColor: '#rgba(255, 0, 0, 0.549)', paddingTop:1}} />
                        <Text style={{fontWeight: 'bold',color:"white",fontSize: 20}}>{params.itemObject.aparcion}</Text>
                    </View>
                </View>
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
        backgroundColor: "rgba(34,34,34,0.75)",
    },
    title: {
        fontWeight: 'bold',
        flexDirection:'column',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 30,
        color:"white",
        textAlign:"center",
    },
    descripcion: {
        flexDirection:'column',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 13,
        color:"white",
        textAlign: "justify",
    }
});
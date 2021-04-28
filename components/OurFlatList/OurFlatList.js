import React from 'react'
import {View, FlatList, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native'
const img = {uri: "https://i.pinimg.com/736x/50/48/ed/5048ed1578ac90366fd369a9b574c539.jpg"};
const DATA  = [
  
]
    


function Item({ title, showAlert}){
    return(
        <TouchableOpacity onPress={showAlert}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ListEmpty = () =>{
    return(
        
        <View>
            <Text style ={{textAlign:'center', color:'black', fontSize:32}}>No data Found</Text>
        </View>
        
    )
}

export default function OurFlatList(props){
    return(
        <ImageBackground source={img} style={styles.image}>
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => (<Item title={item.title} showAlert={props.showAlert} />)}
                keyExtractor={item => item.id}
                ListEmptyComponent={ListEmpty} />
        </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: 'orange',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
   
})
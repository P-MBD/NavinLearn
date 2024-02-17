import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import { ActivityIndicator, FlatList } from 'react-native';

export default function HomeScreen(){
    const [data, setData]= useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://reactnative.dev/movies.json')
        .then((response)=> response.json())
        .then((json)=>{
            setData(json.movies);
            console.log(json.movies);
        })
        .catch((error)=>console.log(error))
        .finally(()=> {
            setLoading(false);
            console.log(isLoading);
          })
    },[])
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home</Text>
            {isLoading? <ActivityIndicator /> : (
                <FlatList
                data={data}
                keyExtractor={({id})=> id}
                renderItem={({item})=>(
                    <Text> {item.title} , {item.releaseYear} </Text>
                )}
                 />
            )}
        </View>
    );
}
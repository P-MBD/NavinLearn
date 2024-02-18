import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet,ActivityIndicator,FlatList,TouchableOpacity,Image} from 'react-native';

export default function CategoryScreen(){
    const [data, setData]= useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://moviesapi.ir/api/v1/movies')
        .then((response)=> response.json())
        .then((json)=>{
            console.log('json2');
            setData(json.data);
            console.log(json);
        })
        .catch((error)=>console.log(error))
        .finally(()=> {
            setLoading(false);
            console.log(isLoading);
          })
    },[])
    return(
        <View  style={styles.container}>
        {isLoading? <ActivityIndicator /> : (
           <View>
             <Text>Latest Update</Text>
             <FlatList
            data={data}
            keyExtractor={({id})=> id}
            renderItem={({item})=>(
                <TouchableOpacity style={styles.card} onPress={() => selectUser(item)}>
                <Image style={styles.image} source={{ uri: item.poster }} />
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.title}</Text>
                  <Text style={styles.position}>{item.genres}</Text>
                  <TouchableOpacity
                    style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>    )}
             />
           </View>
        )}
    </View>);}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20,
            backgroundColor: '#eeeeee',
          },
        cardContent: {
          marginLeft: 20,
          marginTop: 10, },
        image: {
          width: 90,
          height: 90,
          borderRadius: 45,},
        card: {
          shadowColor: '#00000021',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
      
          marginVertical: 10,
          marginHorizontal: 20,
          backgroundColor: 'white',
          flexBasis: '46%',
          padding: 10,
          flexDirection: 'row',
        },
        name: {
          fontSize: 18,
          flex: 1,
          alignSelf: 'center',
          color: '#008080',
          fontWeight: 'bold',
        }, followButton: {
          marginTop: 10,
          height: 35,
          width: 100,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          backgroundColor: '#00BFFF',
        },
        followButtonText: {
          color: '#FFFFFF',
          fontSize: 20,
        },
    
      })
      
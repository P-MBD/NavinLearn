import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native'

export default function AboutScreen(){
    const [data, setData]= useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://androidsupport.ir/pack/aparat/getAllCreators.php')
        .then((response)=> response.json())
        .then((json)=>{
            console.log('json');
            setData(json);
            console.log(json);
        })
        .catch((error)=>console.log(error))
        .finally(()=> {
            setLoading(false);
            console.log(isLoading);
          })
    },[])

    return(
        <ScrollView>
 {isLoading? <ActivityIndicator /> : (
        <View style={styles.container}>
       
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Lorem ipsum dolor</Text>
          </View>
  
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </Text>
  
            <Text style={styles.postDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </Text>
  
            <Text style={styles.tags}>
              Lorem, ipsum, dolor, sit, amet, consectetuer, adipiscing, elit.
            </Text>
  
            <Text style={styles.date}>2017-11-27 13:03:01</Text>
  
            <View style={styles.profile}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}
              />
  
              <Text style={styles.name}>Johan Doe</Text>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Like</Text>
            </TouchableOpacity>
          </View>
        
        </View>
        )}
      </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: 30,
      alignItems: 'center',
      backgroundColor: '#00BFFF',
    },
    headerTitle: {
      fontSize: 30,
      color: '#FFFFFF',
      marginTop: 10,
    },
    name: {
      fontSize: 22,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    postContent: {
      flex: 1,
      padding: 30,
    },
    postTitle: {
      fontSize: 26,
      fontWeight: '600',
    },
    postDescription: {
      fontSize: 16,
      marginTop: 10,
    },
    tags: {
      color: '#00BFFF',
      marginTop: 10,
    },
    date: {
      color: '#696969',
      marginTop: 10,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      borderWidth: 4,
      borderColor: '#00BFFF',
    },
    profile: {
      flexDirection: 'row',
      marginTop: 20,
    },
    name: {
      fontSize: 22,
      color: '#00BFFF',
      fontWeight: '600',
      alignSelf: 'center',
      marginLeft: 10,
    },
    shareButton: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#00BFFF',
    },
    shareButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
    },
  })
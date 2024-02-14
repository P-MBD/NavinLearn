/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import { Text,FlatList,View,ActivityIndicator} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(()=>{
    console.log('Hi');
    fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
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
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
}
export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [getmsg, setgetmsg] = useState('');
  const [DATA, setData] = useState([
    // {
    //   title: 'First Item',
    // },
    // {
    //   title: 'Second Item',
    // },
    // {
    //   title: 'Third Item',
    // },
  ]);

  const displayMsg = () => {
    console.log('donee');
    const temp = {title: getmsg};
    setData([...DATA, temp]);
    console.log(DATA.length);
  };

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.title}
        />
      </View>
      {/* <Text>{getmsg}</Text> */}
      <View style={{flex: 0.1, flexDirection: 'row'}}>
        <TextInput
          placeholder="Enter text"
          onChangeText={text => setgetmsg(text)}
          value={getmsg}
          style={{
            width: '85%',
            height: '100%',
            fontWeight: 'bold',
            fontSize: 15,
            paddingLeft: 20,
          }}
        />
        <TouchableOpacity
          style={{
            width: '15%',
            height: '100%',
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            marginRight: 10,
            borderRadius: 12
          }}
          onPress={() => displayMsg()}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

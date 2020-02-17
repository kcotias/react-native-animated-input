import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AnimatedInput from 'react-native-animated-input';

const App = () => {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={{flex: 1, paddingHorizontal: 25, marginTop: 100}}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 30,
          shadowColor: '#c0c0c0',
          shadowOpacity: 0.9,
          shadowOffset: {
            height: 2,
            width: 2,
          },
          shadowRadius: 8,
          elevation: 6,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 28, marginBottom: 20}}>
          Login
        </Text>
        <AnimatedInput
          placeholder="Email"
          valid={isValid}
          errorText="Error"
          onChangeText={text => setEmail(text)}
          value={email}
          styleLabel={{fontWeight: '600'}}
          styleBodyContent={{borderBottomWidth: 1.5}}
        />
        <AnimatedInput
          placeholder="Password"
          valid={isValid}
          errorText="Error"
          onChangeText={text => setPassword(text)}
          value={password}
          styleLabel={{fontWeight: '600'}}
          styleBodyContent={{borderBottomWidth: 1.5}}
        />
        <TouchableOpacity onPress={() => setIsValid(!isValid)}>
          <View
            style={{
              backgroundColor: '#6a1b9a',
              alignItems: 'center',
              paddingVertical: 13,
              borderRadius: 20,
              marginTop: 20,
              shadowColor: '#6a1b9a',
              shadowOpacity: 0.7,
              shadowOffset: {
                height: 4,
                width: 4,
              },
              shadowRadius: 5,
              elevation: 6,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Confirmar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;

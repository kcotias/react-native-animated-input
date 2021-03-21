import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AnimatedInput from 'react-native-animated-input';

const App = () => {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <AnimatedInput
          placeholder="Email"
          valid={isValid}
          errorText="Error"
          onChangeText={text => setEmail(text)}
          value={email}
          styleLabel={{fontWeight: '600'}}
          styleBodyContent={styles.bodyContent}
          mask="cel-phone"
          maskOptions={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
        />
        <AnimatedInput
          placeholder="Password"
          valid={isValid}
          errorText="Error"
          onChangeText={text => setPassword(text)}
          value={password}
          styleLabel={{fontWeight: '600'}}
          styleBodyContent={styles.bodyContent}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsValid(!isValid)}>
          <Text style={styles.buttonText}>Press me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
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
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bodyContent: {
    borderBottomWidth: 1.5,
  },
});

export default App;

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Linking, StyleSheet, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 16,
          padding: 12,
          color: 'white',
          marginVertical: 12,
        }}
        autoCapitalize="none"
        onChangeText={setValue}
        value={value}
      />

      <Button
        title="Open url"
        onPress={() => {
          Linking.openURL(value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

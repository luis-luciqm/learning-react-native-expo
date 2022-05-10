import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bottoms}>
          <Text style={styles.textBottom}>Menu</Text>
        </View>
        <View style={styles.bottoms}>
          <Text style={styles.textBottom}>Logs</Text>
        </View>
        <View style={styles.bottoms}>
          <Text style={styles.textBottom}>Credits</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },

  header: {
    backgroundColor: '#d9d9d9',
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    height: 72
  },

  textBottom: {
    color: 'white',
    fontSize: 24,
    backgroundColor: 'black',
    marginTop: 16,
    borderRadius: 4,
    padding: 4,
  }


});

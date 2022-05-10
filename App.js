import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bottoms}>
          <Text>Menu</Text>
        </View>
        <View style={styles.bottoms}>
          <Text>Logs</Text>
        </View>
        <View style={styles.bottoms}>
          <Text>Credits</Text>
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
    backgroundColor: '#f2f2f2',
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  

});

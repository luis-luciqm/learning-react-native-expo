import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
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
    <View style={styles.content1}>
      <View style={styles.content2}>
        <View style={styles.contentChild}>
          <View style={styles.child}>

          </View>
          <View style={styles.child}>

          </View>
          <View style={styles.child}>

          </View>
        </View>
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
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
    fontSize: 16,
    backgroundColor: 'black',
    marginTop: 16,
    borderRadius: 4,
    padding: 8,
    width: 82,
    textAlign: 'center'
  },

  content1: {
    backgroundColor: '#ccccff',
    height: '100%'
  },

  content2: {
    display: 'flex',
    backgroundColor: '#b3b3ff',
    height: '72%',
    width: '80%',
    marginTop: 40,
    marginLeft: 38,
    borderRadius: 16
  },

  contentChild: {
    display: 'flex',
    backgroundColor: '#b3b3',
    height: '24%',
    width: '80%',
    marginTop: 32,
    marginLeft: 30,
    borderRadius: 8,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  child: {
    backgroundColor: 'black',
    width: '20%',
    height: '72%',
    marginTop: 16,
    
    

  }


});

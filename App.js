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
          <View style={styles.child}></View>
          <View style={styles.child}></View>
          <View style={styles.child}></View>
        </View>

        <View style={styles.content3}>
          <View style={styles.child1}></View>
          <View style={styles.child1}></View>
          <View style={styles.child1}></View>
        </View>

        <View style={styles.content4}>
          <View style={styles.view2}>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
          </View>
          <View style={styles.view2}>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
          </View>
          <View style={styles.view2}>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
            <View style={styles.child2}></View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>Exercício 01 - DDM</Text>
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
    borderRadius: 8,
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
  },

  child1: {
    backgroundColor: 'black',
    width: '88%',
    height: '24%',
    marginTop: 10,
    marginLeft: 16
  },

  child2: {
    backgroundColor: 'black',
    width: '16%',
    height: '100%',
    marginTop: 32,
    marginLeft: 2
  },

  content3: {
    display: 'flex',
    backgroundColor: '#b3b3',
    height: '24%',
    width: '80%',
    marginTop: 32,
    marginLeft: 30,
    borderRadius: 8,
  },

  content4: {
    display: 'flex',
    backgroundColor: '#b3b3',
    height: '24%',
    width: '80%',
    marginTop: 32,
    marginLeft: 30,
    borderRadius: 8,
  },

  view2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 8
  },

  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
    height: 72,
    backgroundColor: '#6666ff'
  },

  textFooter: {
    fontSize: 24,
    color: '#fff',
    marginTop: 16
    // finish
  }




});

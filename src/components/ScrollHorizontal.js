import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

const ScrollHorizontal = () => {
  return (
    <View style={styles.scrollH__container}>
      <Text style={styles.scrollH__title}>Que hacer en Paris</Text>
      <ScrollView horizontal>
        <View>
          <Image
            style={styles.scrollH__image}
            source={require('../assets/1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.scrollH__image}
            source={require('../assets/2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.scrollH__image}
            source={require('../assets/3.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.scrollH__image}
            source={require('../assets/4.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.scrollH__image}
            source={require('../assets/5.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollH__container: {
    marginHorizontal: 10,
  },
  scrollH__title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  scrollH__image: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});

export default ScrollHorizontal;

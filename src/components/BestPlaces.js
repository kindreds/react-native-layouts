import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const BestPlaces = () => {
  return (
    <View style={styles.places__container}>
      <Text style={styles.places__title}>Los Mejores Alojamientos</Text>
      <View>
        <Image
          style={styles.places__image}
          source={require('../assets/b1.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.places__image}
          source={require('../assets/b2.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.places__image}
          source={require('../assets/b3.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  places__container: {
    marginHorizontal: 10,
  },
  places__title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  places__image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default BestPlaces;

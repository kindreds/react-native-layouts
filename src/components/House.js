import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const House = () => {
  return (
    <View style={styles.house__container}>
      <Text style={styles.house__title}>Los Mejores Alojamientos</Text>
      <View style={styles.house__wrap}>
        <View style={styles.house__item}>
          <Image
            style={styles.house__image}
            source={require('../assets/h1.jpg')}
          />
        </View>
        <View style={styles.house__item}>
          <Image
            style={styles.house__image}
            source={require('../assets/h2.jpg')}
          />
        </View>
        <View style={styles.house__item}>
          <Image
            style={styles.house__image}
            source={require('../assets/h1.jpg')}
          />
        </View>
        <View style={styles.house__item}>
          <Image
            style={styles.house__image}
            source={require('../assets/h2.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  house__container: {
    marginHorizontal: 10,
  },
  house__wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  house__title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  house__item: {
    flexBasis: '49%',
  },
  house__image: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
});

export default House;

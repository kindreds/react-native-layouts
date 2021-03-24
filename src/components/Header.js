import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.header__image}
        source={require('../assets/bg.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  header__image: {
    height: 250,
    flex: 1,
  },
});

export default Header;

import React from 'react';
import {ScrollView} from 'react-native';
import BestPlaces from './components/BestPlaces';
import Header from './components/Header';
import House from './components/House';
import ScrollHorizontal from './components/ScrollHorizontal';

const App = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <ScrollHorizontal />
        <BestPlaces />
        <House />
      </ScrollView>
    </>
  );
};

export default App;

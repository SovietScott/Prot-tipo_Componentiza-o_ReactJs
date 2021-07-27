import React from 'react';
import {Wrapper} from './styles';
import {Navigation, Footer, Slider, Catalog} from '../../components';

const Home = () => {
  return(
    <Wrapper>
      <Navigation/>
      <Slider/>
      <Catalog/>
      <Footer/>
    </Wrapper>
  )
};

export default Home;
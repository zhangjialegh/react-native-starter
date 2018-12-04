import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Provider} from 'react-redux'
import configureStore from '../store/index'

// 
import Home from '../pages/Home'
import Details from '../pages/Details'

const AppNavigator = createStackNavigator({
  Home: Home,
  Details: Details
});


// 
const Navigator = createAppContainer(AppNavigator);
const store = configureStore()
const Navigation = () =>{
  return (
      <Provider store = {store}>
          <Navigator/>
      </Provider>
  )
}

export default Navigation;

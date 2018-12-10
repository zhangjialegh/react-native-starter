import React from 'react';
import {Provider} from 'react-redux'
import { createStackNavigator,createAppContainer } from "react-navigation"
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import configureStore from '../store/index'

const TabPageNullHeader = (screen) => {
  return {
    screen,
    navigationOptions: {
      header: null
    }
  }
}

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
  const { scene } = sceneProps;
  const { route } = scene;
  const params = route.params || {};
  const transition = params.transition || 'forHorizontal';
  /** transition type **/
  // 1. forHorizontal
  // 2. forVertical
  // 3. forFadeFromBottomAndroid
  // 4. forFadeToBottomAndroid
  // 5. forFade
  return StackViewStyleInterpolator[transition](sceneProps);
  },
});

import RootTabs from './TabNav'



// Router
import Details from '../pages/Details'


const AppNavigator = createStackNavigator({
  Home: TabPageNullHeader(RootTabs),
  Details: Details
},{
  transitionConfig: TransitionConfiguration
});

const AppContainer = createAppContainer(AppNavigator)
const store = configureStore()
const Navigation = () =>{
  return (
      <Provider store = {store}>
        <AppContainer/>
      </Provider>
  )
}

export default Navigation;

import React, {PureComponent} from 'react';
import {View,StyleSheet,Platform,Dimensions} from 'react-native';

export default class FloatBar extends PureComponent{
  render() {
    const height = this.props&&this.props.height || 50
    const elevation = this.props&&this.props.elevation || 4
    return (
        <View style={[styles.floatBar,{height: height,elevation: elevation},styles.platStyle]}>
        {this.props.children}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  floatBar: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  platStyle: Platform.OS === 'ios' 
  ? {
    shadowOffset: {x:0,y:0},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4
  }
  : {}
})

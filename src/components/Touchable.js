import React, {PureComponent} from 'react';
import {View,Platform,TouchableNativeFeedback,TouchableOpacity} from 'react-native';

export default class Touchable extends PureComponent{
  render() {
    return (
      <View style={this.props.style}>
        {
          Platform.OS === 'ios' 
          ? <TouchableOpacity activeOpacity={0.6} onPress={this.props.onPress}>{this.props.children}</TouchableOpacity>
          : <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.Ripple('', true)}>{this.props.children}</TouchableNativeFeedback>
        }
      </View>
    );
  }
}

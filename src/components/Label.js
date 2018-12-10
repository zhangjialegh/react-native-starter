import React, {PureComponent} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Color} from '../assets/styles/Base'


export default class Label extends PureComponent{
  render() {
    return (
      <View style={{...styles.label, ...this.props.style}}>
        <Text style={{...styles.labelText,...this.props.textStyle}}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    height: 18,
    paddingLeft:8,
    paddingRight:8,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    borderColor: Color.label,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    color: Color.label,
    fontSize: 10
  }
})

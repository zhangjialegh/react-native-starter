import React, {PureComponent} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Color} from '../assets/styles/Base'


export default class Tag extends PureComponent{
  render() {
    const opacity = this.props.style && this.props.style.opacity || 0.5
    return (
        <TouchableOpacity onPress={this.props.onPress} activeOpacity={opacity}>
          <View style={{...styles.tag, ...this.props.style}}>
            <Text style={{fontSize: 12,...this.props.textStyle}}>{this.props.content}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tag: {
    height: 25,
    paddingLeft:10,
    paddingRight:10,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: Color.tag,
    color: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2
  }
})

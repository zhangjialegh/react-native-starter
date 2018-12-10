import React, {PureComponent} from 'react';
import {View,ScrollView} from 'react-native';
import {Color} from '../assets/styles/Base'
import Tag from './Tag'


export default class Label extends PureComponent{
  render() {
    return (
      <View style={{
        height: 45,
        borderTopWidth: 1,
        borderTopColor: Color.tag,
        borderBottomWidth: 1,
        borderBottomColor: Color.tag,
        paddingLeft: 17
        }}>
        <ScrollView horizontal={true} automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false}>
          <View style={{justifyContent:'flex-start',alignItems: 'center',flexDirection:'row'}}>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
            <Tag onPress={this._onPress} content="#国际视野"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

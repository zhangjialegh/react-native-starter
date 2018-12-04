import React, {Component} from 'react';
import {Button,StyleSheet,View} from 'react-native';


export default class Home extends Component{
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.button_wrapper}>
        <Button
        onPress={()=>{this.props.navigation.push('Details')}}
          title="Go To Details"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  button_wrapper:{
    backgroundColor: "#841584",
    color: "#fff",
    width: '50%',
    justifyContent: 'center'
  }
})

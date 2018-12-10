import React, {Component} from 'react';
import {View,Button} from 'react-native';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {showLoadingToast} from '../actions/alert'
import Alert from '../common/Alert'

@connect(
  state => state.alert,
  dispatch => bindActionCreators({showLoadingToast}, dispatch)
)
class Example extends Component{
  static navigationOptions = {
    title: 'Details',
  };
  constructor(props) {
    super(props)
    this.state = {
      fapList: [],
      loading: false
    }
  }
  componentDidMount() {
    // this.props.showLoadingToast()
    // console.log(this.props.showLoadingToast(),'haha');
    this.props.showLoadingToast()
    .then((res)=>{
      console.log(res,'res');
    })
  }
  render() {
    console.log(this.props,'ff');

    
    return (
      <View>
        <Button
          onPress={()=>{this.props.navigation.goBack()}}
          title="Go Back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Alert/>
      </View>
    );
  }
}

export default Example;

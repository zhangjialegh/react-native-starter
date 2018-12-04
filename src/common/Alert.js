import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux'

@connect(
  state => state.alert
)
class Alert extends Component{
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    if(nextProps.loading !== prevProps.loading) {
      return {
        show: nextProps.loading
      }
    }
  }
  render() {
    const {show} = this.state
    return (
      <ActivityIndicator animating={show} size="large" color="#0000ff" hidesWhenStopped/>
    );
  }
}

export default Alert;

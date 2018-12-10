import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,Text,TouchableOpacity,Dimensions} from 'react-native';
import {Color} from '../assets/styles/Base'

// import BaseStyle from '../assets/styles/Style'
export default class Tabs extends Component{
  constructor(props) {
    super(props)
    this.state = {
      x: '0%',
      w: Dimensions.get('window').width,
      idx: 0
    }
  }
  _onScroll = (e,n) => {
    const w = this.state.w
    const x = e.nativeEvent.contentOffset.x
    this.setState({
      x: x/w*(100/n) + '%'
    })
  }
  scrollTo = (idx) => {
    this.refs.scroll.scrollTo({x: idx*this.state.w,y: 0, animated: true})
  }
  momentumScrollEnd = (e) => {
    const x = e.nativeEvent.contentOffset.x
    const idx = Math.round(x/this.state.w)
    this.setState({idx})
  }
  render() {
    const {tabs, width, swipeable} = this.props
    const len = tabs.length
    const {x,idx} = this.state
    return (
      <View style={styles.wrapper}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          width: width,
          height: 50
        }}>
          {
            tabs.map((item,index)=>(
              <TouchableOpacity activeOpacity={1} onPress={()=>this.scrollTo(index)} key={item.title+index}>
                <View style={{width: width/len,justifyContent: 'flex-start',
                  alignItems: 'center'}}>
                  <Text style={index===idx?styles.activeText:styles.defaulText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
          <View style={{
            position: 'absolute',
            left: x,
            bottom: 0,
            height: 2,
            width: width/len,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              height: 2,
              width: '56%',
              backgroundColor: Color.primary
            }}>
            </View>
          </View>

        </View>
        <ScrollView horizontal={true}  pagingEnabled={true} showsHorizontalScrollIndicator={false} onScroll={(e)=>this._onScroll(e,len)} scrollEventThrottle={150} ref="scroll" nestedScrollEnabled={true} onMomentumScrollEnd={this.momentumScrollEnd} scrollEnabled={swipeable}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          {this.props.children}
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  activeText: {
    fontSize: 17,
    color: Color.darkText
  },
  defaulText: {
    fontSize: 17,
    color: Color.lightText
  }
})

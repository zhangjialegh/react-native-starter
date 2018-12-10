import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,Dimensions,Text,TouchableOpacity,SafeAreaView,Image,Modal,TextInput,TouchableWithoutFeedback} from 'react-native';
import PostArticalCard from '../components/PostArticalCard'
import { Color } from '../assets/styles/Base';
import BaseStyle from '../assets/styles/BaseStyle'
import Touchable from '../components/Touchable'
import FloatBar from '../components/FloatBar'

// import BaseStyle from '../assets/styles/Style'
export default class Details extends Component{
  static navigationOptions = {
    title: 'Detail',
  };
  constructor(props) {
    super(props)
    this.state = {
      w: Dimensions.get('window').width,
      showComment: false,
      wordLen: 140,
      maxLength: 140,
      words: '',
      floatBar: false
    }
  }

  _onScroll = (e) => {
    const y = e.nativeEvent.contentOffset.y
    if(y >= 673) {
      this.setState({
        floatBar: true
      })
    } else {
      this.setState({
        floatBar: false
      })
    }
  }

  writeComment = () => {
    this.setState({
      showComment: true
    })
  }

  closeComment = () => {
    this.setState({
      showComment: false
    })
  }

  onChangeText = (val) => {
    console.log(val,'val')
    const {maxLength} = this.state
    this.setState({
      wordLen: maxLength - val.length,
      words: val
    })
  }

  render() {
    const {floatBar} = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
      {
        floatBar
        ? <FloatBar/>
        : null
      }
      <View style={styles.button_wrapper}>
      
      <ScrollView onScroll={this._onScroll} scrollEventThrottle={150}>
        <PostArticalCard/>
        <View style={styles.commentWrap}>
          <Text style={styles.commentTitle}>评论</Text>
          <View style={styles.commentItem}>
            <View style={styles.commentHead}>
              <View style={styles.headLeft}>
                <View style={styles.avatarWrap}>
                  <Image style={styles.avatar} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                </View>
                <View style={styles.avatarDesc}>
                  <Text style={styles.avatarName}>大熊🐻</Text>
                  <Text style={styles.publishTime}>1天前</Text>
                </View>
              </View>
              <View style={styles.headRight}>
                <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/note.png')}/><Text style={styles.text}>3</Text></View>
                <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/clap.png')}/><Text style={styles.text}>434</Text></View>
              </View>
            </View>

            <View style={styles.commentBody}>
              <Text style={styles.commentMain}>内容写的很好，赞。内容写的很好，赞。内容写的很好，赞。</Text>
              <View style={styles.commentReplayWrap}>
                <View style={styles.replayAngle}></View>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！</Text>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！以后继续加油我支持你！</Text>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！</Text>
              </View>
            </View>
          </View>
          <View style={styles.commentItem}>
            <View style={styles.commentHead}>
              <View style={styles.headLeft}>
                <View style={styles.avatarWrap}>
                  <Image style={styles.avatar} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                </View>
                <View style={styles.avatarDesc}>
                  <Text style={styles.avatarName}>大熊🐻</Text>
                  <Text style={styles.publishTime}>1天前</Text>
                </View>
              </View>
              <View style={styles.headRight}>
                <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/note.png')}/><Text style={styles.text}>3</Text></View>
                <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/clap.png')}/><Text style={styles.text}>434</Text></View>
              </View>
            </View>

            <View style={styles.commentBody}>
              <Text style={styles.commentMain}>内容写的很好，赞。内容写的很好，赞。内容写的很好，赞。</Text>
              <View style={styles.commentReplayWrap}>
                <View style={styles.replayAngle}></View>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！</Text>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！以后继续加油我支持你！</Text>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！</Text>
              </View>
            </View>
          </View>
          <View style={styles.commentItem}>
            <View style={styles.commentHead}>
              <View style={styles.headLeft}>
                <View style={styles.avatarWrap}>
                  <Image style={styles.avatar} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                </View>
                <View style={styles.avatarDesc}>
                  <Text style={styles.avatarName}>大熊🐻</Text>
                  <Text style={styles.publishTime}>1天前</Text>
                </View>
              </View>
              <View style={styles.headRight}>
                <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/note.png')}/><Text style={styles.text}>3</Text></View>
                <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/clap.png')}/><Text style={styles.text}>434</Text></View>
              </View>
            </View>

            <View style={styles.commentBody}>
              <Text style={styles.commentMain}>内容写的很好，赞。内容写的很好，赞。内容写的很好，赞。</Text>
              <View style={styles.commentReplayWrap}>
                <View style={styles.replayAngle}></View>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！</Text>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！以后继续加油我支持你！</Text>
                <Text style={styles.commentReplay}><Text style={styles.commentName}>哆啦A梦：</Text>自己觉得自己写的太好了 棒棒！</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      </View>

      <View style={styles.replayBoxWrap}>
        <TouchableOpacity style={{flex: 1}} activeOpacity={0.7} onPress={this.writeComment}>
          <View style={styles.replayInput}><Text style={styles.replayPlaceHolder}>写评论</Text></View>
        </TouchableOpacity>
        <View style={styles.headRight}>
        <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/clap.png')}/></View>
          <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/note.png')}/><Text style={styles.text}>3</Text></View>
          <View style={styles.iconText}><Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/clap.png')}/><Text style={styles.text}>434</Text></View>
        </View>
      </View>


      <Modal visible={this.state.showComment} onRequestClose={this.closeComment} transparent={true}>
      <TouchableWithoutFeedback onPress={this.closeComment}>
        <View style={{flex: 1,backgroundColor:'rgba(0,0,0,0.4)'}}></View>
      </TouchableWithoutFeedback>
      <View style={{backgroundColor: '#fff'}}>
          <TextInput placeholder={'添加评论...'} autoFocus={true} multiline={true} numberOfLines={4} style={{textAlignVertical:'top', paddingLeft: 10,paddingRight: 10, letterSpacing: 1, fontSize: 15}} maxLength={this.state.maxLength} onChangeText={this.onChangeText} defaultValue={this.state.words}></TextInput>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 15,
          }}>
          <Text style={{color: Color.lightText}}>{this.state.wordLen}</Text>
          <Touchable>
            <View style={{paddingLeft: 10, paddingRight: 10}}>
              <Image resizeMode={'contain'} style={{height: 20}} source={require('../assets/image/clap.png')}/>
            </View>
          </Touchable>
          </View>
      </View>
      
      </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button_wrapper:{
    flex:1,
    backgroundColor: '#fff'
  },


  replayBoxWrap: {
    height: 50,
    backgroundColor: '#ffffff',
    ...BaseStyle.container,
    paddingBottom: 10,
    paddingTop: 10,
    ...BaseStyle.flexBetween,
    borderTopWidth: 1,
    borderTopColor: '#F6F6F6'
  },
  replayInput: {
    height: 30,
    ...BaseStyle.borderRadius(15),
    backgroundColor: '#F6F6F6',
    ...BaseStyle.flexStart,
    paddingLeft: 15,
  },
  replayPlaceHolder: {
    color: Color.lightText
  },

  commentWrap: {
    ...BaseStyle.container,
    paddingTop: 20,
    paddingBottom: 20,
  },
  commentTitle: {
    fontSize: 15,
    color: Color.darkText
  },
  commentItem: {
    marginTop: 30
  },
  commentHead: {
    ...BaseStyle.flexBetween,
  },
  headLeft: {
    ...BaseStyle.flexStart,
  },
  avatarWrap: {
    width: 40,
    height: 40,
    ...BaseStyle.borderRadius(20),
    overflow: 'hidden',
    marginRight: 10
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  avatarDesc: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  avatarName: {
    color: Color.darkText,
    fontSize: 15
  },
  publishTime: {
    color: Color.lightText,
    fontSize: 12,
    lineHeight: 17
  },
  headRight: {
    ...BaseStyle.flexEnd
  },
  iconText: {
    ...BaseStyle.flexEnd
  },
  icon: {
    height: 17,
    marginRight: -3,
    marginLeft: 3,
  },
  text: {
    fontSize: 12,
    color: Color.lightText
  },
  commentBody: {
    paddingLeft: 50,
  },
  commentMain: {
    color: Color.darkText,
    fontSize: 14,
    lineHeight: 21,
    paddingTop: 8,
    paddingBottom: 8
  },
  commentReplayWrap: {
    backgroundColor:'#F6F6F6',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 5,
    position: 'relative'
  },
  replayAngle: {
    borderLeftWidth: 18,
    borderLeftColor: '#F6F6F6',
    borderTopWidth: 9,
    borderTopColor: 'transparent',
    borderBottomWidth: 9,
    borderBottomColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: -5,
    height: 0,
    width: 0
  },
  commentReplay: {
    fontSize: 14,
    lineHeight: 20,
    color: Color.text,
    paddingTop: 5,
  },
  commentName: {
    color: Color.darkText,
    fontWeight: '500',
  }
})
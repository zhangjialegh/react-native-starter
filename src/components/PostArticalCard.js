import React, {PureComponent} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Dimensions} from 'react-native';
import Tags from '../components/Tag'
import Label from '../components/Label'
import {Color} from '../assets/styles/Base'
export default class PostArticalCard extends PureComponent{
  constructor(props) {
    super(props)
  }
  _onPress = () => {
    console.log('sfddsfsd')
  }
  render() {
    const {width} = Dimensions.get('window')
    const n = [1,2,3,4,9,89,0,9,8]
    const suitWidth = (n) => {
      if([3,5,6,7,8,9].indexOf(n) !== -1) {
        return (width-34)/3 - 10
      } else if ([2,4].indexOf(n) !==-1) {
        return (width-34)/2 - 10
      } else {
        return (width-34)/1 - 10
      }
    }
    return (
      <View style={styles.articalCard}>
          <View style={styles.articalHead}>
            <View style={styles.articalHeadLeft}>
              <View style={styles.avatar} onPress={this._onPress}>
              <View style={styles.avatarWrap}>
                <Image style={styles.avatarImg} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
              </View>
              <Image style={styles.v} source={{uri:'https://wechat-pics.fangpinduo.com/wehome/community/v.png'}}/>
              </View>
              <Text style={styles.name}>哆啦A梦</Text>
              <Label content="⚡️人气王"/>
              {/* <View style={styles.label}><Text style={{fontSize: 12}}>fsdfdsf</Text></View> */}
            </View>
            <Tags onPress={this._onPress} content="+关注" style={styles.follow} textStyle={styles.followText}/>
          </View>

          <View style={styles.articalBody}>
            <Text style={styles.main} numberOfLines={4} ellipsizeMode={'tail'}>
            大家好，我叫哆啦A梦。本人现担任某日本公司的专业主管，具有多年的照顾大雄经验。现在每天的工作就是照大雄与他那些没用的好朋友们。这总共140个字。
            </Text>
            <Text style={styles.desc} numberOfLines={4} ellipsizeMode={'tail'}>
            大家好，我叫哆啦A梦。本人现担任某日本公司的专业主管，具有多年的照顾大雄经验。现在每天的工作就是照大雄与他那些没用的好朋友们。这总共140个字。
            <Text style={styles.keywords}>#教育 </Text><Text style={styles.keywords}>#教育</Text>
            </Text>
            <View style={styles.gridImage}>
              {
                n.map((item,index) => {
                return <View key={item+''+index} style={{...styles.imgItemWrap,width:suitWidth(n.length), height: suitWidth(n.length)}}>
                          <Image style={{...styles.imgItem}} source={{uri:'https://wechat-pics.fangpinduo.com/wehome/website/static/image/dz-intro-bg-1.png'}}/>
                        </View>
                })
              }
            </View>
          </View>
          <View style={styles.articalFoot}>
            <View style={styles.articalFootLeft}>
              <Text style={styles.publishAlready}>1天前</Text>
              <View style={styles.needTime}><Text style={styles.needTimeDot}>·</Text><Text style={styles.needTimeText}>5分钟阅读时间</Text></View>
            </View>
            <View style={styles.articalFootRight}>
              <TouchableOpacity activeOpacity={0.6} onPress={()=>{
                console.log(this.props,'props')
                this.props.navigation.navigate('Details')
              }}>
                <View style={styles.iconTextWrap}>
                  <Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/scan.png')}/>
                  <Text style={styles.number}>4</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.iconTextWrap}>
                  <Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/note.png')}/>
                  <Text style={styles.number}>4</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.iconTextWrap}>
                  {/* <Image resizeMode={'contain'} style={styles.icon} source={require('../assets/image/clap.png')}/> */}
                  <Image resizeMode={'contain'} style={{...styles.icon,height: 20}} source={require('../assets/image/clap-active.png')}/>
                  <Text style={styles.numberActive}>4</Text>
                </View>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  articalCard :{
    paddingLeft: 17,
    paddingRight: 17
  },
  articalHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  articalHeadLeft: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center'
  },

  avatar: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  avatarWrap: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  avatarImg: {
    width: '100%',
    height: '100%'
  },
  v: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  name: {
    color: Color.darkText,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  label: {
    height: 18,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderColor: Color.label,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12
  },
  follow: {
    backgroundColor: Color.lightPrimary,
  },
  followText: {
    color: Color.primary
  },
  articalBody: {

  },
  main: {
    fontSize: 16,
    color: Color.darkText,
    lineHeight: 26
  },
  desc: {
    paddingTop: 3,
    fontSize: 16,
    color:Color.text,
    lineHeight: 26
  },
  keywords: {
    color: Color.primary,
    marginRight: 10
  },
  gridImage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    // paddingTop: 10
  },
  imgItemWrap: {
    margin: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden'
  },
  imgItem: {
    height: '100%',
    width: '100%'
  },
  articalFoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  articalFootLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  publishAlready: {
    color: Color.lightText
  },
  needTime: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  needTimeDot: {
    color: Color.lightText,
    paddingLeft: 5,
    paddingRight: 5
  },
  needTimeText: {
    color: Color.lightText
  },
  articalFootRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  iconTextWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 5
  },
  icon: {
    height: 15
  },
  number: {
    color: Color.lightText
  },
  numberActive: {
    color: Color.primary
  }
})

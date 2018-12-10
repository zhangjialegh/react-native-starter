import React, {PureComponent} from 'react';
import {ScrollView,StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import {Color} from '../assets/styles/Base'

export default class ScrollCard extends PureComponent {
  render() {
    return (
      <View style={styles.informationModule}>
        <View style={styles.informationHead}>
          <Text style={styles.informationTitle}>冬季投资指南</Text>
          <TouchableOpacity>
          <Text style={styles.viewMore}>查看更多</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.informationCardWrap}>
          <ScrollView horizontal={true} automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={{...styles.informationCard,...styles.informationCardFirst}}>
                <Image style={{...styles.imgItem}} source={{uri:'https://wechat-pics.fangpinduo.com/wehome/website/static/image/dz-intro-bg-1.png'}}/>
                <View style={styles.informationBody}>
                  <Text style={styles.infoHeadLine}>寒冬下如何进行资产配置</Text>
                  <View style={styles.informationFoot}>
                    <View style={styles.avatarList}>
                      <View style={styles.avatarItemWrap}>
                        <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                      </View>
                      <View style={styles.avatarItemWrap}>
                        <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                      </View>
                      <View style={styles.avatarItemWrap}>
                        <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                      </View>
                      <View style={styles.avatarItemWrap}>
                        <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                      </View>
                    </View>
                    <Text style={styles.avatarText}>123人觉得有用</Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
  
          <TouchableOpacity activeOpacity={0.6}>
            <View style={{...styles.informationCard}}>
                <Image style={{...styles.imgItem}} source={{uri:'https://wechat-pics.fangpinduo.com/wehome/website/static/image/dz-intro-bg-1.png'}}/>
                <View style={styles.informationBody}>
                  <Text style={styles.infoHeadLine}>寒冬下如何进行资产配置</Text>
                  <View style={styles.informationFoot}>
                    <View style={styles.avatarList}>
                      <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                        <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                        <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                        <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                    </View>
                    <Text style={styles.avatarText}>123人觉得有用</Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
  
          <TouchableOpacity activeOpacity={0.6}>
            <View style={{...styles.informationCard,...styles.informationCardLast}}>
                <Image style={{...styles.imgItem}} source={{uri:'https://wechat-pics.fangpinduo.com/wehome/website/static/image/dz-intro-bg-1.png'}}/>
                <View style={styles.informationBody}>
                  <Text style={styles.infoHeadLine}>寒冬下如何进行资产配置</Text>
                  <View style={styles.informationFoot}>
                    <View style={styles.avatarList}>
                      <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                        <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                        <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                        <View style={styles.avatarItemWrap}>
                          <Image style={styles.avatarItem} source={{uri:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl7EFl1JylgPWgh6SOyteiboY3bgHWSX3FkGHz4HD1YRQGRUXggY481JmOBdIybjYXFGl04Hjb3cQ/132'}}/>
                        </View>
                    </View>
                    <Text style={styles.avatarText}>123人觉得有用</Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  informationModule: {
    backgroundColor: '#ffffff',
  },
  informationHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 17,
    paddingRight: 17
  },
  informationCardWrap: {
    // marginLeft: 12,
    // marginRight: 12
  },
  informationTitle: {
    fontSize: 17,
    color: Color.darkText
  },
  informationCard: {
    marginLeft: 5,
    marginRight: 5,
    width: 150,
    height: 240,
    shadowColor: '#000000',
    shadowOffset: {width: 0,height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8
  },
  informationCardFirst: {
    marginLeft: 17
  },
  informationCardLast: {
    marginRight: 17
  },
  viewMore: {
    fontSize: 13,
    color: Color.lightText
  },
  imgItem: {
    width: '100%',
    height: 120
  },
  informationBody: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#fff'
  },
  infoHeadLine: {
    fontSize: 14,
    color: Color.darkText,
    lineHeight: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  informationFoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 5
  },
  avatarList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatarItemWrap: {
    width: 15,
    height: 15,
    marginRight: -4,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden'
  },
  avatarItem: {
    width: '100%',
    height: '100%'
  },
  avatarText: {
    color: Color.lightText,
    fontSize: 11
  }
})















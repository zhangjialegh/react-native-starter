import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,Text,TouchableOpacity,Image,Dimensions,SafeAreaView,Platform} from 'react-native';
import { Echarts } from 'react-native-secharts';
import KeyWordsBoard from '../components/KeyWordsBoard'
import PostArticalCard from '../components/PostArticalCard'
import ScrollCard from '../components/ScrollCard'
import Tabs from '../components/Tabs'
import {Color} from '../assets/styles/Base'

// import BaseStyle from '../assets/styles/Style'
export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      w: Dimensions.get('window').width,
      swipeable:Platform.OS === "ios" ? true : false,
      idx: 2
    }
  }

  onSelectExchangeHistory = (idx) => {
    this.setState({idx})
    console.log(this.props,'props');
    
    this.props.navigation.navigate('Detail')
  }

  enableSwipe = () => {
    this.setState({
      swipeable: false
    })
  }

  ableSwipe = () => {
    this.setState({
      swipeable: true
    })
  }
  
  render() {
    const tabs = [
      {title: '精选'},
      {title: '数据看板'}
    ]
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '0%',
        right: '3%',
        top: '5%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color:Color.lightText,
            fontSize: 11
          }
      },
      yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: {
            color:Color.lightText
          }
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 1
          }
      }]
  };

    const option2 = {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
          align: 'left',
          left:  0,
          itemHeight: 1,
          itemWidth: 8,
          itemGap: 5,
          icon:'rect',
          textStyle: {
            color: Color.lightText,
            fontSize: 10
          }
      },
      grid: {
          left: '0%',
          right: '4%',
          bottom: '3%',
          top: '20%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color:Color.lightText,
            fontSize: 11,
            margin: 14
          }
      },
      yAxis: {
          type: 'value',
          interva: 500,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: {
            color:Color.lightText
          }
      },
      series: [
          {
              name:'邮件营销',
              type:'line',
              data:[120, 132, 101, 134, 90, 230, 210],
              showSymbol: false,
              smooth: true,
              lineStyle: {
                width: 1
              }
          },
          {
              name:'联盟广告',
              type:'line',
              data:[220, 182, 191, 234, 290, 330, 310],
              showSymbol: false,
              smooth: true,
              lineStyle: {
                width: 1
              }
          },
          {
              name:'视频广告',
              type:'line',
              data:[150, 232, 201, 154, 190, 330, 410],
              showSymbol: false,
              smooth: true,
              lineStyle: {
                width: 1
              }
          },
          {
              name:'直接访问',
              type:'line',
              data:[320, 332, 301, 334, 390, 330, 320],
              showSymbol: false,
              smooth: true,
              lineStyle: {
                width: 1
              }
          },
          {
              name:'搜索引擎',
              type:'line',
              data:[820, 932, 901, 934, 1290, 1330, 1320],
              showSymbol: false,
              smooth: true,
              lineStyle: {
                width: 1
              }
          }
      ]
  };
    const {w,swipeable} = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.button_wrapper}>
        <Tabs tabs={tabs} width={w/2} swipeable={swipeable}>
          <View style={{flex: 1, width: w}}>
            <ScrollView>
              <KeyWordsBoard/>
              <PostArticalCard navigation={this.props.navigation}/>
              <ScrollCard/>
            </ScrollView>
          </View>
          <View style={{flex: 1, width: w}}>
            <ScrollView>
            <KeyWordsBoard/>
            <View style={styles.exchangeWrapper}>
              <Text style={styles.exchangeTitle}>汇率走势</Text>
              <View style={styles.exchangeDescWrap}>
                <Text style={{
                  fontSize: 17,
                  color: Color.darkText,
                  letterSpacing: 1
                }}>1美元=6.89人民币</Text>
                <View style={styles.ratioWrap}>
                  <View style={{...styles.raticIcon, backgroundColor: '#2B5EAB'}}><Text style={styles.ratioText}>USD</Text></View>
                  <Text style={{fontSize: 10, color: Color.text, marginLeft: 5, marginRight: 5}}>VS</Text>
                  <View style={{...styles.raticIcon, backgroundColor: '#FF4949'}}><Text style={styles.ratioText}>CNY</Text></View>
                </View>
              </View>
              <Echarts option={option} height={150}/>
              <View style={styles.selectList}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>1天</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>1天</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>1天</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={{...styles.selectItem,...styles.selectItemActive}}><Text style={{...styles.selectItemText,...styles.selectItemTextActive}}>1天</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>1天</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={{...styles.selectItem,...styles.selectItemLast}}><Text style={styles.selectItemText}>1天</Text></View>
                </TouchableOpacity>
            </View>
            </View>
            <ScrollCard/>

            <View style={styles.exchangeWrapper}>
              <Text style={styles.exchangeTitle}>全美国产关键投资指标</Text>
              <View style={{marginTop: 20}}>
                <Echarts option={option2} height={220}/>
              </View>
              <View style={styles.selectList}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>房价</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>库存</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={styles.selectItem}><Text style={styles.selectItemText}>DOM</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={{...styles.selectItem,...styles.selectItemActive}}><Text style={{...styles.selectItemText,...styles.selectItemTextActive}}>Sale table</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.onSelectExchangeHistory(1)}>
                  <View  style={{...styles.selectItem,...styles.selectItemLast}}><Text style={styles.selectItemText}>城市</Text></View>
                </TouchableOpacity>
            </View>
            </View>
          </ScrollView>
          </View>
        </Tabs>
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button_wrapper:{
    flex:1
  },


  exchangeWrapper: {
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 15,
    paddingBottom: 5
  },
  exchangeTitle: {
    color: Color.darkText,
    fontSize: 17,
  },
  exchangeDescWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  ratioWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  raticIcon: {
    width: 45,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  ratioText: {
    color: '#fff',
    fontSize: 10
  },
  selectList: {
    height: 30,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.lightBorder,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 15,
  },
  selectItem: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: Color.lightBorder,
  },
  selectItemActive: {
    backgroundColor: Color.lightFill,
  },
  selectItemLast: {
    borderRightWidth: 0
  },
  selectItemText: {
    color:Color.lightBorder,
    fontSize: 12
  },
  selectItemTextActive: {
    color: Color.darkText
  }
})

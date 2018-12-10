import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaView:{
    flex:1,
  },
  section_title:{
    margin:16,
  },
  view_more:{
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: '#eee',
    textAlign:'center',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:36,
    borderTopWidth:1,
    color:'#d5a478'
  },
  view_more_text:{
    color:'#d5a478'
  },
  copyright:{
    marginTop:30,
    marginBottom:30,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
  },
  copyright_text:{
    fontSize:12,
    fontWeight:'200',
    color:'#aaa',
    textAlign:'center',
  },
  icon_btn:{
    width:40,
    height:40,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_icon:{
    marginLeft:5,
    marginTop:2
  },
  textInput:function(status){
    let color = '#dfdfdf'
    switch (status) {
      case 'error':
        color = '#a94442'
        break;
      case 'warn':
        color = '#8a6d3b'
      case 'success':
        color = '#3c763d'
        break;
      default:
        break;
    }
    return {
      height: 40, 
      borderColor: color, 
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
      paddingLeft: 6,
      paddingRight: 6,
    }
  },
  error:{
    color:'#a94442'
  },
  borderRadius: function(n){
    return {
      borderTopLeftRadius: n,
      borderTopRightRadius: n,
      borderBottomLeftRadius: n,
      borderBottomRightRadius: n
    }
  },
  container: {
    paddingLeft: 17,
    paddingRight: 17
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
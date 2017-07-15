import {
    StyleSheet,
    PixelRatio,
} from 'react-native';


let StyleObject = {
      flex:{
          flex:1
      },
      fontSize:{
          fontSize:12,
      },
      flexDirection : {
          flexDirection:'row',
          justifyContent:'space-between'
      },
      absolute:{
          position: "absolute",
          top: 0, left: 0, bottom: 0, right: 0,
      },
      center:{
          justifyContent:'center',
          alignItems:"center"
      },
      nav: {
          alignItems:'center',
          height:45,
          borderBottomColor:'#ddd',
          //borderBottomWidth:1/PixelRatio.get(),
      },
      navRight: {
          marginRight:20
      },
      navLeft: {
          marginLeft:20
      },
      fullIcon: {
          backgroundColor:'#999',
          width:25,
          height:25,
          borderRadius:50,
      },
      fullIconCenter: {
          color:'#fff',
          textAlign:'center',
          lineHeight:22
      },
      active:{
          color:'#fd0841'
      },
      tab: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
      tabs: {
          height:45,
          flexDirection: 'row',
      },
      tabView: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.01)',
      },
      card: {
            borderWidth:1/PixelRatio.get(),
            backgroundColor: '#fff',
            borderColor: 'rgba(0,0,0,0.1)',
            height: 40,
            paddingLeft: 15,
            paddingRight:15,
            marginTop:-1,
      },
      splitLine: {
            marginBottom:8,
      },
      cardDetail:{
          marginTop:-1,
          paddingLeft:25,
          paddingRight:25,
          borderWidth:1/PixelRatio.get(),
          backgroundColor: '#fff',
          borderColor: 'rgba(0,0,0,0.1)',
      },
      bottomCard:{
          marginBottom:5,
      },
      userImg:{
          height:250,
          position:'relative'
      },
      headImg:{
        width:640,
        height:250
      },
      blurImg:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,left:0,right:0,bottom:0,
        backgroundColor:'rgba(255,155,155,.3)'
      },
      borderImg:{
        height:100,
        width:100,
        borderRadius:50,
      },
      position:{
          position:'absolute',
          bottom:'9%',
          right:'44%',
      },
       textColor:{
          color:'#fff',
       },
       activeTextColor:{
           color:'#F80C49'
       },
       supText:{
           fontSize:12,
           marginBottom:10,
       },
       subText:{
            fontSize:15
       },
       button:{
           width:30,
           height:30,
           alignItems:'center',
           justifyContent:'center',
           borderColor:'#ddd',
       },
       cartShopNum:{
           justifyContent:'center',
           alignItems:'center',
           flexDirection:'row',
           borderWidth:1,
           width:80,
           height:30,
           borderColor:'#ddd',
       },
       cartInput:{
           borderLeftWidth:1,
           borderRightWidth:1,
           borderColor:'#ddd',
           width:25,
           marginBottom:-7,
           textAlign:'center',
       },
       goodsItems:{
            paddingLeft:10,
            flexDirection:'row',
            justifyContent:'space-between',
       },
       indexLayout:{
            backgroundColor:'#fff',
            padding:10
        },
 }

const styles = StyleSheet.create(StyleObject);

export default StyleObject;
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
      tabItemLine:{
          borderBottomWidth:1/PixelRatio.get(),
          borderColor: 'rgba(0,0,0,0.1)',
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
        UserCommenTop:{
            backgroundColor:'#fff', 
            paddingLeft:15,
            paddingRight:15,
            paddingTop:8,
            paddingBottom:8,
            alignItems:'center',
        },
        UserCommenSplitLine:{
            borderWidth:1/PixelRatio.get(),
            borderColor:'#ddd',
            height:40,
        },
        UserCommenSubLayout:{
            paddingTop:10,
            paddingBottom:10, 
        },
        UserCommenText:{
            color:'#1d1d1d',
            marginBottom:10
        },
        UserCommenTopLeft:{
            alignItems:'flex-start',
        },
        UserCommenTopRight:{
            alignItems:'flex-end',
        },
        UserCommenMarginBottom:{
            marginBottom:8
        },
        UserCommenTopText:{
            fontSize:20,
            color:'#1d1d1d'
        },
        UserCommenTitle:{
            paddingTop:8,
            paddingBottom:8,
            paddingLeft:10,
            backgroundColor:'#F6F6F6',
            borderTopWidth:1/PixelRatio.get(),
            borderColor:'#ddd',
            borderBottomWidth:1/PixelRatio.get(),
        },
        UserCommenItem:{
            paddingLeft:10,
            paddingRight:10,
            backgroundColor:'#fff',
            borderColor:'#ddd',
            borderTopWidth:0,
            borderBottomWidth:1/PixelRatio.get(),
        },
        UserCommenItemTop:{
            marginBottom:10,
            paddingTop:10,
        },
        UserCommenBottom:{
            paddingLeft:15,
            paddingRight:15,
            backgroundColor:'#fff',
            paddingBottom:8,
            paddingTop:8,
        },
        UserCommenBottomCommen:{
            paddingTop:10,
            paddingBottom:10,
            flex:1,
            borderRadius:5,
            alignItems:'center',
        },
        UserCommenBottomLeft:{
            marginRight:5,
            backgroundColor:'#D5D5D5',
        },
        UserCommenBottomRight:{
            marginLeft:5,
            backgroundColor:'#FD0744',
        },
        UserFundReContainer:{
            flex:1,
            paddingTop:15,
            paddingLeft:15,
            paddingRight:15,
            justifyContent:'space-between'
        },
        UserFundReTop:{
            borderRadius:5,
            backgroundColor:'#fff',
            paddingBottom:5,
            paddingTop:5
        },
        UserFundReTopText:{
            marginTop:10,
            paddingLeft:15,
            borderBottomWidth: 1/PixelRatio.get(),
            borderColor:"#ddd"
        },
        UserFundReTopNum:{
            flexDirection:'row',
            alignItems:'center',
            paddingTop:10,
            paddingBottom:10
        },
        UserFundReTopNumText:{
            fontSize:20,
            color:'#919191'
        },
        UserFundReStatus:{
            borderRadius:10,
            paddingTop:1,
            paddingBottom:1,
            paddingLeft:5,
            paddingRight:5
        },
        UserFundStatus:{
            backgroundColor:'#2C90FE',
        },
        UserReStatus:{
            backgroundColor:"#00DBB2",
        },
        UserFundReStatusText:{
            fontSize:10,
            color:'#fff',
        },
        UserFundReBottom:{
            paddingLeft:25,
            paddingRight:25,
        },
        UserFundReMarginRight:{
            marginRight:30,
        },
        receiveAddrModal:{
            backgroundColor:"rgba(0,0,0,.5)"
        },
        receiveAddrModalContainer:{
            backgroundColor:"#fff",
            width:300,
            height:100,
            borderRadius:10
        },
        receiveAddrButton:{
            height:40,
            borderTopWidth:1/PixelRatio.get(),
            borderColor:'#ddd'
        },
}

const styles = StyleSheet.create(StyleObject);

export default StyleObject;
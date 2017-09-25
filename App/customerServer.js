import React,{Component } from 'react';
import {
        StyleSheet,
        Text,
        View,
        Image,
        TextInput,
        StatusBar,
        PixelRatio,
        TouchableOpacity,
        ScrollView,
        FlatList,
        Dimensions
} from 'react-native';
import StyleObject from './styleSheet.js';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const chat = [
  {
    messageId:1,
    messageType: 'text',
    message : '123',
    status: "send_succeed",
    user: {
      id: 2,
      name: 'react-native',
      avatar: 'https://facebook.github.io/react/img/logo_og.png'
    }
  }
];

const robot = [
  {

  }
];

export default class CustomerServer extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = ({navigation}) => ({
    headerTitle: "你的小兔",
    headerTitleStyle: {alignSelf: 'center',justifyContent:'center',fontSize:14,color:'#ff003a'},
    headerStyle: {height:50,paddingTop:20},
    headerLeft: (
        <TouchableOpacity onPress={ ()=>navigation.goBack()}>
          <Icon name="ios-arrow-back" size={25} color="#1d1d1d" style={{marginLeft:10}}/>
        </TouchableOpacity>
    ),
    headerRight:(
        <View style={{width:20}}>
        </View>
    )
  });

  render(){
    return(
        <View style={[StyleObject.flex]}>
        <View style={[StyleObject.flex,styles.chatContainer]}>

          <View style={[StyleObject.flexRow,styles.chatLeft]}>
             <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png' }} style={styles.chatAvatar} />
             <View style={[styles.customerChat]}>
                 <Text style={{lineHeight: 20}}>
                    你好欢迎来到U兔购的世界！A我是你的小兔,你有什么问题需要问我的，我知无不言，言无不尽
                </Text>
             </View>
          </View>


          <View style={[StyleObject.flexRow,styles.chatRight]}>
            <View style={[styles.customerChat,styles.customerChatRight]}>
                <Text style={{lineHeight: 20}}>
                  你叫什么名字
                </Text>
            </View>
        <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png' }} style={styles.chatAvatar} />

          </View>



        </View>

        <View style={styles.customerBottomContainer}>
        <View style={styles.customerBotomItemContainer}>
          <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
          >
            <View style={{justifyContent: 'center'}}>
               <Text>我想</Text>
            </View>
            <TouchableOpacity style={[styles.customerBtn]}>
              <Text> 商品活动 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.customerBtn]}>
              <Text>优惠券</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.customerBtn]}>
              <Text> 买家秀 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.customerBtn]}>
              <Text>订单查询</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.customerBtn]}>
              <Text> 商品活动 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.customerBtn]}>
              <Text>优惠券</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={[StyleObject.flex,StyleObject.flexRow]}>
        <TouchableOpacity style={[StyleObject.center,{width:40}]}>
            <Icon name="ios-mic-outline" size={25} color="#f3084a"/>
          </TouchableOpacity>
        <View style={[styles.customerUserInput]}>
          <TextInput
               underlineColorAndroid="transparent"
               style={{padding:0}}
               mutiline={true}
          />
        </View>

       <TouchableOpacity style={[StyleObject.center,{width:40}]}>
          <Icon name="md-happy" size={25} color="#f3084a"/>
       </TouchableOpacity>
       <TouchableOpacity style={[StyleObject.center,{width:40}]}>
          <Icon name="ios-add-circle-outline" size={25} color="#f3084a"/>
       </TouchableOpacity>
        </View>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  customerBtn:{
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1/PixelRatio.get(),
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    justifyContent: 'center'
  },
  customerUserInput: {
    borderWidth:1,
    borderColor:'#ddd',
    flex: 1,
    paddingLeft: 5
  },
  customerChat:{
    borderWidth:1,
    borderRadius: 8,
    backgroundColor:'#fff',
    borderColor: "#ddd",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8
  },
  customerChatRight:{
    alignItems: 'flex-end'
  },
  chatLeft:{
    justifyContent:'flex-start',
    paddingRight: 20
  },
  chatRight:{
    justifyContent:'flex-end',
    paddingLeft:20
  },
  chatContainer:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10
  },
  chatAvatar:{
    width:30,
    height:30
  },
  customerBottomContainer:{
    backgroundColor:'#fff',
    height:80,
    paddingTop:10,
    paddingBottom:10,
    justifyContent: "center"
  },
  customerBotomItemContainer:{
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10
  }
});

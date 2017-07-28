import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';
import StyleObject from './styleSheet.js';
import Tab from './tab';
import Icon from 'react-native-vector-icons/Ionicons';
import Person from './person';
import UserInfo from './userInfo';
import CartSelectBar from './cart';
import OrderList from './order';
import Goods from './goods';
import Nav from './navigator';
import Cart from './cart';
import MySwiper from './swiper.js';
import Lucky from './index_lucky';
import Recommen from './recommen';
import HotSale from './hotSale';
import Classify from './classify';
import Search from './search';
import { StackNavigator,TabNavigator } from 'react-navigation';
import GoodsDetailNav from './goodsDetail';
import Index from './index';
import RealName from './realName';
import PickPoints  from './pickerPoints';
import CameraPicker from './comeraImage';
import UserMoney from './userMoney';
import UserAccount from './userAccount';
import Integral from './integral';
import EleCoupons from './eleCoupons';
import GiftBag from './giftBag';
import SmallChange from './smallChange';
import Swfunds from './swfunds';
import ReCharge from './reCharge';
import AccountSafe from './accountSafe';
import FundsManage from './fundsManage';
import GratefulMan from './gratefulMan';
import ReceiveAddr from './receiveAddr';
import EditAddr from './editAddr';
import AddNewAddr from './addNewAddr';
import OrderScreen from './order';

const goodsData = [
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1un0JQFXXXXcUXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i2/TB1zDSDRFXXXXXqXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i8/TB1vLcbQXXXXXakXpXXYXGcGpXX_M2.SS2_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1HavXSXXXXXXzXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
        price:'¥ 320',
        num:50,
    },
];

const goodsItemData = [
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1gzs5RXXXXXalXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i3/TB1un0JQFXXXXcUXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i2/TB1zDSDRFXXXXXqXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
    },
    {
        img:'https://img.alicdn.com/bao/uploaded/i8/TB1vLcbQXXXXXakXpXXYXGcGpXX_M2.SS2_430x430q90.jpg',
        detailText:'皮肤补水站-温和修护，璀璨焕白',
    },
];

const brand =[
    {
        img:'http://img.alicdn.com/imgextra/i3/2968874950/TB2ncCYX1rAQeBjSZFPXXXbmXXa_!!2968874950.jpg_640x640q50.jpg',
        brandName:'卡姿兰'
    },
    {
        img:'http://img.alicdn.com/imgextra/i3/2968874950/TB2ncCYX1rAQeBjSZFPXXXbmXXa_!!2968874950.jpg_640x640q50.jpg',
        brandName:'卡姿兰'
    },
    {
        img:'http://img.alicdn.com/imgextra/i3/2968874950/TB2ncCYX1rAQeBjSZFPXXXbmXXa_!!2968874950.jpg_640x640q50.jpg',
        brandName:'卡姿兰'
    },
    {
        img:'http://img.alicdn.com/imgextra/i3/2968874950/TB2ncCYX1rAQeBjSZFPXXXbmXXa_!!2968874950.jpg_640x640q50.jpg',
        brandName:'卡姿兰'
    },
    {
        img:'http://img.alicdn.com/imgextra/i3/2968874950/TB2ncCYX1rAQeBjSZFPXXXbmXXa_!!2968874950.jpg_640x640q50.jpg',
        brandName:'卡姿兰'
    },
    {
        img:'http://img.alicdn.com/imgextra/i3/2968874950/TB2ncCYX1rAQeBjSZFPXXXbmXXa_!!2968874950.jpg_640x640q50.jpg',
        brandName:'卡姿兰'
    },
];

const imagesData = [
    {
      uri:'https://img.alicdn.com/bao/uploaded/i3/TB14c1tSXXXXXbjXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg'
    },
    {
      uri:'https://img.alicdn.com/imgextra/i1/822320219/TB2sXdsoXXXXXXLXpXXXXXXXXXX_!!822320219.jpg_430x430q90.jpg'
    },
    {
      uri:'https://img.alicdn.com/imgextra/i1/822320219/TB2rPFEoXXXXXbiXXXXXXXXXXXX_!!822320219.jpg_430x430q90.jpg'
    },
    {
      uri:'https://img.alicdn.com/bao/uploaded/i2/TB13paDSXXXXXb7XpXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg'
    },
];

class IndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagesData:imagesData,
            goodsItemData:goodsItemData,
            goodsData:goodsData,
            brand:brand,
      };
    }
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel:'首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' size={20} color={tintColor}/>
        ),
        headerTitle:'U兔购',
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20},
        headerLeft:
                    <TouchableOpacity style={{marginLeft:15}} onPress={()=>navigation.navigate('Search')}>
                        <Icon name='ios-search' size={20}/>
                    </TouchableOpacity>,
        headerRight:
                    <TouchableOpacity style={{marginRight:15}}>
                        <Icon name='ios-qr-scanner-outline' size={20}/>
                    </TouchableOpacity>,
    });
    render(){
         const { navigate } = this.props.navigation;
        return(
            <View style={{flex:1,}}>
                <ScrollView>
                        <Index
                                imagesData={this.state.imagesData}
                                goodsItemData={this.state.goodsItemData}
                                brand={this.state.brand}
                                goodsData={this.state.goodsData}
                                // toGoodsDetail={(data)=>{navigate('GoodsDetail',{callback:(data)=>{console.log(data)}});console.log(data)}}
                                navigation={this.props.navigation}
                        />
                </ScrollView>
           </View>
        )
    }
}

class ClassifyPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel:'分类',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-keypad' size={20} color={tintColor}/>
        ),
        headerTitle:'U兔购',
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20},
        headerLeft:
                    <TouchableOpacity style={{marginLeft:15}} onPress={() => navigation.navigate('Search')}>
                        <Icon name='ios-search' size={20}/>
                    </TouchableOpacity>,
        headerRight: <TouchableOpacity style={{marginRight:15}}>
                        <Icon name='ios-qr-scanner-outline' size={20}/>
                    </TouchableOpacity>,
    });
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff',}}>
                <Classify/>
           </View>
        )
    }
}

class CartPage extends Component {
    static navigationOptions = {
        tabBarLabel:'购物车',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-cart' size={20} color={tintColor}/>
        ),
        headerTitle:'购物车',
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20},
        headerLeft: null,
        headerRight: <TouchableOpacity style={{marginRight:15}}>
                        <Text style={StyleObject.fontSize}>完成</Text>
                    </TouchableOpacity>,
    };
    render(){
        return(
          <View style={{flex:1,}}>
                <Cart/>
           </View>
        )
    }
}

class PersonPage extends Component {
    static navigationOptions = {
        tabBarLabel:'我的',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='md-person' size={20} color={tintColor}/>
        ),
        header:null,
    };
    render(){
        return(
          <View>
                <Person  navigation={this.props.navigation}/>
           </View>
        )
    }
}

const UserCenterNavigator = TabNavigator({
    IndexPage: {
        screen: IndexPage,
    },
    ClassifyPage: {
        screen: ClassifyPage,
    },
    CartPage: {
        screen: CartPage,
    },
    PersonPage: {
        screen: PersonPage,
    },
},{
    tabBarPosition:'bottom',
    swipeEnabled:true,
    initialRoutename:'IndexPage',
    tabBarOptions:{
        activeTintColor:'#FC0844',
        inactiveTintColor:'#1d1d1d',
        showIcon:true,
        scrollEnabled:false,
        lazy:false,
        pressOpacity:0.5,
        tabStyle:{
            flex:1,
            justifyContent:'space-between',
            paddingBottom:0,
            paddingTop:0,
        },
        labelStyle:{
            fontSize:12,
            marginTop:2,
            marginBottom:5,
        },
        style:{
            backgroundColor:'#fff',
            borderTopWidth:1 / PixelRatio.get(),
            borderTopColor:'#ddd',
            height:45,
            padding:0,
        },
    }
});


const UserCenter = StackNavigator({
    Home: {
        screen: UserCenterNavigator,
    },
    UserInfo: {
        screen: UserInfo,
    },
    Cart: {
        screen: CartPage,
    },
    RealName: {
        screen: RealName,
    },
    PickPoints :{
        screen:  PickPoints ,
    },
    CameraPicker :{
        screen: CameraPicker,
    },
    UserMoney:{
        screen: UserMoney,
    },
    UserAccount:{
        screen: UserAccount,
    },
    Integral:{
        screen: Integral,
    },
    EleCoupons:{
        screen: EleCoupons,
    },
    GiftBag:{
        screen: GiftBag,
    },
    SmallChange:{
        screen: SmallChange,
    },
    Swfunds:{
        screen: Swfunds,
    },
    ReCharge:{
        screen: ReCharge,
    },
    AccountSafe:{
        screen: AccountSafe,
    },
    FundsManage:{
        screen: FundsManage,
    },
    GratefulMan:{
        screen: GratefulMan,
    },
    ReceiveAddr:{
        screen: ReceiveAddr,
    },
    EditAddr:{
        screen: EditAddr,
    },
    AddNewAddr:{
        screen: AddNewAddr,
    },
    Order:{
        screen: OrderScreen,
    },
    Search: { screen: Search },
    GoodsDetail: { screen: GoodsDetailNav },
});

/*const StackOptions = ({navigation}) => {
    console.log(navigation);
    let {state,goBack} = navigation;

    // 用来判断是否隐藏或显示header
    const visible= state.params.isVisible;
    let header;
    if (visible === true){
        header = null;
    }
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const headerTitle = state.params.title;
    const headerTitleStyle = {fontSize:FONT_SIZE(20),color:'white',fontWeight:'500'}
    const headerBackTitle = false;
    const headerLeft = (
        <Button
            isCustom={true}
            customView={
                            <Icon
                                name='ios-arrow-back'
                                size={30}
                                color='white'
                                style={{marginLeft:13}}
                            />
                        }
            onPress={()=>{goBack()}}
        />
    );
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
};*/

export default UserCenter;

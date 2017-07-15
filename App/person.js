import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Tab from './tab';
import Icon from 'react-native-vector-icons/Ionicons';
import UserInfo from './userInfo';
import Nav from './navigator';
import { StackNavigator } from 'react-navigation';
//const imgUri = ;
class HeadImg extends Component {
    constructor(props){
        super(props);
    }
    render(){
    const {imgUri,subTitle,supTitle,icon} = this.props;
        return (
            <View>

                <Image source={require('./../images/head.jpg')}
                       style={StyleObject.headImg}
                >
                <View style={StyleObject.blurImg}></View>
                <Icon name='ios-home' size={40}
                    color = {'#fff'}
                    style={{position:'absolute',top:40,left:160}}
                />
                <View style={[StyleObject.flex,StyleObject.center,{justifyContent:'flex-end'}]}>
                    <Image source={require('./../images/head.jpg')}
                           style={StyleObject.borderImg}
                    />
                    <Text style={[StyleObject.textColor,StyleObject.subText]}>{this.props.subTitle}</Text>
                    <Text style={[StyleObject.textColor,StyleObject.supText]}>{this.props.supTitle}</Text>
                    <Icon name='ios-home' size={25}
                        style={StyleObject.position}
                        color = {'#000'}
                        style={{position:'absolute',bottom:50,left:350}}
                    />
                </View>
                </Image>
            </View>
        )
    }
}

const flatData = [
    {
       barType:'barDetail',
       icon : 'ios-people',
       iconColor:'#ff9900',
       iconSize:20,
       title:'账户余额',
       subTitle:'986700'
    },
    {
       barType:'barDetail',
       icon : 'ios-people',
       iconColor:'#fe3e1b',
       iconSize:20,
       title:'积分',
       subTitle:'986700'
    },
    {
       barType:'barDetail',
       icon : 'ios-people',
       iconColor:'#ff9900',
       iconSize:20,
       title:'礼包',
       subTitle:'986700'
    },
    {
       barType:'barDetail',
       icon : 'ios-people',
       iconColor:'#ff9900',
       iconSize:20,
       title:'电子券',
       subTitle:'986700'
    },
    {
       barType:'barDetail',
       icon : 'ios-people',
       iconColor:'#ff9900',
       iconSize:20,
       title:'财富基金',
       subTitle:'986700'
    },
    {
       barType:'barDetail',
       icon : 'ios-people',
       iconColor:'#ff9900',
       iconSize:20,
       title:'重复消费',
       subTitle:'986700'
    },
];

export default class Person extends Component {
    constructor(props){
        super(props);
    }

    RenderItem({itemData},type){
        if(type){
            return (
                <Tab
                    barType = {itemData.barType}
                    icon = {itemData.icon}

                    iconColor = {itemData.iconColor}
                    title = {itemData.title}
                    subTitle = {itemData.subTitle || null}
                    iconSize = {itemData.iconSize || 25}
               />
            )
        }else{
            return (
                    <View style={[StyleObject.card]}>
                        <Tab
                            barType = {itemData.barType}
                            icon = {itemData.icon}

                            iconColor = {itemData.iconColor}
                            title = {itemData.title}
                            subTitle = {itemData.subTitle || null}
                            iconSize = {itemData.iconSize || 25}
                       />
                    </View>
            )
        }
    }


    render(){
      const { navigate } =  this.props.navigation;
        return(
            <ScrollView>
                <StatusBar
                    translucent={true}
                    backgroundColor='transparent'
                    barStyle='dark-content'
                />
                <View style={[StyleObject.userImg,StyleObject.center]}>
                    <HeadImg
                        subTitle='一只麋鹿'
                        supTitle='普通会员'
                    />
                </View>
                <TouchableOpacity
                    onPress= {()=> Alert.alert(
                        '全部订单',
                        '订单信息',
                        [
                            {text:'一会再说',onPress:()=> console.log('Ask me later pressed')},
                            {text:'取消',onPress:()=> console.log('Cancel Pressed')},
                            {text:'确认',onPress:()=> console.log('Ok Pressed')}
                        ],
                        { cancelable:false }
                    )}>
                    <View style={StyleObject.card}>
                        <Tab
                            barType = 'tabBar'
                            icon = 'ios-people'
                            iconColor = '#F9A703'
                            title = '全部订单'
                        />
                    </View>
                </TouchableOpacity>
                 <View style={[StyleObject.flexDirection,StyleObject.splitLine,StyleObject.cardDetail]}>
                        <Tab
                            barType = 'barSup'
                            icon = 'ios-people'
                            iconColor = '#50CAFE'
                            title = '待付款'
                            iconSize = {25}
                        />
                        <Tab
                            barType = 'barSup'
                            icon = 'ios-people'
                            iconColor = '#50CAFE'
                            title = '待发货'
                            iconSize = {25}
                        />
                        <Tab
                            barType = 'barSup'
                            icon = 'ios-people'
                            iconColor = '#50CAFE'
                            title = '待收货'
                            iconSize = {25}
                            subTitle = '16'
                        />
                        <Tab
                            barType = 'barSup'
                            icon = 'ios-people'
                            iconColor = '#50CAFE'
                            title = '已完成'
                            iconSize = {25}
                        />
                </View>
                <View style={StyleObject.card}>
                            <Tab
                                barType = 'tabBar'
                                icon = 'ios-people'
                                iconColor = '#FF0E4F'
                                title = '我的资产'
                            />
                </View>

                <FlatList
                    data={flatData}
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item})=> this.RenderItem({itemData: item},true) }
                    style={[StyleObject.cardDetail,StyleObject.splitLine,StyleObject.flex]}
                    ListFooterComponent={
                                             <View style={{marginRight:50}}>
                                                <Tab
                                                     barType = 'barDetail'
                                                     icon = 'ios-people'
                                                     iconColor = '#FF0E4F'
                                                     title = '零钱'
                                                     iconSize= {20}
                                                     subTitle = '986700'
                                                 />
                                             </View>
                                         }
                />
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('UserInfo')}
                >
                    <View style={StyleObject.card}>
                        <Tab
                            barType = 'tabBar'
                            icon = 'ios-people'
                            iconColor = '#FA0045'
                            title = '用户信息'
                        />
                    </View>
                </TouchableOpacity>
                <View style={StyleObject.card}>
                            <Tab
                                barType = 'tabBar'
                                icon = 'ios-people'
                                iconColor = '#FD4347'
                                title = '账户安全'
                            />
                </View>
                <View style={StyleObject.card}>
                    <Tab
                        barType = 'tabBar'
                        icon = 'ios-people'
                        iconColor = '#FCC721'
                        title = '资金管理'
                    />
                </View>
                <View style={StyleObject.card}>
                            <Tab
                                barType = 'tabBar'
                                icon = 'ios-people'
                                iconColor = '#0CB85C'
                                title = '收货地址'
                            />
                </View>
                <View style={StyleObject.card}>
                    <Tab
                        barType = 'tabBar'
                        icon = 'ios-people'
                        iconColor = '#FE0100'
                        title = '感恩人'
                    />
                </View>
                <View style={[StyleObject.card,StyleObject.splitLine]}>
                            <Tab
                                barType = 'tabBar'
                                icon = 'ios-people'
                                iconColor = '#B02EE2'
                                title = '我的下级'
                            />
                </View>
                <View style={StyleObject.card}>
                    <Tab
                        barType = 'tabBar'
                        icon = 'ios-people'
                        iconColor = '#64AEED'
                        title = '我的订单'
                    />
                </View>
                <View style={StyleObject.card}>
                            <Tab
                                barType = 'tabBar'
                                icon = 'ios-people'
                                iconColor = '#EF181B'
                                title = '退款/退货及维修'
                            />
                </View>
                <View style={StyleObject.card}>
                    <Tab
                        barType = 'tabBar'
                        icon = 'ios-people'
                        iconColor = '#09D9A5'
                        title = '商品评价/晒单'
                    />
                </View>
                <View style={[StyleObject.card,StyleObject.splitLine]}>
                            <Tab
                                icon = 'ios-people'
                                iconColor = '#F6C40C'
                                title = '商品收藏'
                                barType = 'tabBar'
                            />
                </View>
                <View style={StyleObject.card}>
                    <Tab
                        icon = 'ios-people'
                        iconColor = '#02AEF8'
                        title = '投诉'
                        barType = 'tabBar'
                    />
                </View>
                <View style={StyleObject.card}>
                            <Tab
                                icon = 'ios-people'
                                iconColor = '#009E57'
                                title = '版本更新'
                                barType = 'tabBar'
                            />
                </View>
                <View style={[StyleObject.card,StyleObject.bottomCard]}>
                    <Tab
                        icon = 'ios-people'
                        iconColor = '#C256F0'
                        title = '清除缓存'
                        barType = 'tabBar'
                    />
                </View>
            </ScrollView>
        )
    }
}

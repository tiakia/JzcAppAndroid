import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions,
  PixelRatio
} from 'react-native';
import StyleObject from './styleSheet.js';
import MySwiper from './swiper.js';
import Lucky from './index_lucky';
import Recommen from './recommen';
import HotSale from './hotSale';
import Nav from './navigator';

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            imagesData:props.imagesData,
            goodsItemData:props.goodsItemData,
            brand:props.brand,
            goodsData:props.goodsData
        };
    }
    // goodsDetail={this.props.toGoodsDetail}
    render(){
        return(
            <View style={[StyleObject.flex,]}>
                <View>
                    <MySwiper imagesData={this.state.imagesData} type="index"/>
                </View>
                <View style={styles.mainSplitLine}>
                    <Lucky />
                </View>
                <View style={[styles.mainSplitLine,{backgroundColor:'#fff'}]}>
                    <Recommen goodsItemData={this.state.goodsItemData} 
                              type='recommen' 
                              navigation={this.props.navigation}
                    />
                </View>
                <View style={styles.mainSplitLine}>
                    <Image source={{uri:'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'}}
                           style={{height:100,width:Dimensions.get('window').width}}
                    />
                </View>
                <View style={[styles.mainSplitLine,{backgroundColor:'#fff'}]}>
                <Recommen  type='brand' brand={this.state.brand}
                       xx    navigation={this.props.navigation}
		/>
                </View>
                <View style={[styles.mainSplitLine,{backgroundColor:'#fff'}]}>
                    <Recommen  type='goods' goodsData={this.state.goodsData} navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    goodsDetailContainer: {
        paddingLeft: 15,
        paddingRight: 15
    },
    goodsDetailMainColor: {
        color: '#FE1549'
    },
    goodsDetailSplitLine: {
        marginBottom: 10
    },
    goodsDetailText: {
        fontSize: 16,
        color: '#1d1d1d'
    },
    goodsDetailShareLine: {
        borderWidth: 1 / PixelRatio.get(),
        height: 30,
        borderColor: '#E3E3E3',
        marginTop: 8
    },
    goodsDetailSendCode: {
        backgroundColor: '#fc104b',
        color: '#fff',
        fontSize: 10,
        height: 15,
        padding: 1,
        borderRadius: 2,
        marginLeft: 15
    },
    goodsDetailBottomBar: {
        paddingTop: 8,
        paddingBottom: 5,
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#999',
    },
    shopDetail: {
        width: '33%'
    },
    shopDetailSplit: {
        marginBottom: 5
    },
    shopDetailEva: {
        marginLeft: 5,
        color: '#F80E50',
    },
    shopDetailBtn: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    shopButton: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
        borderColor: '#FD0841',
        borderWidth: 1 / PixelRatio.get(),
        marginTop: 20,
        marginBottom: 10,
        width: 80,
    },
    modal: {
        flex: 1, justifyContent: 'flex-end',
        backgroundColor:'rgba(0,0,0,.3)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        height: 500,
        justifyContent: 'space-between'
    },
    modalContainerArea:{
        backgroundColor:'#fff',
        height:300,
    },
    modalShareContent:{
        backgroundColor:"#fff",
        paddingLeft:20,
        paddingRight:20,
    },
    modalMemberContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    modalMemberLine: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#ddd',
        paddingBottom: 15,
        paddingTop: 10,
    },
    modalTitle: {
        marginTop: 25,
        marginBottom: 25
    },
    modalBottomBtn: {
        backgroundColor: '#FF1A4B',
        height: 50
    },
    memberEve: {
        width: '40%',
    },
    shareIcon:{
        marginTop:10
    },
    cancleShare:{
        marginBottom:10,
        marginTop:10,
        borderWidth:1/PixelRatio.get(),
        borderColor:'#333',
        borderRadius:20,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
    },
});

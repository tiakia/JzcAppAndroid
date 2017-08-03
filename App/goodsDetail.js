
import React, { Component } from 'react';
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
    PixelRatio,
    Modal,
    TouchableHighlight,
    Picker,
    Dimensions,
} from 'react-native';
import GoodsDetailBar from './goodsDetailBar';
import StyleObject from './styleSheet.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Person from './person';
import UserInfo from './userInfo';
import CartSelectBar from './cart';
import OrderList from './order';
import Goods from './goods';
import Nav from './navigator';
import Area from './area.json';
import Cart from './cart';
import MySwiper from './swiper.js';
import Login from './login_registe.js';
import UserCenter from './userCenter';
import { StackNavigator } from 'react-navigation';
import Index from './index';
import ModalContent from './Modal';
const goodsDetailBar = [
    { "tabName": '首页', 'tabIconName': 'ios-home-outline', 'isGoPage': true },
    { "tabName": '客服', 'tabIconName': 'ios-keypad', 'isGoPage': true },
    { "tabName": '收藏', 'tabIconName': 'ios-star-outline', 'isGoPage': false },
    { "tabName": '加入购物车', 'tabIconName': null, 'isGoPage': false },
    { "tabName": '立即购买', 'tabIconName': null, 'isGoPage': true },
];

const imagesData = [
    {
        uri:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg'
    },
    {
        uri:'https://img.alicdn.com/imgextra/i4/2653351646/TB2tKIDnYFkpuFjy1XcXXclapXa_!!2653351646.jpg_430x430q90.jpg'
    },
    {
        uri:'https://img.alicdn.com/imgextra/i3/2653351646/TB2L6GvqYlmpuFjSZFlXXbdQXXa_!!2653351646.jpg_430x430q90.jpg'
    },
    {
        uri:'https://img.alicdn.com/imgextra/i4/2653351646/TB2Rf.An88kpuFjSspeXXc7IpXa_!!2653351646.jpg_430x430q90.jpg'
    },
];

const imageDetailData = [
    {
        url:'https://img.alicdn.com/imgextra/i1/2360209412/TB2CEbop4BmpuFjSZFDXXXD8pXa-2360209412.jpg'
    },
    {
        url:'https://img.alicdn.com/imgextra/i4/3038920123/TB2uAZXuxxmpuFjSZFNXXXrRXXa_!!3038920123.jpg'
    },
    {
        url:'https://img.alicdn.com/imgextra/i2/2064892827/TB29RugnYlmpuFjSZFlXXbdQXXa-2064892827.jpg'
    },
    {
        url:'https://img.alicdn.com/imgextra/i2/3038920123/TB2hMPLuEhnpuFjSZFpXXcpuXXa_!!3038920123.jpg'
    },
]
class GoodsDetailNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsDetailBar:goodsDetailBar,
            imagesData:imagesData, //商品轮播图
            goodsText:goodsText,//产品参数
            imageDetailData:imageDetailData, //商品详情图
            goodsText:goodsText,
            memberDetail:memberDetail,
            modalVisible:false,
            prov:[],
            city:[],
            area:[],
            selectProvince:Area[0].name,
            selectCity:Area[0].city[0].name,
            selectArea:Area[0].city[0].area[0],
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.modalShow = this.modalShow.bind(this);
    }
    static navigationOptions = {
        header:null,
    };
    handleSelect(prov,city,area){
        this.setState({
            prov:prov,
            city:city,
            area:area,
            modalVisible: false,
        });
    }
    modalShow(type,isShow){
        this.setState({
            modalType:type,
            modalVisible:isShow,
        });
    }
    render() {
        let goodsDetailBar = this.state.goodsDetailBar;
        const { navigate,goBack,state } = this.props.navigation;
        console.log(state.params.info);
        return (
                <View style={{flex:1}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <GoodDetail
                                    imagesData = {this.state.imagesData}
                                    imageDetailData = {this.state.imageDetailData}
                                    goToBack={()=>{goBack(null)}}
                                    goToCart={()=>navigate('Cart')}
                                    modalShow={this.modalShow}
                        />
                    </ScrollView>
                    <GoodsDetailBar goodsDetailBar={goodsDetailBar}
                                    toIndex ={()=>navigate("Home")}
                                    confirmOrder={()=>navigate("ConfirmOrder")}
                    />
                    <ModalContent 
                              modal={this.state.modalVisible}
                              modalType={this.state.modalType}
                              goodsText={this.state.goodsText}
                              memberDetail={this.state.memberDetail}
                              navigation = {this.props.navigation}
                              handleSelect={this.handleSelect}
                              prov={this.state.prov}
                              city={this.state.city}
                              area={this.state.area}
                              selectProvince={this.state.selectProvince}
                              selectCity={this.state.selectCity}
                              selectArea={this.state.selectArea}
                />
                </View>
        )
    }
};

export class GoodDetail extends Component {
    constructor(props) {
        super(props);
        const { imagesData , imageDetailData } = props;
        this.state={
            imagesData:imagesData,
            imageDetailData:imageDetailData,
            goodsText:props.goodsText,
            memberDetail:props.memberDetail,
            prov: props.prov,
            city:props.city,
            area:props.area,
            selectProvince:props.selectProvince,
            selectCity:props.selectCity,
            selectArea:props.selectArea,
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View  style={{paddingTop:25}}>
                    <MySwiper imagesData={this.state.imagesData}
                              type='goodsDetail'
                              goToBack = {this.props.goToBack}
                              goToCart = {this.props.goToCart}
                     />
                </View>
                <View style={styles.goodsDetailContainer}>
                    <View style={[StyleObject.flexDirection, { alignItems: 'center' }, styles.goodsDetailSplitLine]}>
                        <View>
                            <Text style={styles.goodsDetailText}>炫亮魅力丝绒唇膏 口红 打造性感美唇</Text>
                        </View>
                        <View style={[StyleObject.flexDirection, { marginTop: 8 }]}>
                            <Text style={styles.goodsDetailShareLine}></Text>
                            <TouchableOpacity style={[StyleObject.center, { paddingLeft: 10, }]}
                                              onPress={()=>{this.props.modalShow('share',true)}}
                            >
                                <Ionicons name='ios-share-outline' size={20} color='#999' />
                                <Text style={StyleObject.fontSize}>分享</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.goodsDetailSplitLine, { flexDirection: 'row', alignItems: 'center' },]}>
                        <Text style={[styles.goodsDetailMainColor,StyleObject.fontSize]}>¥ 158</Text>
                        <Text style={[StyleObject.fontSize,styles.goodsDetailSendCode]}>赠送积分：158</Text>
                    </View>

                    <View style={[styles.goodsDetailSplitLine]}>
                        <Text style={[{ textDecorationLine: 'line-through' },StyleObject.fontSize]}>价格：¥300</Text>
                    </View>

                    <View style={[styles.goodsDetailSplitLine, StyleObject.flexDirection]}>
                        <Text style={StyleObject.fontSize}>折扣：8.4折</Text>
                        <Text style={StyleObject.fontSize}>月销0笔</Text>
                        <Text></Text>
                    </View>

                    <TouchableOpacity style={[StyleObject.flexDirection, styles.goodsDetailBottomBar]}
                        onPress={()=>{this.props.modalShow('memberPri',true)}}
                    >
                        <View>
                            <Text style={StyleObject.fontSize}>
                                会员等级价格
                            </Text>
                        </View>
                        <View>
                            <Icon name='angle-right' size={25} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[StyleObject.flexDirection, styles.goodsDetailBottomBar]}
                         onPress={()=>{this.props.modalShow('goodsText',true)}}
                    >
                        <View>
                            <Text style={StyleObject.fontSize}>
                                产品参数
                            </Text>
                        </View>
                        <View>
                            <Icon name='angle-right' size={25} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[StyleObject.flexDirection, styles.goodsDetailBottomBar]}
                            onPress={()=>{this.props.modalShow('areaSelect',true)}}
                    >
                        <View>
                            <Text style={StyleObject.fontSize}>
                                查看自提点
                            </Text>
                        </View>
                        <View>
                            <Icon name='angle-right' size={25} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#F1F1F1',height:10,flex:1,}}>
                </View>
                <View>
                    <Shop />
                </View>
                <View style={{backgroundColor:'#F1F1F1',height:10,flex:1,}}>
                </View>
                <View>
                    <DeatilImages imagesDetail={this.state.imageDetailData}/>
                </View>
            </View>
        )
    }
}
const memberDetail =
[
    { 'level': '普通会员', 'price': 158 },
    { 'level': '微客', 'price': 140 },
    { 'level': '创客', 'price': 140 },
    { 'level': '合伙人', 'price': 140 },
    { 'level': '金牌合伙人', 'price': 140 },
    { 'level': '钻石合伙人', 'price': 140 },
    { 'level': '公司股东', 'price': 140 },
];
const  goodsText = [
    { 'text': '商品名称', 'detail': '炫亮魅力丝绒口红' },
    { 'text': '商品编号', 'detail': 'Ecs000139' },
    { 'text': '商品品牌', 'detail': '花颜' },
    { 'text': '上架时间', 'detail': '2016-05-12' },
    { 'text': '商品重量', 'detail': '35g' },
    { 'text': '商品库存', 'detail': '1445' },
];
//会员价格 产品信息 自提点查看 点击的时候请求数据

// class GoodsDetailThreeBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalVisible: props.modalVisible || false,
//             modalType: props.modalType,
//             goodsText:goodsText,
//             memberDetail:memberDetail,
//             prov: props.prov,
//             city:props.city,
//             area:props.area,
//             selectProvince:props.selectProvince,
//             selectCity:props.selectCity,
//             selectArea:props.selectArea,
//         }
//     }
//     componentWillReceiveProps(nextProps){
//         this.setState({
//             modalVisible:nextProps.modalVisible,
//             modalType:nextProps.modalType,
//         })
//     }
//     render() {
//         return (
//             <View>
//                 <TouchableOpacity style={[StyleObject.flexDirection, styles.goodsDetailBottomBar]}
//                     onPress={() => { this.setState({ modalVisible: true, modalType: 'memberPri' }); }}
//                 >
//                     <View>
//                         <Text style={StyleObject.fontSize}>
//                             会员等级价格
//                         </Text>
//                     </View>
//                     <View>
//                         <Icon name='angle-right' size={25} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[StyleObject.flexDirection, styles.goodsDetailBottomBar]}
//                     onPress={() => { this.setState({ modalVisible: true, modalType: 'goodsText' }); }}
//                 >
//                     <View>
//                         <Text style={StyleObject.fontSize}>
//                             产品参数
//                         </Text>
//                     </View>
//                     <View>
//                         <Icon name='angle-right' size={25} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[StyleObject.flexDirection, styles.goodsDetailBottomBar]}
//                    onPress={() => { this.setState({ modalVisible: true, modalType: 'areaSelect' }); }}
//                 >
//                     <View>
//                         <Text style={StyleObject.fontSize}>
//                             查看自提点
//                         </Text>
//                     </View>
//                     <View>
//                         <Icon name='angle-right' size={25} />
//                     </View>
//                 </TouchableOpacity>
//                 <ModalContent modal={this.state.modalVisible}
//                               modalType={this.state.modalType}
//                               goodsText={this.state.goodsText}
//                               memberDetail={this.state.memberDetail}
//                               navigation = {this.props.navigation}

//                               handleSelect={this.props.handleSelect}

//                               prov={this.state.prov}
//                               city={this.state.city}
//                               area={this.state.area}
//                               selectProvince={this.state.selectProvince}
//                               selectCity={this.state.selectCity}
//                               selectArea={this.state.selectArea}
//                 />
//             </View>
//         )
//     }
// }
//商铺信息
class Shop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ paddingTop: 5, paddingLeft: 10, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ marginRight: 15 }}>
                        <Image source={require('./../images/head.jpg')}
                            style={{ height: 50, width: 50 }}
                        />
                    </View>
                    <View style={{ justifyContent: 'space-between' }}>
                        <Text style={StyleObject.fontSize}>跨境淘</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Icon name='diamond' size={12} color='#0ABAB5' />
                            <Icon name='diamond' size={12} color='#0ABAB5' />
                            <Icon name='diamond' size={12} color='#0ABAB5' />
                            <Icon name='diamond' size={12} color='#0ABAB5' />
                            <Icon name='diamond' size={12} color='#0ABAB5' />
                        </View>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={[StyleObject.center, styles.shopDetail]}>
                        <Text style={[styles.shopDetailSplit,StyleObject.fontSize]}>15264</Text>
                        <Text style={StyleObject.fontSize}>全部商品</Text>
                    </View>
                    <View style={[StyleObject.center, {
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderColor: '#ddd',
                    }, styles.shopDetail]}>
                        <Text style={[styles.shopDetailSplit,StyleObject.fontSize]}>3577</Text>
                        <Text style={StyleObject.fontSize}>关注人数</Text>
                    </View>
                    <View style={[StyleObject.center, styles.shopDetail]}>
                        <View style={[styles.shopDetailSplit, StyleObject.flexDirection]}>
                            <Text style={StyleObject.fontSize}>商品描述</Text>
                            <Text style={[StyleObject.fontSize,styles.shopDetailEva]}>5.0</Text>
                        </View>
                        <View style={[styles.shopDetailSplit, StyleObject.flexDirection]}>
                            <Text style={StyleObject.fontSize}>卖家服务</Text>
                            <Text style={[StyleObject.fontSize,styles.shopDetailEva]}>5.0</Text>
                        </View>
                        <View style={[styles.shopDetailSplit, StyleObject.flexDirection]}>
                            <Text style={StyleObject.fontSize}>物流服务</Text>
                            <Text style={[styles.shopDetailEva,StyleObject.fontSize]}>5.0</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.shopDetailBtn}>
                    <View style={{ width: '30%' }}>
                        <TouchableOpacity style={styles.shopButton}>
                            <Text style={[StyleObject.fontSize,{ color: '#FD0841', }]}>相关分类</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '20%' }}>
                        <TouchableOpacity style={styles.shopButton}>
                            <Text  style={[StyleObject.fontSize,{ color: '#FD0841', }]}>最近上新</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
// 商品详情图
class DeatilImages extends Component {
    constructor(props){
        super(props);
        const { imagesDetail } = props;
        this.state={
            goodDetailImage: props.imagesDetail,
            height:0,
            width:0,
        }
    }
    componentDidMount(){
        const {screenWidth,screenHeight} = Dimensions.get('window');
        this.state.goodDetailImage.map((val,idx)=>{
            const url = val.url;
            Image.getSize(url,(width,height)=> {
                this.setState({
                    height:height,
                    width:width,
                });
            })
        });
    }
    render(){
        return(
            <View >
                {
                    this.state.goodDetailImage.map((val,idx)=>{
                            const url = val.url;
                            return (
                                <Image
                                    style={{
                                                width:Dimensions.get('window').width,
                                                height: (this.state.height * Dimensions.get('window').width)/this.state.width ,
                                                marginBottom:10
                                            }}
                                    source={{uri:url}}
                                    resizeMode={Image.resizeMode.contain}
                                    key={idx}
                                />
                            )
                    } )
                }
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
        fontSize: 12,
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
        fontSize:12,
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
        alignItems:'center',
    },
});

// const GoodsDetailNav = StackNavigator({
//     GoodsDetail : { screen: GoodsDetail },
//     //toIndex: { screen: UserCenterNavigator },
// });


export default GoodsDetailNav;

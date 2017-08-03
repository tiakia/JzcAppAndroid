import React,{ Component } from 'React';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
    StyleSheet,
    PixelRatio,
    Switch,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {StackNavigator,TabNavigator } from 'react-navigation';

export default class OrderDetail extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation})=>({
        headerTitle:'订单详情',
        headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#FD0841'},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
        headerRight:(
            <View style={{width:20}}>

            </View>
        ),
    });
    render(){
        const {state}= this.props.navigation;
        return(
            <View style={[StyleObject.flex]}>
                <ScrollView style={[StyleObject.flex]}>
                        <View style={[styles.orderDetailItem]}>
                            <View style={styles.orderDetailItemTitle}>
                                <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>收货人信息</Text>
                            </View>
                            <View >
                                <View style={[StyleObject.flexRow,styles.orderDetailPaddingTop]}>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor,styles.orderDetailMarginRight]}>亲亲我的宝贝</Text>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>150 0000 0000</Text>
                                </View>
                                <View style={[StyleObject.flexRow,{
                                
                            }]}>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor,styles.orderDetailLineHeight]}>
                                    收货地址 ：
                                    山西省太原市小店区高新技术开发区晋阳街长治路口，天骄科技园8层
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.orderDetailItem,styles.orderDetailSplitLine]}>
                            <View style={[styles.orderDetailItemTitle]}>
                                <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>订单信息</Text>
                            </View>
                            <View >
                                <View style={[styles.orderDetailPaddingTop,StyleObject.flexDirection]}>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>订单编号 ：{state.params.orderId}</Text>
                                    <TouchableOpacity>
                                        <Text style={[StyleObject.fontSize,StyleObject.activeTextColor,{
                                            borderWidth:1,
                                            borderColor:'#F00749'
                                        }]}>复制</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.orderDetailPaddingTop,StyleObject.flexDirection]}>
                                    <Text style={[StyleObject.fontSize,]}>微信交易号 ：{state.params.orderId}</Text>
                                </View>
                                <View style={[styles.orderDetailPaddingTop,StyleObject.flexDirection]}>
                                    <Text style={[StyleObject.fontSize,]}>创建时间 ：2017-05-11 17:35:03 </Text>
                                </View>
                                <View style={[styles.orderDetailPaddingTop,StyleObject.flexDirection]}>
                                    <Text style={[StyleObject.fontSize,]}>订单状态 ：交易关闭</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[{backgroundColor:"#fff"},styles.orderDetailSplitLine]}>
                            <View style={[StyleObject.flexRow,{paddingTop:5,paddingBottom:5,paddingLeft:10}]}>
                                <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginRight:8}]}>Armani阿玛尼</Text>
                                <Icon name='ios-arrow-forward' size={15} />
                            </View> 
                            <View style={[StyleObject.flexRow,StyleObject.orderDetail,{marginTop:0}]}>
                                <View >
                                        <Image source={{uri:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg'}}
                                            style={{height:100,width:100,marginRight:5,}}
                                        />
                                </View>
                                <View>
                                        <Text style={[StyleObject.orderDetailText,StyleObject.normalColor,StyleObject.fontSize]}
                                            numberOfLines= {2}
                                        >
                                            2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色
                                        </Text>
                                        <Text style={[StyleObject.orderTextColor,StyleObject.fontSize]}>
                                            颜色分类 : 深藏青
                                        </Text>
                                </View>
                                <View style={StyleObject.orderPrice}>
                                    <View style={{alignItems:'flex-end',marginBottom:8}}>
                                            <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>¥ 999</Text>
                                            <Text style={[StyleObject.orderTextColor,{textDecorationLine:'line-through'},StyleObject.fontSize]}>¥ 1800</Text>
                                    </View>
                                    <Text style={[StyleObject.orderTextColor,StyleObject.fontSize]}> ×1 </Text>
                                </View>
                            </View>
                            <View style={{
                                alignItems:'flex-end',
                                paddingTop:10,
                                paddingBottom:10,
                                borderBottomWidth:1/PixelRatio.get(),
                                borderColor:'#ddd',
                            }}>
                                <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>共 1 件商品   合计：999（含运费 ¥ 20）</Text>
                            </View>
                            <View style={StyleObject.flexDirection}>
                                <View style={[StyleObject.flexRow,StyleObject.center,StyleObject.flex,{height:35,borderRightWidth:1/PixelRatio.get(),
                                borderColor:'#ddd',}]}>
                                    <Icon name='ios-person' size={25} color="#f10180"/>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:10}]}>联系小兔</Text>
                                </View>
                                <View style={[StyleObject.flexRow,StyleObject.center,StyleObject.flex,{height:35}]}>
                                    <Icon name='ios-person' size={25} color="#f10180"/>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:10}]}>联系客服</Text>
                                </View>
                            </View>
                        </View>
                </ScrollView>
                <View style={[styles.orderDetailSplitLine,{height:35,paddingTop:10,paddingBottom:10,backgroundColor:'#fff'}]}>  
                       <Text>123</Text>     
                </View>
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    orderDetailItem:{
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
    },
    orderDetailItemTitle:{
        paddingTop:10,paddingBottom:10,
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#ddd'
    },
    orderDetailSplitLine:{
        marginTop:5,
    },
    orderDetailLineHeight:{
        lineHeight:25,
    },
    orderDetailPaddingTop:{
        paddingTop:10,
    },
    orderDetailMarginRight:{
        marginRight:10,
    },
    confirmOrderItem:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#ddd',
        backgroundColor:'#fff',
    },
    confirmOrderGoodsNum:{
        width:20,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:3
    },
    confirmOrderShopName:{
        paddingTop:5,
        paddingBottom:10,
        paddingLeft:10,
        backgroundColor:'#fff'
    },
});
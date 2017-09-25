
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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigator,TabNavigator } from 'react-navigation';

export default class ConfirmOrder extends Component {
    constructor(props){
        super(props);
         this.state = {
            num:1,
            maxNum: 10,
            isDiscount:true,
            isAnonymity:false,
        };
        this.add = this.add.bind(this);
        this.reduce = this.reduce.bind(this);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '确认订单',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#FD0841'},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
    });
    add(){
        if(this.state.num < this.state.maxNum){
            var num = this.state.num + 1;
            this.setState({
                num: num,
            });
        }
    }
    reduce(){
        if(this.state.num > 1){
            var num = this.state.num - 1;
            this.setState({
                num:num,
            });
        }
        
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
           <View style={StyleObject.flex}>
                <ScrollView style={[StyleObject.flex]}>
                    <TouchableOpacity style={[styles.confirmOrderAddress]}>
                        <View style={[StyleObject.center,styles.confirmOrderAddressMapIcon]}>
                                <MaterialIcon name='map-marker' size={25} color='#666'/>
                        </View>
                        <View style={StyleObject.flex}>
                                <View style={[styles.confirmOrderAddressLayout]}>
                                    <Text style={[StyleObject.fontSize,styles.confirmOrderAddressReceiveName,StyleObject.normalColor]}>收货人:哈哈哈</Text>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>电话：150 0000 0000</Text>
                                </View>
                                <View style={styles.confirmOrderAddressLayout}>
                                    <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>收货地址:
                                        山西省太原市小店区太原高新技术产业开发区晋阳街长治路口
                                    </Text>
                                </View>
                                <View>
                                    <Text style={[StyleObject.activeTextColor,StyleObject.fontSize]}>
                                        (收货不便时，可选择免费代收服务)
                                    </Text>
                                </View>
                        </View>
                        <View style={[StyleObject.center,styles.confirmOrderAddressArrowIcon]}>
                                <Icon name='ios-arrow-forward' size={25} color='#ddd'/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.confirmOrderShopName}>
                        <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>Armani阿玛尼</Text>
                    </View> 
                    <View style={[StyleObject.flexRow,StyleObject.orderDetail,{marginTop:0}]}>
                        <View >
                                <Image source={{uri:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg'}}
                                    style={{height:100,width:100,marginRight:5,}}
                                />
                        </View>
                        <View style={[StyleObject.flex,{justifyContent:'space-around'}]}>
                                <Text style={[StyleObject.normalColor,StyleObject.fontSize]}
                                    numberOfLines= {1}
                                >
                                    2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色
                                </Text>
                                <Text style={[StyleObject.orderTextColor,StyleObject.fontSize]}>
                                    颜色分类 : 深藏青
                                </Text>
                                <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>
                                    发货时间 : 卖家承诺48小时发货
                                </Text>
                                <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>
                                    合计 : 999 ( 含运费¥20 )
                                </Text>
                        </View>
                        <View style={[styles.confirmOrderGoodsNum]}>
                            <Text style={[StyleObject.orderTextColor,StyleObject.fontSize]}> ×1 </Text>
                        </View>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.confirmOrderItem,{paddingTop:5,paddingBottom:5}]}>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>购买数量</Text>
                        <View style={styles.confirmOrderGoodsNumChange}>
                            <TouchableOpacity style={[styles.confirmOrderButton]}
                                            onPress={()=>this.reduce()}
                            >
                                {this.state.num >1 ?
                                <Icon name='ios-remove' size={15} color='#000'/> :
                                <Icon name='ios-remove' size={15} color='#8a8a8a'/>
                                }
                            </TouchableOpacity>
                            <TextInput value={this.state.num+''}
                                    style={[styles.confirmOrderGoodNumInput]}
                                    underlineColorAndroid='transparent'
                                    multiline = {true}
                            />
                            <TouchableOpacity
                                style={[styles.confirmOrderButton]}
                                onPress={()=>this.add()}
                            >
                                {this.state.maxNum == 0 ?
                                <Icon name='ios-add' size={15} color='#ddd'/> :
                                <Icon name='ios-add' size={15} color='#000'/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.confirmOrderItem]}>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>配送方式</Text>
                        <TouchableOpacity style={StyleObject.flexDirection}>
                            <Text style={[styles.confirmOrderAddressArrowIcon,StyleObject.fontSize,StyleObject.normalColor]}>自取/快递 免邮</Text>
                            <Icon name='ios-arrow-forward' size={18} color='#1d1d1d'/>
                        </TouchableOpacity>
                    </View>
                    <View style={[StyleObject.flexRow,styles.confirmOrderItem]}>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>买家留言
                        </Text>
                        <View style={styles.confirmOrderMsg}>
                            <TextInput
                                placeholder='选填: 对本次交易的说明（建议填写）'
                                style={[StyleObject.fontSize,{padding:0,}]}
                                underlineColorAndroid='transparent'
                                multiline = {true}
                            />
                        </View>
                    </View>
                    <View style={[StyleObject.flexRow,styles.confirmOrderItem,{justifyContent:'flex-end'}]}>
                                <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginRight:10}]}>共 1 件商品</Text>
                                <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>
                                    小计：
                                </Text>
                                <Text style={[StyleObject.activeTextColor,{fontSize:15}]}>¥ 108</Text>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.confirmOrderItem,{marginTop:5}]}>
                        <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>
                                可用395金豆豆抵用398元
                        </Text>
                        <Switch
                            value={this.state.isDiscount}
                            onTintColor='#fc0941'
                            thumbTintColor='#fff'
                            onValueChange={(value)=>{this.setState({isDiscount:value})}}
                        />
                    </View>
                    <View style={[StyleObject.flexDirection,styles.confirmOrderItem,{marginTop:5}]}>
                        <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>
                                匿名购买
                        </Text>
                        <Switch
                            value={this.state.isAnonymity}
                            onTintColor='#fc0941'
                            thumbTintColor='#fff'
                            onValueChange={(value)=>{this.setState({isAnonymity:value})}}
                        />
                    </View>
                </ScrollView>
                <View style={styles.confirmOrderBottomBar}>
                    <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>合计：</Text>
                    <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>¥ 108</Text>
                    <TouchableOpacity style={styles.confirmOrderBottomBtn}
                                      onPress={()=>navigate('PayDetail')}
                    >
                        <Text style={[StyleObject.fontSize,StyleObject.textColor]}>提交订单</Text>
                    </TouchableOpacity>
                </View>
           </View>
        )
    }
}

const styles=StyleSheet.create({
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
    confirmOrderGoodsNumChange:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height:30,
    },
    confirmOrderButton:{
        backgroundColor:'#f2f2f2',
        paddingTop:5,paddingBottom:5,
        paddingLeft:10,paddingRight:10,
    },
    confirmOrderGoodNumInput:{padding:0,width:25,textAlign:'center'},
    confirmOrderAddress:{
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:15,
        borderTopWidth:5,
        borderBottomWidth:5,
        borderColor:'#f10180',
        backgroundColor:'#fff',
    },
    confirmOrderAddressMapIcon:{marginLeft:5,marginRight:5},
    confirmOrderAddressArrowIcon:{marginLeft:5,marginRight:10},
    confirmOrderAddressLayout:{flexDirection:'row',marginBottom:15,},
    confirmOrderAddressReceiveName:{marginRight:30},
    confirmOrderMsg:{flex:1,marginLeft:10},
    confirmOrderBottomBar:{
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row',
        backgroundColor:'#fff',
    },
    confirmOrderBottomBtn:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#FC0844',
        marginLeft:15,
    }
});

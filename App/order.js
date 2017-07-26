import React,{ Component } from 'React';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StyleSheet,
} from 'react-native';
import StyleObject from './styleSheet.js';
import Icon from 'react-native-vector-icons/Ionicons';
/*
    orderStatus refund 退款
    status: 
            1 已完成
                1.1 待评价
                1.2 已评价
                1.3 待追评
            2 未完成
                2.1 支付成功
                    2.1.1 待发货
                    2.1.2 待收货
                2.2 支付失败  取消支付
                    2.2.1 待付款 
            3 取消    
                3.1 取消订单 交易关闭 替换为 已取消
            4 退款/售后
                4.1 售后
                4.2 买家申请退款 交易关闭 替换为 申请中
                4.3 退款中 交易关闭 替换为 退款中
                4.4 退款成功 替换为 退款成功
    
    除了未完成的都有删除订单按钮
*/
const orderData = [
  {//一个订单
        orderId: 1, //订单ID
        status: '2.1.1', //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopId: 123,
                shopName:'Armani阿玛尼', //商铺名字
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                    },
                ],
            }
        ],
    },
    {//一个订单
        orderId: 2, //订单ID
        status: '2.1.2', //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopId: 123,
                shopName:'Armani阿玛尼', //商铺名字
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                    },
                ],
            }
        ],
    },
    {//一个订单
        orderId: 3, //订单ID
        status: '1.1', //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopId: 123,
                shopName:'Armani阿玛尼', //商铺名字
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                    },
                ],
            }
        ],
    },
    {//一个订单
        orderId: 4, //订单ID
        status: '2.2.1', //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopId: 123,
                shopName:'Armani阿玛尼', //商铺名字
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                    },
                ],
            }
        ],
    },
    {//一个订单
        orderId: 5, //订单ID
        status: '1.2', //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopId: 123,
                shopName:'Armani阿玛尼', //商铺名字
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                    },
                ],
            }
        ],
    },
    {//一个订单
        orderId: 6, //订单ID
        status: '4.1', //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopId: 123,
                shopName:'Armani阿玛尼', //商铺名字
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:2,
                    },
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                        goodsStatus: '退款中'
                    },
                ],
            }
        ],
    },
    {//一个订单
        orderId: 7, //订单ID
        status: "4.4", //订单状态
        shop:[  //一个对象是一个商铺
            {
                shopName:'f4d5s64f65s', //商铺名字
                shopId: 123,
                goods:[ //一个对象是一家店铺内的一个商品
                    {
                        goodsImg:'https://img.alicdn.com/imgextra/i3/2653351646/TB2mDWnq5RnpuFjSZFCXXX2DXXa_!!2653351646.jpg_430x430q90.jpg',
                        goodsText:"2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色",
                        goodsType:[ //商品类型
                                    {type:'颜色分类',detail:'深藏青'}
                                ],
                        goodsPrice: 1899,
                        goodsPriceDiscount:999,
                        goodsNum:1,
                    },
                ],
            },
        ],
    }
];

export default class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData:orderData,
        }
        this.renderOrderList = this.renderOrderList.bind(this);
        this.renderShopList = this.renderShopList.bind(this);
        this.OrderButton = this.OrderButton.bind(this);
    }
    static navigationOptions = ({navigation})=>{
        const {state,setParams,goBack} = navigation;
        return {
            headerTitle:'我的订单', 
            headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#F4013C'},
            headerStyle:{height:50,paddingTop:20,},
            headerLeft: (
                        <TouchableOpacity onPress={()=>goBack()}>
                            <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                        </TouchableOpacity>
                    ), 
        }
    }
    OrderButton(){
        return [
            {   //待付款
                status: "2.2.1",
                button:[
                    {
                         title :'付款',
                         handlePress: [()=>alert(123)],
                         acitve : true,
                    },
                    {
                        title: '取消订单',
                        handlePress: [()=>alert(123)],
                        active : false,
                    },
                    {
                        title: '联系卖家',
                        handlePress: [()=>alert(123)],
                        active : false,
                    }
                ],
            },
            {   //待发货
                status: "2.2.1",
                button:[
                    {
                        title:'退款',
                        handlePress:[()=>alert(123)],
                        acitve: true,
                    },
                    {
                        title:'提醒发货',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                ]
            },
            {   //待收货
                status: '2.1.2' ,
                button:[
                    {
                        title:'确认收货',
                        handlePress:[()=>alert(123)],
                        acitve: true,
                    },
                    {
                        title:'申请售后',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                    {
                        title:'查看物流',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                    {
                        title:'延长收货',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                ]
            },
            {
                //待评价 
                status: '3.1' ,
                button:[
                    {
                        title:'删除订单',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                    {
                        title:'评价',
                        handlePress:[()=>alert(123)],
                        acitve: true,
                    },
                ]
            },
            {
                //待追评 
                status: '1.3' ,
                button:[
                    {
                        title:'删除订单',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                    {
                        title:'追加评价',
                        handlePress:[()=>alert(123)],
                        acitve: true,
                    },
                ]
            },
            {
                //申请退款 退款中 退款成功 取消订单
                status: ['1.2','3.1','4.2','4.3','4.4' ],
                button:[
                    {
                        title:'删除订单',
                        handlePress:[()=>alert(123)],
                        acitve: false,
                    },
                ]
            },
        ]
    }
    renderShopList(val,idx,status){
        return(
            <View style={[styles.orderFlexDir,styles.orderJustify,styles.orderPadding]} key={idx}>
                <View style={styles.orderFlexDir}>
                    <Text style={[StyleObject.fontSize]}> {val.shopName} </Text>
                    <Icon name='ios-arrow-forward' size={15} />
                </View>
                <View>
                        <Text style={[StyleObject.fontSize,StyleObject.activeTextColor]}>{
                            status == '1.1' ? '交易成功' :
                            status == "1.2" ? '交易成功' :
                            status == "1.3" ? '交易成功' :
                            status == '2.2.1' ? '等待买家付款' :
                            status == "2.1.1" ?  "等待卖家发货" :
                            status == "2.1.2" ? "卖家已发货" :
                            status == "3.1" ? '已取消' :
                            status == "4.1" ? '售后申请中' :
                            status == '4.2' ? '退款申请审核中' :
                            status == '4.3' ? '退款中' :
                            status == '4.4' ? '退款成功' :null 
                        }</Text>
                </View>
            </View>
        )
    }
    renderOrderButton(status){
        return (
             <View style={[styles.orderFlexDir,styles.orderPadding,{justifyContent:'flex-end'}]}>
                <OrderButton title='已收藏' type='collect'/>
                <OrderButton title='联系卖家'/>
                <OrderButton title='取消订单'/>
                <OrderButton title='付款' type='active'/>
            </View>
        )
    }
    renderOrderList(val,idx,shopName,status,shopNum){
            return( 
                <View style={[styles.orderFlexDir,styles.orderDetail]} key={idx}>
                    <View>
                            <Image source={{uri:val.goodsImg}}
                                style={{height:100,width:100,marginRight:5,}}
                            />
                    </View>
                    <View>
                            <Text style={[styles.orderDetailText,StyleObject.fontSize]}
                                numberOfLines= {2}
                            >
                                {val.goodsText}
                            </Text>
                            <Text style={[styles.orderTextColor,StyleObject.fontSize]}>{val.goodsType.map((val,idx)=>{
                                return val.type +" ： "+ val.detail;
                            })}</Text>
                    </View>
                    <View style={styles.orderPrice}>
                        <View style={{alignItems:'flex-end',marginBottom:8}}>
                                <Text style={StyleObject.fontSize}>{val.goodsPrice}</Text>
                                <Text style={[styles.orderTextColor,{textDecorationLine:'line-through'},StyleObject.fontSize]}>¥ {val.goodsPriceDiscount}</Text>
                        </View>
                        <Text style={[styles.orderTextColor,StyleObject.fontSize]}> ×{val.goodsNum} </Text>
                        {
                           val.goodsStatus ? 
                            <Text style={[{marginTop:10},StyleObject.activeTextColor,StyleObject.fontSize]}>{val.goodsStatus}</Text> :
                            null
                        }
                    </View>
                </View>
            )
    }
    render(){
        return(
            <ScrollView style={StyleObject.flex}>
                {
                    this.state.orderData.map((val,idx)=>{
                        const shop = val.shop;
                        var status = val.status;
                        var shopNum = shop.length;
                        return (
                            <View style={styles.orderItem} >
                                    {
                                        shop.map((val,idx)=>{
                                            var goods = val.goods;
                                            var shopName = val.shopName;
                                            var num = goods.length;
                                            return(
                                                    <View style={styles.orderDetailAll} key={idx}>
                                                        {
                                                            this.renderShopList(val,idx,status)
                                                        }
                                                        {   
                                                            goods.map((val,idx)=>
                                                                this.renderOrderList(val,idx,shopName,status,num))
                                                        }
                                                        <View style={styles.orderAmount}>
                                                            <Text style={StyleObject.fontSize}>共{val.shopNum}件商品   合计：999（含运费 ¥ 20）</Text>
                                                        </View>
                                                    </View>
                                            )
                                        })      
                                    }
                                {
                                    this.renderOrderButton(status)
                                }
                            </View>
                    )
                })
                } 
            </ScrollView>
        )
    }
}

class OrderList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.orderItem} >

                <View style={[styles.orderFlexDir,styles.orderJustify,styles.orderPadding]}>
                   <View style={styles.orderFlexDir}>
                       <Text style={{marginRight:10}}> Armani阿玛尼 </Text>
                       <Icon name='ios-arrow-forward' size={20} />
                   </View>
                   <View>
                        <Text style={StyleObject.activeTextColor}>等待买家付款</Text>
                   </View>
                </View>

                <View style={styles.orderDetailAll}>
                        <View style={[styles.orderFlexDir,styles.orderDetail]}>
                           <View>
                                <Image source={require('./../images/head.jpg')}
                                       style={{height:100,width:100,marginRight:5,}}
                                />
                           </View>
                           <View>
                                <Text style={styles.orderDetailText}
                                      numberOfLines= {2}
                                >
                                    2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色
                                </Text>
                                <Text style={styles.orderTextColor}>颜色分类：深藏青</Text>
                           </View>
                           <View style={styles.orderPrice}>
                               <View style={{alignItems:'flex-end',marginBottom:8}}>
                                    <Text>¥ 999 </Text>
                                    <Text style={[styles.orderTextColor,{textDecorationLine:'line-through'}]}>¥ 1899 </Text>
                               </View>
                               <Text style={styles.orderTextColor}> ×1 </Text>
                               {
                                    this.props.orderStatus == 'refund' ?
                                    <Text style={StyleObject.activeTextColor}>退款成功</Text> :
                                    null
                               }
                           </View>
                           
                       </View>
                       <View style={[styles.orderFlexDir,styles.orderDetail]}>
                           <View>
                                <Image source={require('./../images/head.jpg')}
                                       style={{height:100,width:100,marginRight:5,}}
                                />
                           </View>
                           <View>
                                <Text style={styles.orderDetailText}
                                      numberOfLines= {2}
                                >
                                    2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色
                                </Text>
                                <Text style={styles.orderTextColor}>颜色分类：深藏青</Text>
                           </View>
                           <View style={styles.orderPrice}>
                               <View style={{alignItems:'flex-end',marginBottom:8}}>
                                    <Text>¥ 999 </Text>
                                    <Text style={[styles.orderTextColor,{textDecorationLine:'line-through'}]}>¥ 1899 </Text>
                               </View>
                               <Text style={styles.orderTextColor}> ×1 </Text>
                               {
                                    this.props.orderStatus == 'refund' ?
                                    <Text style={StyleObject.activeTextColor}>退款成功</Text> :
                                    null
                               }
                           </View>
                           
                       </View>
                       <View style={styles.orderAmount}>
                           <Text>共1件商品   合计：999（含运费 ¥ 20）</Text>
                       </View>
                </View>
                <View style={[styles.orderFlexDir,styles.orderJustify,styles.orderPadding]}>
                   <View style={styles.orderFlexDir}>
                       <Text style={{marginRight:10}}> 沙琪玛 </Text>
                       <Icon name='ios-arrow-forward' size={20} />
                   </View>
                   <View>
                        <Text style={StyleObject.activeTextColor}>等待买家付款</Text>
                   </View>
                </View>

                <View style={styles.orderDetailAll}>
                       <View style={[styles.orderFlexDir,styles.orderDetail]}>
                           <View>
                                <Image source={require('./../images/head.jpg')}
                                       style={{height:100,width:100,marginRight:5,}}
                                />
                           </View>
                           <View>
                                <Text style={styles.orderDetailText}
                                      numberOfLines= {2}
                                >
                                    2017s/s金属一排扣随性微长袖Bomber Jacket范德萨浪费公共健康的绿色
                                </Text>
                                <Text style={styles.orderTextColor}>颜色分类：深藏青</Text>
                           </View>
                           <View style={styles.orderPrice}>
                               <View style={{alignItems:'flex-end',marginBottom:8}}>
                                    <Text>¥ 999 </Text>
                                    <Text style={[styles.orderTextColor,{textDecorationLine:'line-through'}]}>¥ 1899 </Text>
                               </View>
                               <Text style={styles.orderTextColor}> ×1 </Text>
                               {
                                    this.props.orderStatus == 'refund' ?
                                    <Text style={StyleObject.activeTextColor}>退款成功</Text> :
                                    null
                               }
                           </View>
                       </View>
                       <View style={styles.orderAmount}>
                           <Text>共1件商品   合计：999（含运费 ¥ 20）</Text>
                       </View>
                </View>
                <View style={[styles.orderFlexDir,styles.orderPadding,{justifyContent:'flex-end'}]}>
                    <OrderButton title='已收藏' type='collect'/>
                    <OrderButton title='联系卖家'/>
                    <OrderButton title='取消订单'/>
                    <OrderButton title='付款' type='active'/>
                </View>
            </View>
        )
    }
}

class OrderButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const type = this.props.type;
        if(type == 'active'){
            return(
                        <TouchableOpacity style={[styles.orderButton,{borderColor:'#F80C49'}]}>
                            <Text style={[StyleObject.activeTextColor,StyleObject.fontSize]}>{this.props.title}</Text>
                        </TouchableOpacity>
                    )
        }else if(type == 'collect'){
            return(
                <TouchableOpacity style={[styles.orderButton,{borderColor:'#F80C49'}]}>
                    <View style={[StyleObject.flexDirection]}>
                         <Icon name='ios-heart' size={20} color='#F80C49' />
                        <Text style={[{marginLeft:5},StyleObject.fontSize,StyleObject.activeTextColor]}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }else{
            return(
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={[{color:'#656565'},StyleObject.fontSize]}>{this.props.title}</Text>
                        </TouchableOpacity>
                    )
        }
    }
}

const styles=StyleSheet.create({
    orderItem:{
        marginBottom:5,
        backgroundColor:"#fff",
        paddingTop:10,
        paddingBottom:5,
        paddingLeft:5,
    },
    orderFlexDir:{
        flexDirection:'row'
    },
    orderJustify:{
        justifyContent:'space-between',
    },
    orderTextColor:{
        color:'#9c9c9c'
    },
    orderPadding:{
        paddingLeft:10,
        paddingRight:15,
    },
    orderDetailAll:{
         borderBottomWidth:1,
         borderColor:'#ddd',
         marginTop:5,
         marginBottom:5,
    },
    orderDetail: {
        backgroundColor:'#F6F6F6',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        marginTop:5,
    },
    orderDetailText:{
        height:52,
        width:155,
        lineHeight:25,
    },
    orderAmount:{
        alignItems:'flex-end',
        marginTop:10,
        marginBottom:10,
    },
    orderPrice:{
        alignItems:'flex-end',
        flex:1,
        marginTop:5,
    },
    orderButton:{
        paddingTop:2,
        paddingLeft:8,
        paddingRight:8,
        borderWidth:1,
        borderColor:"#9c9c9c",
        marginRight:10,
        marginBottom:5,
        marginTop:5,
        borderRadius:15
    }
});
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
import {StackNavigator,TabNavigator } from 'react-navigation';
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
    },
    {//一个订单
        orderId: 2, //订单ID
        status: '2.1.2', //订单状态
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
    },
    {//一个订单
        orderId: 3, //订单ID
        status: '1.1', //订单状态
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
    },
    {//一个订单
        orderId: 4, //订单ID
        status: '2.2.1', //订单状态
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
    },
    {//一个订单
        orderId: 5, //订单ID
        status: '1.2', //订单状态
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
    },
    {//一个订单
        orderId: 6, //订单ID
        status: '4.1', //订单状态
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
            
    },
    {//一个订单
        orderId: 7, //订单ID
        status: "4.4", //订单状态
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
    }
];
//全部
class AllOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData:orderData
        }
    }
    static navigationOptions = {
        tabBarLabel: '全部'
    }
    render(){
        return(
            <OrderList orderData={this.state.orderData} navigation={this.props.navigation}/>
        )
    }
}
//待评价
class WaitEval extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData: orderData.filter((item)=>{return item.status == "1.1"})
        }
    }
    static navigationOptions = {
        tabBarLabel: "待评价"
    }
    render(){
        return(
            <OrderList orderData={this.state.orderData} navigation={this.props.navigation}/>
        )
    }
}
//待收货
class WaitReceiveGoods extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData: orderData.filter((item)=>{return item.status == '2.1.2'})
        }
    }
    static navigationOptions = {
        tabBarLabel: '待收货'
    }
    render(){
        return(
            <OrderList orderData={this.state.orderData} navigation={this.props.navigation}/>
        ) 
    }
}
//待发货
class WaitSendGoods extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData: orderData.filter((item)=>{return item.status == '2.1.1'})
        }
    }
    static navigationOptions ={
        tabBarLabel: '待发货',
    }
    render(){
        return(
            <OrderList orderData={this.state.orderData} navigation={this.props.navigation}/>
        )
    }
}
//退款/售后
class RefundAfterSale extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData: orderData.filter((item)=>{return item.status == ("4.1" || "4.2" || "4.3" || "4.4")})
        }
    }
    static navigationOptions ={
        tabBarLabel:'退款/售后',
        /* tabBarLabel:({ tintColor }) => (
            <View style={[{backgroundColor:tintColor,},StyleObject.flex,StyleObject.center]}>
                <Text style={{color:'#fff'}}>退款/售后</Text>
            </View>
        ), */
    }
    render(){
        return(
            <OrderList orderData={this.state.orderData} navigation={this.props.navigation}/>
        )
    }
}

const Order = TabNavigator({
    AllOrder: {
        screen: AllOrder,
    }, 
    WaitSendGoods: {
        screen: WaitSendGoods,
    },
    WaitReceiveGoods: {
        screen: WaitReceiveGoods,
    },
    WaitEval: {
        screen: WaitEval,
    },
    RefundAfterSale: {
        screen: RefundAfterSale,
    }
},{
    tabBarPosition:'top',
    initialRouteName: 'AllOrder',
    activeBackgroundColor:'#fc0941',
    inactiveBackgroundColor:'#39393b',
    scrollEnabled:false,
    lazy:false,
    tabBarOptions:{
        labelStyle:{
            fontSize:12,
            color:'#fff',
        },
        tabStyle:{
            padding:0,
        },
        style: {
            backgroundColor:'#39393b'
        }
    }
});

class OrderList extends Component {
    constructor(props){
        super(props);
        const { orderData } = props;
        this.state={
            orderData:props.orderData,
        }
        this.renderOrderList = this.renderOrderList.bind(this);
        this.renderShopList = this.renderShopList.bind(this);
        this.OrderButton = this.OrderButton.bind(this);
    }
    OrderButton(orderId){
        return [
            {   //待付款
                status: ["2.2.1"],
                button:[
                    {
                        title: '取消订单',
                        handlePress: ()=>alert(orderId),
                        active : false,
                    },
                    {
                        title: '联系卖家',
                        handlePress: ()=>alert(orderId),
                        active : false,
                    },
                     {
                         title :'付款',
                         handlePress: ()=>{alert(orderId)},
                         active : true,
                    },
                ],
            },
            {   //待发货
                status: ["2.1.1"],
                button:[
                    {
                        title:'提醒发货',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                    {
                        title:'退款',
                        handlePress:()=>alert(orderId),
                        active: true,
                    },
                ]
            },
            {   //待收货
                status: ['2.1.2'] ,
                button:[
                    {
                        title:'申请售后',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                    {
                        title:'查看物流',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                    {
                        title:'延长收货',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                    {
                        title:'确认收货',
                        handlePress:()=>alert(orderId),
                        active: true,
                    }
                ]
            },
            {
                //待评价 
                status: ['1.1','4.1'] ,
                button:[
                    {
                        title:'删除订单',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                    {
                        title:'评价',
                        handlePress:()=>this.props.navigation.navigate('Evaluate'),
                        active: true,
                    },
                ]
            },
            {
                //待追评 
                status: ['1.3'] ,
                button:[
                    {
                        title:'删除订单',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                    {
                        title:'追加评价',
                        handlePress:()=>alert(orderId),
                        active: true,
                    },
                ]
            },
            {
                //申请退款 退款中 退款成功 取消订单
                status: ['1.2','3.1','4.2','4.3','4.4' ],
                button:[
                    {
                        title:'删除订单',
                        handlePress:()=>alert(orderId),
                        active: false,
                    },
                ]
            },
        ]
    }
    renderShopList(val,idx,status){
        return(
            <View style={[StyleObject.flexRow,styles.orderJustify,styles.orderPadding]} key={idx}>
                <View style={StyleObject.flexRow}>
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
    renderOrderButton(status,orderId){
        return (
             <View style={[StyleObject.flexRow,styles.orderPadding,{justifyContent:'flex-end'}]}>
                {
                  this.OrderButton(orderId).map((val,idx)=>{
                         if(val.status.indexOf(status) != -1){
                            let buttons = val.button;
                            return buttons.map((item,index)=>{
                                return(
                                    <OrderButton title={item.title} 
                                                 isActive={item.active}
                                                 handlePress={item.handlePress}
                                                 key={index}
                                    />
                                )
                            })
                        } 
                    })
                }
            </View>
        )
    }
    renderOrderList(val,idx,shopName,status,orderId){
            return( 
                <TouchableOpacity style={[StyleObject.flexRow,StyleObject.orderDetail]} key={idx}
                                  onPress={()=>{this.props.navigation.navigate('OrderDetail',{orderId:orderId})}}
                >
                    <View>
                            <Image source={{uri:val.goodsImg}}
                                style={{height:100,width:100,marginRight:5,}}
                            />
                    </View>
                    <View>
                            <Text style={[StyleObject.orderDetailText,StyleObject.fontSize]}
                                numberOfLines= {2}
                            >
                                {val.goodsText}
                            </Text>
                            <Text style={[StyleObject.orderTextColor,StyleObject.fontSize]}>{val.goodsType.map((val,idx)=>{
                                return val.type +" ： "+ val.detail;
                            })}</Text>
                    </View>
                    <View style={StyleObject.orderPrice}>
                        <View style={{alignItems:'flex-end',marginBottom:8}}>
                                <Text style={StyleObject.fontSize}>{val.goodsPrice}</Text>
                                <Text style={[StyleObject.orderTextColor,{textDecorationLine:'line-through'},StyleObject.fontSize]}>¥ {val.goodsPriceDiscount}</Text>
                        </View>
                        <Text style={[StyleObject.orderTextColor,StyleObject.fontSize]}> ×{val.goodsNum} </Text>
                        {
                           val.goodsStatus ? 
                            <Text style={[{marginTop:10},StyleObject.activeTextColor,StyleObject.fontSize]}>{val.goodsStatus}</Text> :
                            null
                        }
                    </View>
                </TouchableOpacity>
            )
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView style={StyleObject.flex}>
                {
                    this.state.orderData.map((val,idx)=>{
                        const shopName = val.shopName;
                        var status = val.status;
                        var goods = val.goods;
                        var orderId = val.orderId;
                        return (
                            <View style={styles.orderItem} key={idx}>
                                <View style={styles.orderDetailAll} >
                                    {
                                        this.renderShopList(val,idx,status)
                                    }
                                    {   
                                        goods.map((val,idx)=>
                                            this.renderOrderList(val,idx,shopName,status,orderId))
                                    }
                                    <View style={styles.orderAmount}>
                                        <Text style={StyleObject.fontSize}>共{val.shopNum}件商品   合计：999（含运费 ¥ 20）</Text>
                                    </View>
                                </View>
                                {
                                    this.renderOrderButton(status,orderId)
                                }
                            </View>
                        )
                    })
                } 
            </ScrollView>
        )
    }
}

class OrderButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const type = this.props.type;
        const isActive = this.props.isActive;
        if(type == 'collect'){
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
                        <TouchableOpacity style={isActive ? [styles.orderButton,{borderColor:'#F80C49'}] : [styles.orderButton]}
                                          onPress={this.props.handlePress}
                        >
                            <Text style={isActive ? [{color:'#F80C49'},StyleObject.fontSize] :[{color:'#656565'},StyleObject.fontSize]}>{this.props.title}</Text>
                        </TouchableOpacity>
                    )
        }
    }
}

/* class OrderScreen extends Component {
    constructor(props){
        super(props);
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
    render(){
        return(
            <Order/>
        )
    }
} */

export default Order;

const styles=StyleSheet.create({
    orderItem:{
        marginBottom:5,
        backgroundColor:"#fff",
        paddingTop:5,
    },
    orderJustify:{
        justifyContent:'space-between',
    },
    orderPadding:{
        paddingLeft:10,
        paddingRight:15,
    },
    orderDetailAll:{
         borderBottomWidth:1,
         borderColor:'#f5f5f5',
         marginTop:5,
    },
    orderAmount:{
        alignItems:'flex-end',
        marginTop:10,
        marginBottom:10,
    },
    orderButton:{
        paddingLeft:8,
        paddingTop:2,
        paddingBottom:2,
        paddingRight:8,
        borderWidth:1,
        borderColor:"#9c9c9c",
        marginRight:10,
        marginTop:5,
        marginBottom:5,
        borderRadius:15,
    }
});

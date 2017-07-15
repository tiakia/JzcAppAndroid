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

*/
export default class OrderList extends Component {
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
                            <Text style={StyleObject.activeTextColor}>{this.props.title}</Text>
                        </TouchableOpacity>
                    )
        }else if(type == 'collect'){
            return(
                <TouchableOpacity style={[styles.orderButton,{borderColor:'#F80C49'}]}>
                    <View style={[StyleObject.flexDirection]}>
                         <Icon name='ios-heart' size={20} color='#F80C49' />
                        <Text style={{marginLeft:5}}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }else{
            return(
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={{color:'#656565'}}>{this.props.title}</Text>
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
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        borderWidth:1,
        borderColor:"#9c9c9c",
        marginRight:10,
        marginBottom:8,
        marginTop:8,
        borderRadius:15
    }
});
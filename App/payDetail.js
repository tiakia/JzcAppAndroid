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

export default class PayDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            isDiscount : false,
            isWechatChecked: true,
            isApplyChecked: false,
        }
        this.togglePayMethod = this.togglePayMethod.bind(this);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '付款详情',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14,color:'#FD0841'},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
    });
    togglePayMethod(way){
        if(way == 'wechat'){
            this.setState({
                isWechatChecked:true,
                isApplyChecked:false,
            });
        }else if(way == 'apply'){
            this.setState({
                isWechatChecked:false,
                isApplyChecked:true,
            });
        }
    }
    render(){
        return(
            <View style={StyleObject.flex}>
                <View style={StyleObject.flex}>
                    <View style={[styles.payItem,StyleObject.flexDirection]}>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>商品金额</Text>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>¥ 999</Text>
                    </View>
                    <View style={[styles.payItem,StyleObject.flexDirection]}>
                        <View style={StyleObject.flexRow}>
                            <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>总运费</Text>
                            <Text style={StyleObject.fontSize}> ( 48小时内发货 )</Text>
                        </View>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>¥ 20</Text>
                    </View>
                    <View style={[styles.payItem,StyleObject.flexDirection]}>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>应付金额</Text>
                        <Text style={[StyleObject.normalColor,StyleObject.fontSize]}>¥ 1099</Text>
                    </View>
                    <View style={[styles.payItem,StyleObject.flexDirection,{marginTop:5,marginBottom:5}]}>
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
                    <View style={[styles.payItem,StyleObject.flexDirection]}>
                        <Text style={[StyleObject.fontSize,StyleObject.normalColor]}>
                                支付方式
                        </Text>
                    </View>
                    <View style={[styles.payItem,StyleObject.flexDirection]}>
                        <View style={StyleObject.flexRow}>
                            <FontIcon name='wechat' size={20} color='#1ECC3A'/>
                            <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:10,marginRight:10}]}>微信支付</Text>
                            <View style={{
                                borderColor:'#F90D49',
                                borderWidth:1/PixelRatio.get(),
                                justifyContent:'center'
                            }}>
                                <Text style={[StyleObject.fontSize,{color:'#f90d49'}]}>
                                    推荐
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>this.togglePayMethod('wechat')}>
                            {
                                this.state.isWechatChecked ?
                                    <Icon name='ios-checkmark-circle' size={25} color='#FD0744'/> :
                                    <Icon name='ios-radio-button-off-outline' size={25}/>

                            }
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.payItem,StyleObject.flexDirection]}>
                        <View style={StyleObject.flexRow}>
                            <FontIcon name='qq' size={20} color='#07A2EC'/>
                            <Text style={[StyleObject.fontSize,StyleObject.normalColor,{marginLeft:10,marginRight:10}]}>支付宝支付</Text>
                            <View style={{
                                borderColor:'#F90D49',
                                borderWidth:1/PixelRatio.get(),
                                justifyContent:'center'
                            }}>
                                <Text style={[StyleObject.fontSize,{color:'#f90d49'}]}>
                                    超多礼券任性刮
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>this.togglePayMethod('apply')}>
                            {
                                this.state.isApplyChecked ?
                                    <Icon name='ios-checkmark-circle' size={25} color='#FD0744'/> :
                                    <Icon name='ios-radio-button-off-outline' size={25}/>

                            }
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity style={StyleObject.pageBottomBtn}>
                    <Text style={[StyleObject.fontSize,StyleObject.textColor]}>去付款</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    payItem:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:8,
        paddingRight:8,
        backgroundColor:'#fff',
        alignItems:'center',
    }
});
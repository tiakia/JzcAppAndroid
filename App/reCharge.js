import React,{ Component } from 'react';
import {
    View,
    Text,
    styleSheet,
    TouchableOpacity,
    PixelRatio,
    StatusBar,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import StyleObject from './styleSheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReCharge extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '重复消费',
		headerTitleStyle:{alignSelf:'center',justifyContent:'center',fontSize:14},
        headerStyle:{height:50,paddingTop:20,},
        headerLeft: (
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='ios-arrow-back' size={25} color='#1d1d1d' style={{marginLeft:10}}/>
                    </TouchableOpacity>
                   ), 
    });
    render(){
        return(
            <View style={StyleObject.UserFundReContainer}>
                <StatusBar
                    barStyle='dark-content'
                />
                <View style={StyleObject.UserFundReTop}>
                    <View style={StyleObject.UserFundReTopText}>
                        <Text style={{color:'#1d1d1d'}}>重复消费资金总额(元)</Text>
                        <View style={StyleObject.UserFundReTopNum}>
                            <View style={StyleObject.UserFundReMarginRight}>
                                <Text style={StyleObject.UserFundReTopNumText}>6666</Text>
                            </View>
                            <View style={[StyleObject.UserFundReStatus,StyleObject.UserReStatus]}>
                                <Text style={StyleObject.UserFundReStatusText}>待消费</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[StyleObject.flexDirection,StyleObject.UserCommenSupLayout,StyleObject.UserCommenTop,StyleObject.UserFundReBottom]}>
                        <View style={[StyleObject.UserCommenTopLeft,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>可用资金(元)</Text>
                            <Text style={[StyleObject.UserCommenTopText]}>6000.00</Text>
                        </View>
                        <View style={StyleObject.UserCommenSplitLine}></View>
                        <View style={[StyleObject.UserCommenTopRight,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>冻结资金(元)</Text>
                            <Text style={[StyleObject.UserCommenTopText]}>666</Text>
                        </View>
                    </View>
                </View>
                <View style={[StyleObject.flexDirection,{paddingBottom:15}]}>
                    <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomRight]}>
                            <Text style={StyleObject.textColor}>去消费</Text>
                       </TouchableOpacity>
                </View>
            </View>
        )
    }
}


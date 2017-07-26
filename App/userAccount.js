import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,   
    StatusBar,
    StyleSheet, 
    ScrollView,
    PixelRatio,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleObject from './styleSheet';

export default class UserAccount extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation})=>({
        headerTitle: '账户余额',
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
            <View style={[StyleObject.flex,styles.UserAccountLayout]}>
                <StatusBar
                    barStyle='dark-content'
                />
               <View style={styles.UserAccountTop}>
                    <View style={[StyleObject.center,StyleObject.UserCommenSubLayout]}>
                        <Text>当日收益</Text>
                        <Text  style={styles.UserAccountProfit}>+666.66</Text>
                        <Text>账户余额¥6666.0</Text>
                    </View>
                    <View style={[StyleObject.flexDirection,styles.UserAccountSupLayout]}>
                        <View style={[StyleObject.UserCommenTopLeft,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>可用余额(元)</Text>
                            <Text style={[StyleObject.UserCommenMarginBottom,StyleObject.UserCommenTopText]}>6000.00</Text>
                        </View>
                        <View style={StyleObject.UserCommenSplitLine}></View>
                        <View style={[StyleObject.UserCommenTopRight,StyleObject.flex]}>
                            <Text style={StyleObject.UserCommenMarginBottom}>冻结金额(元)</Text>
                            <Text style={[StyleObject.UserCommenMarginBottom,styles.UserCommenTopText]}>666.00</Text>
                        </View>
                    </View>
               </View>
               <View style={StyleObject.flex}>
                   <View style={StyleObject.UserCommenTitle}>
                        <Text style={StyleObject.fontSize}>收支明细</Text>
                   </View>
                    <View style={StyleObject.flex}>
                        <ScrollView
                                showsVerticalScrollIndicator={false}	 
                        >
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                                <View style={styles.UserAccountItem}>
                                    <View style={[StyleObject.flexDirection,styles.UserAccountItemTop]}>
                                        <Text style={{color:'#1d1d1d'}}>转账至零钱</Text>
                                        <Text style={{color:"#1d1d1d"}}>-66.66</Text>
                                    </View>
                                    <View style={StyleObject.flexDirection}>
                                        <Text style={StyleObject.fontSize}>2017-05-16</Text>
                                        <Text style={StyleObject.fontSize}>成功</Text>
                                    </View>
                                </View>
                        </ScrollView>
                    </View>
                   <View style={[StyleObject.flexDirection,StyleObject.UserCommenBottom]}>
                       <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomLeft]}>
                            <Text style={{color:'#1d1d1d'}}>转至零钱</Text>
                       </TouchableOpacity> 
                       <TouchableOpacity style={[StyleObject.UserCommenBottomCommen,StyleObject.UserCommenBottomRight]}>
                            <Text style={{color:'#fff'}}>消费</Text>
                       </TouchableOpacity> 
                   </View>
               </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    UserAccountLayout:{
        paddingTop:10,
    },
    UserAccountTop:{
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
    },
    UserAccountProfit:{
        fontSize:25,
        color:'#D70008',
        marginTop:8,
        marginBottom:8
    },
    UserAccountSupLayout:{
        paddingTop:5,
        paddingBottom:5,
        marginTop:10,
        alignItems:'center',
    },
    UserAccountItem:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
        borderColor:'#ddd',
        borderTopWidth:0,
        borderBottomWidth:1/PixelRatio.get(),
    },
    UserAccountItemTop:{
        marginBottom:10
    },
});